// =============================================
// app.js
// =============================================

const STORAGE_KEY = 'secondhand_products';
const TAGS_KEY = 'secondhand_tags';

// ── State ──────────────────────────────────
let products = [];
let tags = [];
let activeTag = '全部';
let adminMode = false;
let editingId = null;

// ── Init ───────────────────────────────────
function init() {
  loadData();
  renderTagFilters();
  renderProducts();
  bindEvents();
}

function loadData() {
  // Load tags
  const savedTags = localStorage.getItem(TAGS_KEY);
  tags = savedTags ? JSON.parse(savedTags) : [...DEFAULT_TAGS];

  // Load products
  const savedProducts = localStorage.getItem(STORAGE_KEY);
  if (savedProducts) {
    products = JSON.parse(savedProducts);
  } else {
    // Load sample data on first run
    products = SAMPLE_PRODUCTS.map(p => ({ ...p }));
    saveProducts();
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function saveTags() {
  localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
}

// ── Condition Helpers ──────────────────────
function conditionClass(damage) {
  if (damage === '全新未拆') return 'cond-new';
  if (damage === '近全新') return 'cond-near-new';
  if (damage === '輕微使用痕跡') return 'cond-used';
  return 'cond-damaged';
}

// ── Render Tags ────────────────────────────
function renderTagFilters() {
  const container = document.getElementById('filterTags');
  const allTags = ['全部', ...tags];
  container.innerHTML = allTags.map(t =>
    `<button class="tag-btn ${t === activeTag ? 'active' : ''}" data-tag="${t}">${t}</button>`
  ).join('');
  container.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.dataset.tag;
      container.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });
}

// ── Render Products ────────────────────────
function renderProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const sort = document.getElementById('sortSelect').value;

  let filtered = products.filter(p => {
    const matchTag = activeTag === '全部' || (p.tags && p.tags.includes(activeTag));
    const matchSearch = !query || p.name.toLowerCase().includes(query);
    return matchTag && matchSearch;
  });

  // Sort
  filtered.sort((a, b) => {
    if (sort === 'newest') return new Date(b.dateAdded) - new Date(a.dateAdded);
    if (sort === 'oldest') return new Date(a.dateAdded) - new Date(b.dateAdded);
    if (sort === 'name') return a.name.localeCompare(b.name, 'zh-TW');
    return 0;
  });

  const grid = document.getElementById('productGrid');
  const empty = document.getElementById('emptyState');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      ${adminMode ? `<button class="card-edit-btn" data-edit="${p.id}">✏ 編輯</button>` : ''}
      ${p.image
        ? `<img class="card-img" src="${escHtml(p.image)}" alt="${escHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="card-img-placeholder" style="display:none">📦</div>`
        : `<div class="card-img-placeholder">📦</div>`}
      <div class="card-body">
        <div class="card-tags">
          ${(p.tags || []).map(t => `<span class="card-tag">${escHtml(t)}</span>`).join('')}
        </div>
        <div class="card-name">${escHtml(p.name)}</div>
        <div class="card-meta">
          <span class="card-condition ${conditionClass(p.damage)}">${escHtml(p.damage)}</span>
          <span>${p.dateAdded || ''}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Bind card clicks
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-edit-btn')) return;
      openProductModal(card.dataset.id);
    });
  });
  grid.querySelectorAll('.card-edit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEditModal(btn.dataset.edit);
    });
  });
}

// ── Product Detail Modal ───────────────────
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalImg').src = p.image || '';
  document.getElementById('modalImg').style.display = p.image ? 'block' : 'none';
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalOrigin').textContent = p.origin || '—';
  document.getElementById('modalPurchaseDate').textContent = p.purchaseDate || '—';
  document.getElementById('modalDamage').textContent = p.damage || '—';
  document.getElementById('modalDesc').textContent = p.description || '';

  const badge = document.getElementById('modalCondition');
  badge.textContent = p.damage;
  badge.className = 'modal-badge ' + conditionClass(p.damage);

  document.getElementById('modalTags').innerHTML = (p.tags || [])
    .map(t => `<span class="card-tag">${escHtml(t)}</span>`).join('');

  // Stores
  const storesEl = document.getElementById('modalStores');
  if (p.stores && p.stores.length > 0) {
    storesEl.innerHTML = p.stores.map(s => {
      const cls = s.type === 'shopee' ? 'store-shopee'
                : s.type === 'convenient' ? 'store-convenient'
                : 'store-default';
      return `<a class="store-link-btn ${cls}" href="${escHtml(s.url)}" target="_blank" rel="noopener">
        <span>${escHtml(s.name)}</span>
        <span class="store-arrow">→</span>
      </a>`;
    }).join('');
  } else {
    storesEl.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">尚無賣場連結</p>';
  }

  document.getElementById('productModal').style.display = 'flex';
}

