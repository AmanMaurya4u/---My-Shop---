/* ============================================
   ARUN ELECTRONICS — Product Engine
   Products, Dialog Manager, Deals, Reviews
   ============================================ */

/* ---------- PRODUCT DATABASE ---------- */
const PRODUCTS = [
  // ===== ELECTRICAL ACCESSORIES =====
  { id: 1, name: 'Switch', category: 'electrical', image: 'images/products/switch.png', description: 'Quality modular switches for home & office wiring.', availability: 'In Stock', keywords: ['switch', 'modular', 'button', 'on off'], related: [2, 3, 10, 12], price: 45 },
  { id: 2, name: 'Socket', category: 'electrical', image: 'images/products/socket.png', description: 'Standard & universal sockets for all plug types.', availability: 'In Stock', keywords: ['socket', 'plug point', 'power point'], related: [1, 3, 13, 12], price: 80 },
  { id: 3, name: 'Plug', category: 'electrical', image: 'images/products/plug.jpg', description: '3-pin & 2-pin plugs for safe connections.', availability: 'In Stock', keywords: ['plug', 'pin', 'male plug'], related: [2, 1, 9, 13], price: 60 },
  { id: 4, name: 'Fuse', category: 'electrical', image: 'images/products/fuse.jpg', description: 'Kit Kat fuse & HRC fuse for circuit protection.', availability: 'In Stock', keywords: ['fuse', 'protection', 'safety', 'circuit'], related: [21, 22, 23, 5], price: 120 },
  { id: 5, name: 'Indicator Light', category: 'electrical', image: 'images/products/indicator-light.jpg', description: 'LED indicator lights for switch boards & panels.', availability: 'In Stock', keywords: ['indicator', 'light', 'led', 'signal', 'glow'], related: [1, 20, 14, 6], price: 50 },
  { id: 6, name: 'Electric Tape', category: 'electrical', image: 'images/products/electric-tape.jpg', description: 'PVC insulation tape for wire joints & safety.', availability: 'In Stock', keywords: ['tape', 'insulation', 'pvc', 'electric tape', 'safety'], related: [7, 8, 18, 19], price: 30 },
  { id: 7, name: 'Wire Clip', category: 'electrical', image: 'images/products/wire-clip.jpg', description: 'Nail clips for neat wall-mounted wire management.', availability: 'In Stock', keywords: ['clip', 'wire clip', 'nail clip', 'cable management'], related: [6, 8, 18, 19], price: 40 },
  { id: 8, name: 'Cable Tie', category: 'electrical', image: 'images/products/cable-tie.jpg', description: 'Nylon cable ties for bundling & organizing wires.', availability: 'In Stock', keywords: ['cable tie', 'zip tie', 'nylon tie', 'bundle'], related: [7, 6, 19, 9], price: 50 },
  { id: 9, name: 'Connector', category: 'electrical', image: 'images/products/connector.jpg', description: 'Wire connectors & junction blocks for secure joints.', availability: 'In Stock', keywords: ['connector', 'junction', 'joint', 'terminal'], related: [18, 19, 6, 3], price: 70 },
  { id: 10, name: 'Holder', category: 'electrical', image: 'images/products/holder.jpg', description: 'Batten & pendant holders for bulbs & tubes.', availability: 'In Stock', keywords: ['holder', 'batten', 'pendant', 'bulb holder'], related: [11, 14, 15, 16], price: 60 },
  { id: 11, name: 'Bulb Holder', category: 'electrical', image: 'images/products/bulb-holder.jpg', description: 'B22 & E27 bulb holders for all LED bulbs.', availability: 'In Stock', keywords: ['bulb holder', 'b22', 'e27', 'lamp holder'], related: [10, 14, 15, 17], price: 70 },
  { id: 12, name: 'Extension Board', category: 'electrical', image: 'images/products/extension-board.jpg', description: 'Multi-socket extension boards with surge protection.', availability: 'In Stock', keywords: ['extension', 'board', 'multi socket', 'power strip'], related: [13, 2, 38, 41], price: 350 },
  { id: 13, name: 'Multi Plug', category: 'electrical', image: 'images/products/multi-plug.jpg', description: 'Multi plug adapters for multiple device charging.', availability: 'In Stock', keywords: ['multi plug', 'adapter', 'multiplug', 'travel'], related: [12, 2, 3, 1], price: 150 },

  // ===== LIGHTING PRODUCTS =====
  { id: 14, name: 'LED Bulb', category: 'lighting', image: 'images/products/led_bulb.png', description: 'Energy-saving LED bulbs — 7W, 9W, 12W, 15W options.', availability: 'In Stock', keywords: ['led', 'bulb', 'light', 'lamp', 'roshni'], related: [15, 16, 17, 10], price: 120 },
  { id: 15, name: 'Tube Light', category: 'lighting', image: 'images/products/tube-light.png', description: 'LED tube lights — bright, flicker-free, long lasting.', availability: 'In Stock', keywords: ['tube', 'tubelight', 'led tube', 'batten'], related: [14, 16, 17, 10], price: 250 },
  { id: 16, name: 'LED Panel Light', category: 'lighting', image: 'images/products/led-panel-light.jpg', description: 'Slim LED panel lights for ceiling — round & square.', availability: 'In Stock', keywords: ['panel', 'ceiling light', 'led panel', 'slim', 'concealed'], related: [14, 15, 17, 11], price: 450 },
  { id: 17, name: 'Night Lamp', category: 'lighting', image: 'images/products/night-lamp.jpg', description: 'Plug-in night lamps with soft warm glow.', availability: 'In Stock', keywords: ['night', 'lamp', 'night lamp', 'bedroom', 'soft light'], related: [14, 16, 15, 11], price: 180 },

  // ===== WIRING & PROTECTION =====
  { id: 18, name: 'Electric Wire', category: 'wiring', image: 'images/products/electric_wire.png', description: 'ISI copper wires — 1mm, 1.5mm, 2.5mm, 4mm.', availability: 'In Stock', keywords: ['wire', 'copper', 'cable', 'wiring', 'electrical wire'], related: [19, 20, 21, 6], price: 850 },
  { id: 19, name: 'Cable', category: 'wiring', image: 'images/products/cable.jpg', description: 'Submersible & multi-core cables for all needs.', availability: 'In Stock', keywords: ['cable', 'multi core', 'submersible', 'flex'], related: [18, 9, 7, 8], price: 1200 },
  { id: 20, name: 'Switch Board', category: 'wiring', image: 'images/products/switch_board.png', description: 'Modular switch boards — 4, 6, 8, 12 module options.', availability: 'In Stock', keywords: ['switch board', 'modular board', 'board', 'panel'], related: [1, 2, 5, 21], price: 650 },
  { id: 21, name: 'MCB', category: 'wiring', image: 'images/products/mcb.jpg', description: 'Miniature Circuit Breaker for overload protection.', availability: 'In Stock', keywords: ['mcb', 'circuit breaker', 'miniature', 'protection', 'trip'], related: [22, 23, 4, 20], price: 220 },
  { id: 22, name: 'RCCB', category: 'wiring', image: 'images/products/rccb.jpg', description: 'Residual Current Circuit Breaker for shock protection.', availability: 'In Stock', keywords: ['rccb', 'earth leakage', 'shock', 'safety', 'residual'], related: [21, 23, 4, 18], price: 1800 },
  { id: 23, name: 'Distribution Board (DB Box)', category: 'wiring', image: 'images/products/distribution-board.jpg', description: 'DB boxes for organized circuit distribution.', availability: 'In Stock', keywords: ['db box', 'distribution', 'board', 'panel', 'circuit box'], related: [21, 22, 20, 4], price: 950 },
  // ===== FAN & HOME ELECTRICAL ====
  { id: 24, name: 'Fan Regulator', category: 'fan', image: 'images/products/fan-regulator.jpg', description: 'Electronic & conventional fan speed regulators.', availability: 'In Stock', keywords: ['regulator', 'fan regulator', 'speed', 'control', 'dimmer'], related: [27, 25, 28, 29], price: 150 },
  { id: 25, name: 'Door Bell', category: 'fan', image: 'images/products/door-bell.jpg', description: 'Musical & ding-dong door bells for home.', availability: 'In Stock', keywords: ['bell', 'door bell', 'calling bell', 'musical', 'ding dong'], related: [24, 1, 20, 5], price: 250 },
  { id: 26, name: 'Table Fan', category: 'fan', image: 'images/products/table-fan.jpg', description: 'Portable table fans — high speed, low noise.', availability: 'In Stock', keywords: ['table fan', 'portable fan', 'desk fan', 'small fan'], related: [27, 28, 24, 45], price: 1800 },
  { id: 27, name: 'Ceiling Fan', category: 'fan', image: 'images/products/ceiling_fan.png', description: 'Ceiling fans — decorative & high-speed models.', availability: 'In Stock', keywords: ['ceiling fan', 'fan', 'pankha', 'hawa'], related: [26, 28, 24, 45], price: 2200 },
  { id: 28, name: 'Exhaust Fan', category: 'fan', image: 'images/products/exhaust-fan.jpg', description: 'Kitchen & bathroom exhaust fans — 6", 9", 12" sizes.', availability: 'In Stock', keywords: ['exhaust', 'exhaust fan', 'ventilation', 'kitchen fan', 'bathroom fan'], related: [27, 26, 24, 29], price: 1200 },

  // ===== KITCHEN APPLIANCES =====
  { id: 29, name: 'Mixer Grinder', category: 'kitchen', image: 'images/products/mixer_grinder.png', description: 'Mixer grinder with 3 jars — grinding, blending, chutney.', availability: 'In Stock', keywords: ['mixer', 'grinder', 'blend', 'juicer', 'kitchen'], related: [30, 31, 32, 33], price: 3200 },
  { id: 30, name: 'Electric Kettle', category: 'kitchen', image: 'images/products/electric-kettle.jpg', description: 'Fast boiling electric kettles — 1L, 1.5L, 2L.', availability: 'In Stock', keywords: ['kettle', 'boil', 'hot water', 'tea', 'coffee'], related: [29, 31, 32, 33], price: 1200 },
  { id: 31, name: 'Induction Cooktop', category: 'kitchen', image: 'images/products/induction-cooktop.jpg', description: 'Energy-efficient induction cooktops with touch controls.', availability: 'In Stock', keywords: ['induction', 'cooktop', 'cooking', 'stove', 'chulha'], related: [29, 33, 30, 32], price: 2800 },
  { id: 32, name: 'Toaster', category: 'kitchen', image: 'images/products/toaster.jpg', description: 'Pop-up & sandwich toasters for quick breakfast.', availability: 'In Stock', keywords: ['toaster', 'toast', 'bread', 'sandwich', 'breakfast'], related: [33, 29, 30, 31], price: 1500 },
  { id: 33, name: 'Microwave Oven', category: 'kitchen', image: 'images/products/microwave_oven.png', description: 'Solo & convection microwave ovens for modern kitchen.', availability: 'Order', keywords: ['microwave', 'oven', 'heating', 'reheat', 'bake'], related: [31, 29, 32, 30], price: 8500 },

  // ===== HEATING PRODUCTS =====
  { id: 34, name: 'Electric Iron', category: 'heating', image: 'images/products/electric_iron.png', description: 'Dry & steam irons for wrinkle-free clothes.', availability: 'In Stock', keywords: ['iron', 'press', 'steam iron', 'dry iron', 'clothes', 'kapda'], related: [35, 36, 37, 12], price: 850 },
  { id: 35, name: 'Water Heater Rod', category: 'heating', image: 'images/products/water-heater-rod.jpg', description: 'Immersion water heater rods — 1000W, 1500W.', availability: 'In Stock', keywords: ['heater rod', 'immersion', 'rod', 'hot water', 'garam pani'], related: [36, 37, 34, 30], price: 650 },
  { id: 36, name: 'Geyser', category: 'heating', image: 'images/products/geyser.png', description: 'Instant & storage geysers — 3L, 6L, 15L, 25L.', availability: 'In Stock', keywords: ['geyser', 'water heater', 'hot water', 'bath', 'instant'], related: [35, 37, 34, 49], price: 6500 },
  { id: 37, name: 'Room Heater', category: 'heating', image: 'images/products/room-heater.jpg', description: 'Fan heaters, oil-filled & quartz room heaters.', availability: 'In Stock', keywords: ['heater', 'room heater', 'warm', 'winter', 'thand', 'sardi'], related: [36, 35, 34, 27], price: 1800 },

  // ===== POWER PRODUCTS =====
  { id: 38, name: 'Stabilizer', category: 'power', image: 'images/products/stabilizer.jpg', description: 'Voltage stabilizers for AC, TV, fridge & home.', availability: 'In Stock', keywords: ['stabilizer', 'voltage', 'regulator', 'protection', 'fluctuation'], related: [39, 40, 41, 49], price: 2500 },
  { id: 39, name: 'Inverter', category: 'power', image: 'images/products/inverter.png', description: 'Home inverters — sine wave, 600VA to 2KVA.', availability: 'In Stock', keywords: ['inverter', 'power backup', 'ups', 'battery', 'bijli'], related: [40, 41, 38, 23], price: 8500 },
  { id: 40, name: 'Battery', category: 'power', image: 'images/products/battery.png', description: 'Inverter batteries — tubular, flat plate, all sizes.', availability: 'In Stock', keywords: ['battery', 'inverter battery', 'tubular', 'power'], related: [39, 41, 38, 23], price: 14500 },
  { id: 41, name: 'UPS', category: 'power', image: 'images/products/ups.jpg', description: 'UPS systems for computer & home electronics backup.', availability: 'In Stock', keywords: ['ups', 'uninterrupted', 'computer', 'backup', 'power supply'], related: [39, 40, 38, 12], price: 2800 },

  // ===== ENTERTAINMENT ELECTRONICS =====
  { id: 42, name: 'D2H Set-top Box', category: 'entertainment', image: 'images/products/d2h.png', description: 'DTH set-top boxes — Tata Play, Airtel, Dish TV & more.', availability: 'In Stock', keywords: ['d2h', 'dth', 'set top box', 'dish', 'tata play', 'airtel'], related: [44, 43, 38, 12], price: 1500 },
  { id: 43, name: 'Speaker', category: 'entertainment', image: 'images/products/speaker.png', description: 'Bluetooth speakers, tower speakers & soundbars.', availability: 'In Stock', keywords: ['speaker', 'bluetooth', 'soundbar', 'music', 'bass', 'gaana'], related: [44, 42, 12, 38], price: 3500 },
  { id: 44, name: 'Television (TV)', category: 'entertainment', image: 'images/products/television.png', description: 'LED, Smart & Android TVs — 24" to 55" all brands.', availability: 'In Stock', keywords: ['tv', 'television', 'led tv', 'smart tv', 'android tv', 'screen'], related: [42, 43, 38, 12], price: 18500 },

  // ===== LARGE APPLIANCES =====
  { id: 45, name: 'Cooler', category: 'large', image: 'images/products/cooler.png', description: 'Desert & personal coolers for summer comfort.', availability: 'In Stock', keywords: ['cooler', 'desert cooler', 'air cooler', 'summer', 'thanda'], related: [46, 49, 27, 26], price: 6500 },
  { id: 46, name: 'Air Cooler', category: 'large', image: 'images/products/air-cooler.png', description: 'Tower & window air coolers with ice chamber.', availability: 'In Stock', keywords: ['air cooler', 'tower cooler', 'window cooler', 'portable cooler'], related: [45, 49, 27, 28], price: 8500 },
  { id: 47, name: 'Refrigerator (Fridge)', category: 'large', image: 'images/products/refrigerator.png', description: 'Single & double door fridges — top brands available.', availability: 'In Stock', keywords: ['fridge', 'refrigerator', 'single door', 'double door', 'thanda'], related: [38, 12, 45, 49], price: 21500 },
  { id: 48, name: 'Washing Machine', category: 'large', image: 'images/products/washing_machine.png', description: 'Semi-auto & fully automatic washing machines.', availability: 'Order', keywords: ['washing machine', 'washer', 'laundry', 'kapda dhona'], related: [34, 38, 12, 47], price: 14500 },
  { id: 49, name: 'Air Conditioner (AC)', category: 'large', image: 'images/products/air_conditioner.png', description: 'Split & window ACs — 1T, 1.5T, 2T all brands.', availability: 'Order', keywords: ['ac', 'air conditioner', 'split ac', 'window ac', 'cooling'], related: [38, 45, 46, 12], price: 36500 },
  { id: 50, name: 'Water Purifier (RO)', category: 'large', image: 'images/products/water-purifier.jpg', description: 'RO+UV water purifiers for clean drinking water.', availability: 'In Stock', keywords: ['ro', 'water purifier', 'filter', 'clean water', 'pani'], related: [36, 30, 38, 12], price: 9500 }
];