// ── Edit Modal ─────────────────────────────
function openEditModal(id) {
  editingId = id || null;
  const p = id ? products.find(x => x.id === id) : null;

  document.getElementById('editTitle').textContent = id ? '編輯商品' : '新增商品';
  document.getElementById('editId').value = id || '';
  document.getElementById('editName').value = p ? p.name : '';
  document.getElementById('editImage').value = p ? (p.image || '') : '';
  document.getElementById('editDesc').value = p ? (p.description || '') : '';
  document.getElementById('editOrigin').value = p ? (p.origin || '') : '';
  document.getElementById('editPurchaseDate').value = p ? (p.purchaseDate || '') : '';
  document.getElementById('editDamage').value = p ? (p.damage || '近全新') : '近全新';

  // Tag picker
  renderTagPicker(p ? (p.tags || []) : []);

  // Store list
  renderStoreList(p ? (p.stores || []) : []);

  document.getElementById('editModal').style.display = 'flex';
}

function renderTagPicker(selectedTags) {
  const picker = document.getElementById('tagPicker');
  picker.innerHTML = tags.map(t =>
    `<button class="tag-picker-btn ${selectedTags.includes(t) ? 'selected' : ''}" data-tag="${t}">${t}</button>`
  ).join('');
  picker.querySelectorAll('.tag-picker-btn').forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('selected'));
  });
}

function getSelectedTags() {
  return [...document.querySelectorAll('.tag-picker-btn.selected')].map(b => b.dataset.tag);
}

// ── Store List in Edit ─────────────────────
function renderStoreList(stores) {
  const list = document.getElementById('storeList');
  list.innerHTML = '';
  stores.forEach((s, i) => addStoreEntry(s, i));
}

function addStoreEntry(store, idx) {
  const list = document.getElementById('storeList');
  const div = document.createElement('div');
  div.className = 'store-entry';
  div.innerHTML = `
    <select class="store-type-select">
      <option value="shopee" ${store && store.type === 'shopee' ? 'selected' : ''}>蝦皮</option>
      <option value="convenient" ${store && store.type === 'convenient' ? 'selected' : ''}>賣貨便</option>
      <option value="default" ${store && store.type === 'default' ? 'selected' : ''}>其他</option>
    </select>
    <input type="text" class="store-url-input" placeholder="賣場網址 https://..." value="${store ? escHtml(store.url) : ''}" />
    <button class="store-remove-btn" type="button">✕</button>
  `;
  div.querySelector('.store-remove-btn').addEventListener('click', () => div.remove());
  list.appendChild(div);
}

function getStoreEntries() {
  const typeMap = { shopee: '蝦皮賣場', convenient: '賣貨便', default: '其他賣場' };
  return [...document.querySelectorAll('.store-entry')].map(entry => {
    const type = entry.querySelector('.store-type-select').value;
    const url = entry.querySelector('.store-url-input').value.trim();
    return { name: typeMap[type] || '賣場', url, type };
  }).filter(s => s.url);
}

// ── Save Product ───────────────────────────
function saveProduct() {
  const name = document.getElementById('editName').value.trim();
  if (!name) { alert('請填寫商品名稱'); return; }

  const id = editingId || ('p' + Date.now());
  const existingIdx = products.findIndex(x => x.id === id);

  const product = {
    id,
    name,
    image: document.getElementById('editImage').value.trim(),
    description: document.getElementById('editDesc').value.trim(),
    origin: document.getElementById('editOrigin').value.trim(),
    purchaseDate: document.getElementById('editPurchaseDate').value.trim(),
    damage: document.getElementById('editDamage').value,
    tags: getSelectedTags(),
    dateAdded: existingIdx >= 0 ? (products[existingIdx].dateAdded || today()) : today(),
    stores: getStoreEntries()
  };

  if (existingIdx >= 0) {
    products[existingIdx] = product;
  } else {
    products.unshift(product);
  }

  saveProducts();
  closeAllModals();
  renderProducts();
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

// ── Tags Manager ───────────────────────────
function openTagsModal() {
  renderExistingTags();
  document.getElementById('tagsModal').style.display = 'flex';
}

function renderExistingTags() {
  const container = document.getElementById('existingTags');
  container.innerHTML = tags.map(t => `
    <div class="existing-tag">
      <span>${escHtml(t)}</span>
      <button data-tag="${t}" title="刪除標籤">✕</button>
    </div>
  `).join('');
  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (confirm(`確定刪除標籤「${tag}」？`)) {
        tags = tags.filter(t => t !== tag);
        saveTags();
        renderExistingTags();
        renderTagFilters();
      }
    });
  });
}