/* ---------- REPAIR SERVICES ---------- */
const REPAIR_SERVICES = [
  { id: 'r1', name: 'TV Repair', description: 'LED, LCD, Smart TV repair — display, sound, motherboard.', keywords: ['tv', 'television', 'screen', 'display'] },
  { id: 'r2', name: 'Fridge Repair', description: 'Cooling problem, gas filling, compressor & thermostat repair.', keywords: ['fridge', 'refrigerator', 'cooling', 'compressor'] },
  { id: 'r3', name: 'Cooler Repair', description: 'Motor, pump, pad replacement & full servicing.', keywords: ['cooler', 'motor', 'pump', 'pad'] },
  { id: 'r4', name: 'AC Repair', description: 'AC gas filling, compressor repair, installation & servicing.', keywords: ['ac', 'air conditioner', 'gas', 'cooling'] },
  { id: 'r5', name: 'Washing Machine Repair', description: 'Drum, motor, drain & timer repair for all models.', keywords: ['washing machine', 'washer', 'drum', 'motor'] },
  { id: 'r6', name: 'Electrical Wiring Repair', description: 'House wiring, short circuit fix, board installation.', keywords: ['wiring', 'electrical', 'short circuit', 'wire', 'board'] }
];

/* ---------- CATEGORY DEFINITIONS ---------- */
const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'wiring', label: 'Wiring & Protection' },
  { id: 'fan', label: 'Fan & Home' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'heating', label: 'Heating' },
  { id: 'power', label: 'Power' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'large', label: 'Large Appliances' },
  { id: 'repairing', label: 'Repairing' }
];

/* ---------- CATEGORY COLOR MAP ---------- */
const CATEGORY_COLORS = {
  electrical: { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', text: '#667eea' },
  lighting: { bg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', text: '#f59e0b' },
  wiring: { bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', text: '#8b5cf6' },
  fan: { bg: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', text: '#3b82f6' },
  kitchen: { bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', text: '#f97316' },
  heating: { bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', text: '#ef4444' },
  power: { bg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', text: '#0ea5e9' },
  entertainment: { bg: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)', text: '#22c55e' },
  large: { bg: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)', text: '#64748b' }
};

/* ---------- TODAY'S DEALS ---------- */
const DEALS = [
  { productId: 14, discount: '20% OFF', offerText: 'LED Bulbs — Save on energy bills!' },
  { productId: 27, discount: '15% OFF', offerText: 'Ceiling Fans — Summer special deal!' },
  { productId: 44, discount: '10% OFF', offerText: 'Smart TVs — Festival season offer!' },
  { productId: 29, discount: '25% OFF', offerText: 'Mixer Grinder — Kitchen combo deal!' },
  { productId: 39, discount: 'BEST PRICE', offerText: 'Inverters — Power backup at best rate!' },
  { productId: 12, discount: 'SPECIAL OFFER', offerText: 'Extension Board — Limited time!' }
];

/* ---------- CUSTOMER REVIEWS ---------- */
const REVIEWS = [
  { name: 'Rajesh Kumar', rating: 5, message: 'Bought a LED TV from Arun Electronics. Excellent quality and best price in Bhadohi. Very trustworthy shop!', date: '2 weeks ago' },
  { name: 'Sunita Devi', rating: 5, message: 'Got my cooler repaired here. Very skilled technician and reasonable charges. Highly recommended!', date: '1 month ago' },
  { name: 'Amit Verma', rating: 4, message: 'Good collection of electrical items. They have everything from switches to inverters. One stop shop!', date: '3 weeks ago' },
  { name: 'Priya Singh', rating: 5, message: 'Best electronics shop in Gopiganj! Bought fridge and got free delivery. Amazing service!', date: '1 week ago' },
  { name: 'Mohd Arif', rating: 4, message: 'Good quality products at affordable prices. The owner is very helpful and knowledgeable.', date: '2 months ago' },
  { name: 'Neha Gupta', rating: 5, message: 'My washing machine was repaired same day! Quick and efficient service. Thank you Arun Electronics.', date: '5 days ago' }
];

/* ============================================
   INITIALIZATION
   ============================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initProductPage();
  });
} else {
  initProductPage();
}

function initProductPage() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return; // Not on products page

  renderProducts('all');
  initCategoryFilters();
  initProductSearchEngine();
  initVoiceSearch();
  renderDeals();
  renderReviews();
  renderRepairServices();
}

/* ============================================
   PRODUCT RENDERING ON PAGE
   ============================================ */
function renderProducts(category, searchQuery = '') {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  let filtered = PRODUCTS;

  // Category filter
  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  // Search filter
  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => {
      return p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.description.toLowerCase().includes(q) ||
             (p.keywords && p.keywords.some(k => k.includes(q)));
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.classList.add('show');
    return;
  }

  if (noResults) noResults.classList.remove('show');

  grid.innerHTML = filtered.map((product, index) => {
    const categoryLabel = CATEGORIES.find(c => c.id === product.category)?.label || product.category;
    const delay = (index % 4) + 1;

    return `
      <div class="product-card animate-on-scroll delay-${delay}" data-id="${product.id}" onclick="openProductModal(${product.id})">
        <div class="product-card-image">
          <span class="product-card-badge">${categoryLabel}</span>
          <img src="${product.image}" alt="${product.name}" class="product-real-image" loading="lazy" onerror="this.onerror=null; this.src='images/products/default-placeholder.jpg';">
        </div>
        <div class="product-card-body">
          <h4>${product.name}</h4>
          <p class="category">${categoryLabel}</p>
          <p class="product-desc">${product.description}</p>
          <div class="product-price-label">Price Available on Request</div>
          <div class="product-card-footer">
            <span class="availability-badge ${product.availability === 'In Stock' ? 'in-stock' : 'on-order'}">
              ${product.availability === 'In Stock' ? '✅' : '📋'} ${product.availability}
            </span>
            <button class="btn btn-whatsapp btn-sm" onclick="event.stopPropagation(); openWhatsApp('${product.name}')">
              💬 Ask Price
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-trigger scroll animations for newly rendered cards
  requestAnimationFrame(() => {
    const newCards = grid.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    newCards.forEach(el => observer.observe(el));
  });
}

/* ============================================
   CATEGORY FILTERS
   ============================================ */
let activeCategory = 'all';

function initCategoryFilters() {
  const container = document.getElementById('filterTabs');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-tab ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}" onclick="filterByCategory('${cat.id}')">
      ${cat.label}
    </button>
  `).join('');
}

function filterByCategory(categoryId) {
  activeCategory = categoryId;

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === categoryId);
  });

  const repairSection = document.getElementById('repairServicesSection');
  const productSection = document.getElementById('productGridWrapper');

  if (categoryId === 'repairing') {
    if (repairSection) repairSection.style.display = 'block';
    if (productSection) productSection.style.display = 'none';
  } else {
    if (repairSection) repairSection.style.display = 'none';
    if (productSection) productSection.style.display = 'block';
    renderProducts(categoryId, document.getElementById('productSearch')?.value || '');
  }

  const searchInput = document.getElementById('productSearch');
  if (searchInput && categoryId !== activeCategory) searchInput.value = '';
}

/* ============================================
   PRODUCT SEARCH ENGINE
   ============================================ */
function initProductSearchEngine() {
  const searchInput = document.getElementById('productSearch');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim();
      if (query) {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        const allTab = document.querySelector('.filter-tab[data-filter="all"]');
        if (allTab) allTab.classList.add('active');
        activeCategory = 'all';
      }
      renderProducts('all', query);
    }, 250);
  });
}

/* ============================================
   VOICE SEARCH ON PRODUCTS PAGE
   ============================================ */
function initVoiceSearch() {
  const voiceBtn = document.getElementById('voiceSearchBtn');
  if (!voiceBtn) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceBtn.style.display = 'none';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  voiceBtn.addEventListener('click', () => {
    voiceBtn.classList.add('listening');
    voiceBtn.innerHTML = '<span class="voice-pulse"></span> 🎤';
    recognition.start();
  });

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
      searchInput.value = transcript;
      searchInput.dispatchEvent(new Event('input'));
    }
    stopVoice();
  });

  recognition.addEventListener('speechend', () => stopVoice());
  recognition.addEventListener('error', () => stopVoice());

  function stopVoice() {
    voiceBtn.classList.remove('listening');
    voiceBtn.innerHTML = '🎤';
  }
}