function addTag() {
  const input = document.getElementById('newTagInput');
  const val = input.value.trim();
  if (!val) return;
  if (tags.includes(val)) { alert('標籤已存在'); return; }
  tags.push(val);
  saveTags();
  input.value = '';
  renderExistingTags();
  renderTagFilters();
}

// ── Export / Import ────────────────────────
function exportData() {
  const data = { products, tags };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `secondhand_backup_${today()}.json`;
  a.click();
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.products) {
        products = data.products;
        saveProducts();
      }
      if (data.tags) {
        tags = data.tags;
        saveTags();
      }
      renderTagFilters();
      renderProducts();
      alert('匯入成功！');
    } catch (err) {
      alert('匯入失敗：檔案格式錯誤');
    }
  };
  reader.readAsText(file);
}

// ── Helpers ────────────────────────────────
function closeAllModals() {
  ['productModal', 'editModal', 'tagsModal'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Events ─────────────────────────────────
function bindEvents() {
  // 幫每個按鈕加上 if 判斷，有找到按鈕才綁定事件
  const adminToggle = document.getElementById('adminToggle');
  if (adminToggle) {
    adminToggle.addEventListener('click', () => {
      adminMode = !adminMode;
      const panel = document.getElementById('adminPanel');
      if (adminMode) {
        panel.style.display = 'block';
        adminToggle.classList.add('active');
        document.body.classList.add('admin-mode');
      } else {
        panel.style.display = 'none';
        adminToggle.classList.remove('active');
        document.body.classList.remove('admin-mode');
      }
      renderProducts();
    });
  }

  const addProductBtn = document.getElementById('addProductBtn');
  if (addProductBtn) addProductBtn.addEventListener('click', () => openEditModal(null));

  const manageTagsBtn = document.getElementById('manageTagsBtn');
  if (manageTagsBtn) manageTagsBtn.addEventListener('click', openTagsModal);

  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportData);

  const importFile = document.getElementById('importFile');
  if (importFile) {
    importFile.addEventListener('change', (e) => {
      if (e.target.files[0]) importData(e.target.files[0]);
      e.target.value = '';
    });
  }

  // Add product
  document.getElementById('addProductBtn').addEventListener('click', () => openEditModal(null));

  // Manage tags
  document.getElementById('manageTagsBtn').addEventListener('click', openTagsModal);

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportData);

  // Import
  document.getElementById('importFile').addEventListener('change', (e) => {
    if (e.target.files[0]) importData(e.target.files[0]);
    e.target.value = '';
  });

  // Add store btn
  document.getElementById('addStoreBtn').addEventListener('click', () => addStoreEntry({}, -1));

  // Save product
  document.getElementById('saveProductBtn').addEventListener('click', saveProduct);
  document.getElementById('cancelEditBtn').addEventListener('click', closeAllModals);

  // Add tag
  document.getElementById('addTagBtn').addEventListener('click', addTag);
  document.getElementById('newTagInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTag();
  });

  // Close modals
  document.getElementById('modalClose').addEventListener('click', closeAllModals);
  document.getElementById('editClose').addEventListener('click', closeAllModals);
  document.getElementById('tagsClose').addEventListener('click', closeAllModals);

  // Click overlay to close
  ['productModal', 'editModal', 'tagsModal'].forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
      if (e.target.id === id) closeAllModals();
    });
  });

  // Search & sort
  document.getElementById('searchInput').addEventListener('input', renderProducts);
  document.getElementById('sortSelect').addEventListener('change', renderProducts);

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

const addBtn = document.getElementById('addProductBtn');
if (addBtn) {
    addBtn.addEventListener('click', () => { /* 你的邏輯 */ });
}
  
}

// ── Start ───────────────────────────────────
init();