/* ============================================
   PRODUCT DETAIL MODAL
   ============================================ */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const colors = CATEGORY_COLORS[product.category] || CATEGORY_COLORS.electrical;
  const categoryLabel = CATEGORIES.find(c => c.id === product.category)?.label || product.category;

  const relatedProducts = (product.related || [])
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  const modal = document.getElementById('productModal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeProductModal()"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="closeProductModal()">✕</button>

      <div class="modal-product">
        <div class="modal-product-image">
          <img src="${product.image}" alt="${product.name}" class="modal-real-image" loading="lazy" onerror="this.onerror=null; this.src='images/products/default-placeholder.jpg';">
        </div>
        <div class="modal-product-info">
          <span class="modal-badge" style="background: ${colors.text};">${categoryLabel}</span>
          <h2>${product.name}</h2>
          <p class="modal-desc">${product.description}</p>
          <div class="modal-price-label">Price Available on Request</div>
          <div class="modal-availability ${product.availability === 'In Stock' ? 'in-stock' : 'on-order'}">
            ${product.availability === 'In Stock' ? '✅ In Stock — Available at Shop' : '📋 Available on Order'}
          </div>
          <div class="modal-actions">
            <button class="btn btn-whatsapp" onclick="openWhatsApp('${product.name}')">
              💬 Ask Price on WhatsApp
            </button>
            <a href="contact.html" class="btn btn-outline-primary">📞 Contact Us</a>
          </div>
        </div>
      </div>

      ${relatedProducts.length > 0 ? `
        <div class="modal-related">
          <h3>You May Also Like</h3>
          <div class="related-grid">
            ${relatedProducts.map(rp => {
              return `
                <div class="related-card" onclick="closeProductModal(); setTimeout(() => openProductModal(${rp.id}), 300);">
                  <div class="related-card-image">
                    <img src="${rp.image}" alt="${rp.name}" class="related-real-image" loading="lazy" onerror="this.onerror=null; this.src='images/products/default-placeholder.jpg';">
                  </div>
                  <div class="related-card-info">
                    <h5>${rp.name}</h5>
                    <p class="related-price-label">Price on Request</p>
                    <p class="related-avail">${rp.availability}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProductModal();
});
/* ============================================
   DEALS / OFFERS RENDERING
   ============================================ */
function renderDeals() {
  const container = document.getElementById('dealsGrid');
  if (!container) return;

  container.innerHTML = DEALS.map((deal, index) => {
    const product = PRODUCTS.find(p => p.id === deal.productId);
    if (!product) return '';
    const delay = (index % 4) + 1;

    return `
      <div class="deal-card animate-on-scroll delay-${delay}" onclick="openProductModal(${product.id})">
        <div class="deal-badge">${deal.discount}</div>
        <div class="deal-image">
          <img src="${product.image}" alt="${product.name}" class="deal-real-image" loading="lazy" onerror="this.onerror=null; this.src='images/products/default-placeholder.jpg';">
        </div>
        <div class="deal-body">
          <h4>${product.name}</h4>
          <p class="deal-price-line"><span class="deal-item-price">Price Available on Request</span></p>
          <p class="deal-offer-text">${deal.offerText}</p>
          <button class="btn btn-whatsapp btn-sm" onclick="event.stopPropagation(); openWhatsApp('${product.name} — ${deal.discount}')">
            💬 Ask Price
          </button>
        </div>
      </div>
    `;
  }).join('');

  requestAnimationFrame(() => {
    const cards = container.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    cards.forEach(el => observer.observe(el));
  });
}


/* ============================================
   CUSTOMER REVIEWS RENDERING
   ============================================ */
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  container.innerHTML = REVIEWS.map((review, index) => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const initials = review.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const delay = (index % 4) + 1;

    return `
      <div class="review-card animate-on-scroll delay-${delay}">
        <div class="review-header">
          <div class="review-avatar">${initials}</div>
          <div class="review-meta">
            <h5>${review.name}</h5>
            <span class="review-date">${review.date}</span>
          </div>
        </div>
        <div class="review-stars">${stars}</div>
        <p class="review-text">"${review.message}"</p>
      </div>
    `;
  }).join('');

  requestAnimationFrame(() => {
    const cards = container.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    cards.forEach(el => observer.observe(el));
  });
}


/* ============================================
   REPAIR SERVICES RENDERING
   ============================================ */
function renderRepairServices() {
  const container = document.getElementById('repairGrid');
  if (!container) return;

  container.innerHTML = REPAIR_SERVICES.map((service, index) => {
    const delay = (index % 4) + 1;
    return `
      <div class="repair-card animate-on-scroll delay-${delay}">
        <div class="repair-icon">🛠️</div>
        <h4>${service.name}</h4>
        <p>${service.description}</p>
        <button class="btn btn-whatsapp btn-sm" onclick="openWhatsApp('${service.name} Service')">
          💬 Book on WhatsApp
        </button>
      </div>
    `;
  }).join('');

  requestAnimationFrame(() => {
    const cards = container.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    cards.forEach(el => observer.observe(el));
  });
}


/* ============================================
   WHATSAPP INTEGRATION
   ============================================ */
function openWhatsApp(productName) {
  const phone = '919005739983';
  const message = encodeURIComponent(
    `Hello Arun Electronics,\nI would like to know the latest price of ${productName}.`
  );
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}
