/* ============================================
   ARUN ELECTRONICS — Product Engine & Advanced AI Chatbot
   Products, Dialog Manager, Speech Recognition, TTS, Deals, Reviews
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
    if (!document.getElementById('productGrid')) {
      initAIChatbot();
    }
  });
} else {
  initProductPage();
  if (!document.getElementById('productGrid')) {
    initAIChatbot();
  }
}

function initProductPage() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return; // Not on products page

  renderProducts('all');
  initCategoryFilters();
  initProductSearchEngine();
  initVoiceSearch();
  initAIChatbot();
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
   ADVANCED AI CHATBOT SYSTEM
   ============================================ */

// Chat history array
let chatHistory = [];

// Session context storage for conversational memory
let chatSessionState = {
  lastCategory: null,     // 'large', 'power', etc.
  lastProductName: null,  // 'Air Conditioner (AC)', 'Inverter', etc.
  lastProducts: [],       // list of products matched in the last response
  awaitingBudget: false,   // true if bot is waiting for a budget number
  currentBudget: null
};

// --- DICTIONARIES & KNOWLEDGE BASES ---

const SHOP_METADATA = {
  name: "Arun Electronics",
  owner: "Shri Arun Maurya",
  location: "Station Road, Gopiganj, Bhadohi, Uttar Pradesh, 221303",
  mapLink: "https://www.google.com/maps/search/Arun+Electronics+Station+Road+Gopiganj+Gerai+UP+221303",
  phone: "+91 9005739983",
  whatsapp: "+91 9005739983",
  timings: "9:00 AM – 9:00 PM (Monday to Sunday, all days open)",
  services: ["Sales of 50+ Electronics Appliances", "Expert Appliance Repairing (TV, Fridge, AC, Cooler, Washing Machine)", "Electrical House Wiring", "Inverter & Power Backup Setup"],
  payments: ["Cash", "UPI (Google Pay, PhonePe, Paytm, BHIM)", "Debit/Credit Cards"]
};

// General FAQ mapping
const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ['timing', 'timings', 'khulne ka samay', 'open', 'close', 'kab khulega', 'kab band', 'working hours', 'hours'],
    response: "⏰ **Ji, humare shop ke timings subah 9:00 AM se raat 9:00 PM tak hain.**\n\nHum all 7 days open rehte hain, aap kisi bhi din visit kar sakte hain! Aap humare shop par aakar best products explore kar sakte hain."
  },
  {
    keywords: ['location', 'address', 'pata', 'dukan kahan', 'kahan hai', 'where is', 'address kya hai', 'route', 'map', 'gopiganj', 'bhadohi', 'station road'],
    response: "📍 **Ji, humare shop ka address hai:**\n**Arun Electronics, Station Road, Gopiganj, Bhadohi, Uttar Pradesh - 221303**.\n\nAap Station Road par easily hume locate kar sakte hain. Niche 'Map Location' suggest button par click karke direct directions bhi dekh sakte hain."
  },
  {
    keywords: ['contact', 'phone', 'mobile', 'number', 'whatsapp', 'call', 'phone number', 'contact number'],
    response: "📞 **Ji, aap humse in contact numbers par connect kar sakte hain:**\n- **Call & WhatsApp:** +91 9005739983\n- **Email:** contact@arunelectronics.com\n\nAap WhatsApp par click karke direct price enquiry ya repair booking bhi send kar sakte hain."
  },
  {
    keywords: ['payment', 'cash', 'upi', 'gpay', 'phonepe', 'card', 'online', 'paytm', 'net banking'],
    response: "💳 **Ji bilkul, humare paas payment ke multiple options available hain:**\n- Cash\n- UPI (Google Pay, PhonePe, Paytm, BHIM UPI)\n- Credit Card & Debit Card swipe\n- Net Banking"
  },
  {
    keywords: ['delivery', 'home delivery', 'free delivery', 'deliver', 'delivering', 'ghar par'],
    response: "🚚 **Ji, hum premium and large appliances ke liye Home Delivery ki facility provide karte hain!**\n\nGopiganj aur uske surrounding areas (within 15km) mein free delivery aur installation guidelines support available hai."
  },
  {
    keywords: ['warranty', 'guarantee', 'repair warranty', 'brand warranty'],
    response: "🛡️ **Ji, humare paas milne wale sabhi products par official brand warranty milti hai.**\n\nFor example, AC and Refrigerator compressors par 5-10 years ki warranty hoti hai. Repair services par bhi hum standard service warranty provide karte hain."
  }
];

// General Knowledge & Technical Explanations
const GENERAL_QA = [
  {
    keywords: ['what is ai', 'artificial intelligence', 'ai kya hai', 'ai definition', 'define ai'],
    response: "🤖 **AI (Artificial Intelligence)** is technology that enables computers to perform tasks that normally require human intelligence. This includes learning, reasoning, pattern recognition, and decision making.\n\nIn modern consumer electronics, AI is used in Smart TVs (for image upscaling and voice recognition), smart ACs (for auto energy-saving based on room occupancy), and washing machines (to auto-detect load weight). Arun Electronics sells all these smart products!"
  },
  {
    keywords: ['prime minister of india', 'india ka prime minister', 'bharat ka pradhan mantri', 'pm of india', 'who is pm'],
    response: "🇮🇳 The Prime Minister of India is **Shri Narendra Modi**. He has been serving as the Prime Minister since May 26, 2014, representing the Bharatiya Janata Party (BJP)."
  },
  {
    keywords: ['what is javascript', 'javascript kya hai', 'js kya hai', 'explain javascript', 'js language'],
    response: "🌐 **JavaScript (JS)** is a lightweight, scripting programming language used by web developers to make web pages highly interactive and dynamic. \n\nWhile HTML forms the skeleton and CSS designs the appearance, JavaScript acts as the brain. In fact, this advanced AI chatbot is running fully on JavaScript right in your browser!"
  },
  {
    keywords: ['what is html', 'html kya hai', 'html definition'],
    response: "📄 **HTML (HyperText Markup Language)** is the standard language used to create the structure and elements of a web page. It uses tags (like `<div`, `<h1>`, `<p>`) to place text, images, and links on a web page."
  },
  {
    keywords: ['what is css', 'css kya hai', 'css decoration'],
    response: "🎨 **CSS (Cascading Style Sheets)** is the style sheet language used to format the layout, presentation, and responsiveness of a web page. It defines colors, fonts, margins, grids, and premium animations."
  },
  {
    keywords: ['current', 'electricity current', 'dhara', 'ampere', 'what is current'],
    response: "⚡ **Electric Current** is the flow of electric charge (electrons) through a conductive material (like a copper wire). It is measured in **Amperes (Amps)**. We highly recommend using high-quality copper wires (available at our shop) to handle high current loads safely."
  },
  {
    keywords: ['voltage', 'what is voltage', 'voltage regulator'],
    response: "🔌 **Voltage** is the electrical pressure or potential difference that drives electric current through a circuit. It is measured in **Volts (V)**. \n\nIn India, standard domestic voltage is around 220V-240V. Fluctuations can harm appliances, so using a **Stabilizer** (available at Arun Electronics) is strongly advised!"
  },
  {
    keywords: ['capital of india', 'india ki rajdhani', 'capital of bharat'],
    response: "🏙️ The capital of India is **New Delhi**. It serves as the administrative, legislative, and judicial center of the government of India."
  },
  {
    keywords: ['generator', 'how does generator work', 'generator working', 'generatar kaise'],
    response: "⚙️ An **electric generator** converts mechanical energy into electrical energy using electromagnetic induction (Faraday's Law). When a rotor spins in a magnetic field, current is generated.\n\nFor noiseless, clean home power backup, we recommend an **Inverter and Tubular Battery** set. We have Luminous and Microtek systems ready in stock!"
  }
];

// Repair Expert troubleshooting guides
const TROUBLESHOOTING_GUIDES = [
  {
    keywords: ['tv on nahi', 'television on nahi', 'tv chalu nahi', 'tv nahi chal raha', 'tv display issue', 'tv display screen', 'screen lines', 'tv sound but no video', 'tv sound problem'],
    appliance: "Television (TV)",
    steps: [
      "Check if the TV power cord is properly plugged into the socket/stabilizer.",
      "Check if the voltage stabilizer is displaying normal output. If the input voltage is too low, the stabilizer protects the TV by cutting output.",
      "Try replacing the remote control batteries or use the physical power button on the TV itself.",
      "Verify HDMI or set-top box cables are firmly plugged in."
    ],
    diagnosis: "Ye power supply, stabilizer issue, ya panel motherboard defect ho sakta hai. Humare paas professional TV repairing facility available hai.",
    serviceId: "r1"
  },
  {
    keywords: ['fridge cooling nahi', 'fridge thanda nahi', 'refrigerator cooling', 'refrigerator thanda', 'fridge gas filling', 'fridge loud noise', 'fridge ice', 'fridge repair'],
    appliance: "Refrigerator (Fridge)",
    steps: [
      "Check if the thermostat switch inside the fridge is set correctly (increase cooling level if it's set to low).",
      "Check if the door gasket/rubber seal is loose or cracked, which lets cold air escape.",
      "Ensure there is at least 6-8 inches of ventilation space behind and around the refrigerator.",
      "Ensure the compressor coils at the back are free of thick dust."
    ],
    diagnosis: "Cooling na hone ka main cause gas leakage, compressor failure, ya thermostat damage ho sakta hai. Hum standard rates par repair karte hain.",
    serviceId: "r2"
  },
  {
    keywords: ['ac cooling nahi', 'ac thanda nahi', 'ac not cooling', 'ac power issues', 'ac fan not working', 'ac gas leak', 'ac water leak', 'ac repair'],
    appliance: "Air Conditioner (AC)",
    steps: [
      "Clean the air filters. Choked filters completely block cool airflow.",
      "Check if the remote is set to 'Cool' mode and temperature is set around 24°C.",
      "Check if the outdoor unit fan is rotating and not blocked by dust or debris.",
      "Verify the heavy-duty AC power MCB has not tripped."
    ],
    diagnosis: "Agar filter saaf hain tab bhi cooling nahi ho rahi, toh gas refill ya compressor valve issue ho sakta hai. Hum service, installation aur repair provide karte hain.",
    serviceId: "r4"
  },
  {
    keywords: ['cooler pump', 'cooler paani nahi', 'cooler fan', 'cooler hawa nahi', 'cooler pump not working', 'cooler motor burnt', 'cooler noise'],
    appliance: "Cooler",
    steps: [
      "Ensure the water pump switch is turned ON and water level in the cooler tank is sufficient.",
      "Clean honeycomb or wood-wool cooling pads. Burnt salt deposit blocks water absorption.",
      "If the motor hums but fan doesn't spin, the capacitor might need replacement.",
      "Add a few drops of lubricating oil to the motor shaft bushes if it is jammed."
    ],
    diagnosis: "Common issues include burnt pump motor, jammed main motor, or faulty capacitor. Humare paas copper winding motors and pumps available hain.",
    serviceId: "r3"
  },
  {
    keywords: ['washing machine spin', 'washing machine drain', 'washing machine not working', 'washing machine noise', 'washing machine water leak'],
    appliance: "Washing Machine",
    steps: [
      "Check if clothes inside the dryer/spinner drum are loaded evenly on all sides.",
      "Ensure the drain pipe is not bent, twisted, or clogged with lint and coins.",
      "Ensure the lid/door is completely shut, as safety sensors block spin cycles when open.",
      "Verify water supply tap pressure is sufficient."
    ],
    diagnosis: "Spin load issue belt damage, drain valve blockage, timer defect, or capacitor damage se ho sakta hai. Humare door-step engineers check kar sakte hain.",
    serviceId: "r5"
  },
  {
    keywords: ['short circuit', 'spark', 'fuse trip', 'mcb trip', 'wiring repair', 'house wiring', 'switch burnt'],
    appliance: "Electrical Wiring & Protection",
    steps: [
      "Immediately turn OFF the main switch/MCB to avoid electric shock or fire.",
      "Disconnect the appliance that was turned on just before the spark/trip.",
      "Check the DB box and turn the tripped MCB back ON after unplugging the faulty load.",
      "Burnt switches or low-quality wires should be replaced immediately with standard modular parts."
    ],
    diagnosis: "Short circuits and voltage trips safety break ke liye trigger hote hain. Hum premium house-wiring and panel fixing services perform karte hain.",
    serviceId: "r6"
  }
];

// --- BOT RESPONSE PROCESSOR ---

function processAIQuery(query) {
  const q = query.toLowerCase().trim();

  // Helper matching utility
  function containsAny(text, keywords) {
    return keywords.some(kw => {
      if (typeof kw === 'string') {
        if (kw.length <= 3) {
          // Word boundary match for short keywords (like 'ac', 'tv', 'pm')
          const escaped = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const regex = new RegExp('\\b' + escaped + '\\b', 'i');
          return regex.test(text);
        }
        return text.includes(kw.toLowerCase());
      } else if (kw instanceof RegExp) {
        return kw.test(text);
      }
      return false;
    });
  }

  // A. CONVERSATIONAL MEMORY & STATE MACHINE: BUDGET RESPONSE
  const parsedNumber = q.match(/\b\d+(\.\d+)?k?\b/g);
  if (chatSessionState.awaitingBudget && parsedNumber) {
    let budgetVal = 0;
    const numStr = parsedNumber[0];
    if (numStr.endsWith('k')) {
      budgetVal = parseFloat(numStr) * 1000;
    } else {
      budgetVal = parseInt(numStr);
      if (budgetVal < 100) budgetVal *= 1000; // E.g., '30' meaning 30k
    }

    chatSessionState.currentBudget = budgetVal;
    chatSessionState.awaitingBudget = false;

    // Filter products within budget based on the previous context
    const category = chatSessionState.lastCategory;
    const prodName = chatSessionState.lastProductName;

    let filtered = PRODUCTS;
    if (prodName) {
      filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(prodName.toLowerCase()) || p.keywords.some(k => k.includes(prodName.toLowerCase())));
    } else if (category) {
      filtered = PRODUCTS.filter(p => p.category === category);
    }

    // Sort or filter products under budget
    const budgetFiltered = filtered.filter(p => p.price <= budgetVal * 1.15).sort((a, b) => b.price - a.price);

    let textResponse = "";
    if (budgetFiltered.length > 0) {
      textResponse = `Ji, bilkul! Aapka budget **₹${budgetVal.toLocaleString('en-IN')}** hai. Humare paas is budget range ke according standard options available hain:\n\n`;
      addBotMessage(textResponse);
      addProductCards(budgetFiltered.slice(0, 4));

      // SMART CROSS-RECOMMENDATIONS ENGINE
      // Check last product to cross recommend
      const primaryProduct = budgetFiltered[0];
      let crossRecIds = [];
      let recText = "";

      if (primaryProduct.name.toLowerCase().includes('ac') || primaryProduct.name.toLowerCase().includes('conditioner')) {
        crossRecIds = [38, 12]; // Stabilizer, Extension board
        recText = "⚡ **Smart Recommendation:** AC wiring safety aur high voltage safety ke liye hum auto-cutoff **Stabilizer** aur safe load standard **Extension Board** highly recommend karte hain:";
      } else if (primaryProduct.name.toLowerCase().includes('tv') || primaryProduct.name.toLowerCase().includes('television')) {
        crossRecIds = [42, 43]; // D2H, Speaker
        recText = "📺 **Smart Recommendation:** Smart LED TV ke viewing experience ko increase karne ke liye standard quality **Speaker** aur Multi-connection HD **D2H Set-top Box** available hain:";
      } else if (primaryProduct.name.toLowerCase().includes('fridge') || primaryProduct.name.toLowerCase().includes('refrigerator')) {
        crossRecIds = [38, 12]; // Stabilizer
        recText = "⚡ **Smart Recommendation:** Refrigerator single-door ya double-door compressor security ke liye hum dynamic digital voltage **Stabilizer** suggest karte hain:";
      } else if (primaryProduct.name.toLowerCase().includes('inverter')) {
        crossRecIds = [40, 41]; // Battery, UPS
        recText = "🔋 **Smart Recommendation:** Inverter ke load ko support karne ke liye extra backup tubular **Battery** and PC safety backup ke liye standard **UPS** available hai:";
      } else {
        // Fallback cross recommendations
        crossRecIds = primaryProduct.related ? primaryProduct.related.slice(0, 2) : [12, 14];
        recText = "🔌 **You might also need these accessories:**";
      }

      if (crossRecIds.length > 0) {
        setTimeout(() => {
          addBotMessage(recText);
          const crossProducts = crossRecIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
          addProductCards(crossProducts);
          renderDynamicSuggestions(["Contact Owner 📞", "Shop Location 📍", "Main Menu 🏠"]);
        }, 600);
      } else {
        renderDynamicSuggestions(["Contact Owner 📞", "Shop Location 📍", "Main Menu 🏠"]);
      }

    } else {
      textResponse = `Ji, ₹${budgetVal.toLocaleString('en-IN')} budget range ke andhar exact matching appliance product stock mein available nahi hai. \n\nLekin hum special order par custom arrangement karwa sakte hain! Aur details ke liye humare representative ko call karein.`;
      addBotMessage(textResponse);
      renderDynamicSuggestions(["Contact Owner 📞", "Ask WhatsApp 💬", "Go Back ↩️"]);
    }
    return;
  }

  // B. GREETINGS & INTRODUCTIONS
  const greetings = ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'pranam', 'ram ram', 'salam', 'shuruaat', 'start', 'begin', 'chat bot'];
  if (containsAny(q, greetings)) {
    addBotMessage("👋 **Namaste! Arun Electronics smart assistant mein aapka swagat hai.**\n\nHum high-quality appliances sell karte hain aur expert repairing services provide karte hain.\n\nMain aapki pricing, troubleshooting, details aur general doubts clear karne mein help kar sakta hoon. Hindi, English ya Hinglish mein pooch sakte hain!");
    renderDynamicSuggestions(["Shop Timings ⏰", "Where is Shop? 📍", "TV & Appliances 📺", "Power Backup ⚡", "Repair Service 🛠️"]);
    return;
  }

  // C. CUSTOMER SUPPORT FAQ KNOWLEDGE BASE
  for (const faq of FAQ_KNOWLEDGE_BASE) {
    if (containsAny(q, faq.keywords)) {
      addBotMessage(faq.response);
      
      // Contextual suggestions based on FAQ
      if (faq.keywords.includes('location')) {
        renderDynamicSuggestions(["Map Location 📍", "Shop Timings ⏰", "Contact Details 📞"]);
      } else if (faq.keywords.includes('contact')) {
        renderDynamicSuggestions(["WhatsApp Chat 💬", "Shop Address 📍", "Explore Products 📦"]);
      } else {
        renderDynamicSuggestions(["Explore Products 📦", "Repair Services 🛠️", "Main Menu 🏠"]);
      }
      return;
    }
  }

  // D. GENERAL KNOWLEDGE & TECHNICAL QUESTIONS
  for (const qa of GENERAL_QA) {
    if (containsAny(q, qa.keywords)) {
      addBotMessage(qa.response);
      renderDynamicSuggestions(["Explore Products 📦", "Technical Help 🔌", "Main Menu 🏠"]);
      return;
    }
  }

  // E. REPAIR EXPERT TROUBLESHOOTING
  for (const guide of TROUBLESHOOTING_GUIDES) {
    if (containsAny(q, guide.keywords)) {
      let responseText = `🛠️ **Repair Expert Mode: Troubleshooting for ${guide.appliance}**\n\n`;
      responseText += `Aap niche diye gaye step-by-step diagnostic measures follow karein:\n\n`;
      guide.steps.forEach((step, idx) => {
        responseText += `• ${step}\n`;
      });
      responseText += `\n**Diagnosis:** ${guide.diagnosis}\n\nKya aap expert repair book karna chahte hain? Niche diye WhatsApp button se instant request send karein.`;
      
      addBotMessage(responseText);
      
      const matchingServices = REPAIR_SERVICES.filter(s => s.id === guide.serviceId);
      addServiceCards(matchingServices);
      renderDynamicSuggestions(["Book Repair WhatsApp 💬", "Contact Technician 📞", "FAQ Support ❓"]);
      return;
    }
  }

  // F. DIRECT APPLIANCE / PRODUCT CATALOG QUERIES
  // Match products by direct names or keywords
  let matchedProducts = [];
  let matchedKeyword = "";

  for (const p of PRODUCTS) {
    const isDirectMatch = q.includes(p.name.toLowerCase());
    const isKeywordMatch = p.keywords && p.keywords.some(kw => {
      // Check word boundary for short keywords
      if (kw.length <= 3) {
        const regex = new RegExp('\\b' + kw + '\\b', 'i');
        return regex.test(q);
      }
      return q.includes(kw);
    });

    if (isDirectMatch || isKeywordMatch) {
      if (!matchedProducts.includes(p)) {
        matchedProducts.push(p);
      }
      matchedKeyword = p.name;
    }
  }

  // Prioritize Arun Electronics products
  if (matchedProducts.length > 0) {
    // Save state context
    const firstMatched = matchedProducts[0];
    chatSessionState.lastCategory = firstMatched.category;
    chatSessionState.lastProductName = firstMatched.name;
    chatSessionState.awaitingBudget = true;

    // Custom messages matching requirements
    let introText = "";
    if (q.includes('ac') || q.includes('conditioner')) {
      introText = "Ji, hamare paas **Air Conditioner (AC)** available hain. Hum split aur window model deals direct rates par setup karte hain.";
    } else if (q.includes('inverter') || q.includes('backup') || q.includes('battery')) {
      introText = "Ji, hamare paas **Inverter, Battery aur UPS** safety backup systems available hain.";
    } else if (q.includes('cooler')) {
      introText = "Ji, hamare paas **Cooler aur Air Cooler** summer deals range mein stock mein ready hain.";
    } else if (q.includes('fridge') || q.includes('refrigerator')) {
      introText = "Ji, hamare paas single-door aur double-door premium **Refrigerator (Fridge)** models available hain.";
    } else if (q.includes('tv') || q.includes('television')) {
      introText = "Ji, hamare paas **Television (TV)** range available hain Smart Android variants ke andhar.";
    } else {
      introText = `Ji, hamare paas high-quality **${firstMatched.name}** and similar accessories available hain.`;
    }

    addBotMessage(`${introText}\n\n**Aapka estimated budget range kya hai?** (Jaise ₹10,000, ₹30,000 etc.) Please respond with a number so I can recommend the best model.`);
    
    // Provide budget quick reply chips
    const sampleBudgets = [];
    if (firstMatched.price > 20000) {
      sampleBudgets.push("₹15,000", "₹25,000", "₹35,000", "₹45,000");
    } else if (firstMatched.price > 5000) {
      sampleBudgets.push("₹5,000", "₹8,000", "₹12,000", "₹18,000");
    } else {
      sampleBudgets.push("₹200", "₹500", "₹1,000", "₹2,500");
    }
    sampleBudgets.push("Show All Models");
    renderDynamicSuggestions(sampleBudgets);
    return;
  }

  // G. FALLBACK RESPONSES (Unknown inputs)
  addBotMessage("I’m not completely sure about that. Please contact Arun Electronics directly for accurate information.");
  
  // Custom action buttons in dynamic suggestions
  renderDynamicSuggestions(["Call Store 📞", "WhatsApp Owner 💬", "Go to Home 🏠"]);
}

// --- MESSAGE RENDERING ---

function addUserMessage(text) {
  const chatBody = document.getElementById('aiChatBody');
  if (!chatBody) return;

  const msg = document.createElement('div');
  msg.className = 'chat-message user-message';
  msg.innerHTML = `
    <div class="message-bubble">
      <p>${escapeHtml(text)}</p>
    </div>
    <div class="message-avatar">👤</div>
  `;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
  
  // Sync to history
  chatHistory.push({ role: 'user', text });
  localStorage.setItem('ae-chat-history', JSON.stringify(chatHistory));
}

function addBotMessage(text) {
  const chatBody = document.getElementById('aiChatBody');
  if (!chatBody) return;

  // Render markdown bold and bullets client-side simply
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');

  const msg = document.createElement('div');
  msg.className = 'chat-message bot-message';
  
  // Generate random ID for this message to match actions
  const msgId = 'bot-msg-' + Math.floor(Math.random() * 100000);
  msg.id = msgId;

  msg.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-bubble-wrapper">
      <div class="message-bubble">
        <p>${formattedText}</p>
      </div>
      <div class="message-actions">
        <button class="message-action-btn copy-btn" onclick="copyMessageText('${msgId}')" title="Copy response">
          📋 Copy
        </button>
        <button class="message-action-btn speak-btn" onclick="toggleVoiceSpeech('${msgId}')" title="Speak response">
          🔊 Speak
        </button>
      </div>
    </div>
  `;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Sync to history
  chatHistory.push({ role: 'bot', text });
  localStorage.setItem('ae-chat-history', JSON.stringify(chatHistory));
}

function addProductCards(products) {
  const chatBody = document.getElementById('aiChatBody');
  if (!chatBody) return;

  const container = document.createElement('div');
  container.className = 'chat-product-cards';
  container.innerHTML = products.map(p => {
    return `
      <div class="chat-product-card" onclick="closeAIChat(); openProductModal(${p.id});">
        <div class="chat-product-image">
          <img src="${p.image}" alt="${p.name}" class="chat-real-image" loading="lazy" onerror="this.onerror=null; this.src='images/products/default-placeholder.jpg';">
        </div>
        <div class="chat-product-info">
          <strong>${p.name}</strong>
          <span>Price on Request • ${p.availability}</span>
        </div>
        <button class="chat-product-wa" onclick="event.stopPropagation(); openWhatsApp('${p.name}')" title="Inquire on WhatsApp">💬</button>
      </div>
    `;
  }).join('');

  chatBody.appendChild(container);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Save product cards structure into history as well
  chatHistory.push({ role: 'product-cards', products: products.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image, availability: p.availability })) });
  localStorage.setItem('ae-chat-history', JSON.stringify(chatHistory));
}

function addServiceCards(services) {
  const chatBody = document.getElementById('aiChatBody');
  if (!chatBody) return;

  const container = document.createElement('div');
  container.className = 'chat-product-cards';
  container.innerHTML = services.map(s => `
    <div class="chat-product-card chat-service-card" onclick="openWhatsApp('${s.name} Service')">
      <div class="chat-product-icon" style="background: linear-gradient(135deg, #f97316, #fb923c);">🛠️</div>
      <div class="chat-product-info">
        <strong>${s.name}</strong>
        <span>Book Expert Servicing</span>
      </div>
      <button class="chat-product-wa" title="Inquire on WhatsApp">💬</button>
    </div>
  `).join('');

  chatBody.appendChild(container);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Save service cards structure into history
  chatHistory.push({ role: 'service-cards', services });
  localStorage.setItem('ae-chat-history', JSON.stringify(chatHistory));
}

// Typing Indicator controls
function showTypingIndicator() {
  const chatBody = document.getElementById('aiChatBody');
  if (!chatBody) return;

  const indicator = document.createElement('div');
  indicator.className = 'chat-message bot-message typing-indicator';
  indicator.id = 'typingIndicator';
  indicator.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-bubble typing-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  chatBody.appendChild(indicator);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

// --- DYNAMIC SUGGESTIONS (QUICK REPLIES) ---

function renderDynamicSuggestions(suggestionsList) {
  let suggestionsContainer = document.getElementById('chatSuggestions');
  if (!suggestionsContainer) {
    suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'chat-suggestions';
    suggestionsContainer.id = 'chatSuggestions';
    
    // Inject suggestion container above input area
    const chatPanel = document.getElementById('aiChatPanel');
    const inputArea = chatPanel.querySelector('.ai-chat-input-area');
    if (chatPanel && inputArea) {
      chatPanel.insertBefore(suggestionsContainer, inputArea);
    }
  }

  suggestionsContainer.innerHTML = suggestionsList.map(s => {
    return `<button class="suggestion-chip" onclick="handleSuggestionClick('${s.replace(/'/g, "\\'")}')">${s}</button>`;
  }).join('');
  
  // Keep scrolling suggestions reset
  suggestionsContainer.scrollLeft = 0;
}

function handleSuggestionClick(suggestionText) {
  // Clear emojis or metadata symbols from matching text if needed, but let's send exactly
  let cleanedText = suggestionText.replace(/[⏰📍📺⚡🛠️💬📞🔌↩️🏠❓📦]/g, '').trim();
  
  // Custom action triggers for specific button texts
  if (cleanedText.toLowerCase() === "map location") {
    window.open(SHOP_METADATA.mapLink, '_blank');
    return;
  }
  if (cleanedText.toLowerCase() === "whatsapp chat" || cleanedText.toLowerCase() === "ask whatsapp" || cleanedText.toLowerCase() === "whatsapp owner") {
    openWhatsApp("General Enquiry");
    return;
  }
  if (cleanedText.toLowerCase() === "book repair whatsapp") {
    openWhatsApp("Appliance Repair Service booking Request");
    return;
  }
  if (cleanedText.toLowerCase() === "call store" || cleanedText.toLowerCase() === "contact technician" || cleanedText.toLowerCase() === "contact owner") {
    window.location.href = "tel:" + SHOP_METADATA.phone;
    return;
  }
  if (cleanedText.toLowerCase() === "show all models" || cleanedText.toLowerCase() === "show all acs") {
    cleanedText = "Show products related to " + (chatSessionState.lastProductName || "Appliances");
  }
  if (cleanedText.toLowerCase() === "main menu" || cleanedText.toLowerCase() === "go back" || cleanedText.toLowerCase() === "go to home") {
    cleanedText = "Hello";
  }

  addUserMessage(cleanedText);
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    processAIQuery(cleanedText);
  }, 600 + Math.random() * 400);
}

// --- UTILITIES: COPY RESPONSE ---

window.copyMessageText = function(msgId) {
  const msgEl = document.getElementById(msgId);
  if (!msgEl) return;
  const bubble = msgEl.querySelector('.message-bubble p');
  if (!bubble) return;

  // Extract raw text, replacing <br> with newlines
  const text = bubble.innerHTML
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?[^>]+(>|$)/g, ""); // Strip other tags

  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = msgEl.querySelector('.copy-btn');
    if (copyBtn) {
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = '✅ Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
      }, 1500);
    }
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
};

// --- UTILITIES: SPEECH SYNTHESIS (VOICE OUTPUT) ---

let currentSpeechUtterance = null;
let currentSpeakingBtn = null;

window.toggleVoiceSpeech = function(msgId) {
  const msgEl = document.getElementById(msgId);
  if (!msgEl) return;
  const bubble = msgEl.querySelector('.message-bubble p');
  if (!bubble) return;

  const speakBtn = msgEl.querySelector('.speak-btn');
  if (!speakBtn) return;

  // If already speaking and user clicks the same button, stop speaking
  if (currentSpeechUtterance && currentSpeakingBtn === speakBtn) {
    window.speechSynthesis.cancel();
    resetSpeechState();
    return;
  }

  // Cancel any ongoing speaking
  window.speechSynthesis.cancel();
  if (currentSpeakingBtn) {
    currentSpeakingBtn.innerHTML = '🔊 Speak';
  }

  const rawText = bubble.innerHTML
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?[^>]+(>|$)/g, ""); // Strip formatting

  const utterance = new SpeechSynthesisUtterance(rawText);
  
  // Language detection logic: Hinglish/Hindi vs English
  const hinglishWords = ["ji", "namaste", "aap", "aapka", "hamare", "paas", "chahiye", "hai", "hain", "dukan", "bilkul", "zarur"];
  const containsHinglish = hinglishWords.some(word => rawText.toLowerCase().includes(word)) || /[\u0900-\u097F]/.test(rawText);
  
  if (containsHinglish) {
    utterance.lang = 'hi-IN'; // Indian Hindi voice for Hinglish/Hindi
  } else {
    utterance.lang = 'en-IN'; // Indian English voice for natural English output
  }

  // Adjust synthesis rates
  utterance.rate = 1.0;
  utterance.pitch = 1.05;

  utterance.onend = function() {
    resetSpeechState();
  };

  utterance.onerror = function() {
    resetSpeechState();
  };

  // Update button state
  speakBtn.innerHTML = '⏹️ Stop';
  currentSpeechUtterance = utterance;
  currentSpeakingBtn = speakBtn;

  window.speechSynthesis.speak(utterance);
};

function resetSpeechState() {
  if (currentSpeakingBtn) {
    currentSpeakingBtn.innerHTML = '🔊 Speak';
  }
  currentSpeechUtterance = null;
  currentSpeakingBtn = null;
}

// --- UTILITIES: SPEECH RECOGNITION (VOICE INPUT) ---

function initVoiceInput() {
  const inputArea = document.querySelector('.ai-chat-input-area');
  if (!inputArea) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  // Add mic icon inside input area if missing
  let micBtn = document.getElementById('chatMicBtn');
  if (!micBtn) {
    micBtn = document.createElement('button');
    micBtn.className = 'chat-mic-btn';
    micBtn.id = 'chatMicBtn';
    micBtn.innerHTML = '🎤';
    micBtn.setAttribute('title', 'Voice input (Speech to Text)');
    
    // Insert mic button before the send button
    const sendBtn = document.getElementById('aiChatSend');
    if (sendBtn) {
      inputArea.insertBefore(micBtn, sendBtn);
    }
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'hi-IN'; // Listen to Hindi, English & Hinglish
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let isListening = false;

  micBtn.addEventListener('click', () => {
    if (isListening) {
      recognition.stop();
      return;
    }

    isListening = true;
    micBtn.classList.add('listening');
    micBtn.innerHTML = '🛑';
    
    // Mute speech output if speaking
    window.speechSynthesis.cancel();
    resetSpeechState();

    recognition.start();
  });

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const chatInput = document.getElementById('aiChatInput');
    if (chatInput && transcript) {
      chatInput.value = transcript;
      chatInput.focus();
    }
  };

  recognition.onspeechend = function() {
    stopListening();
  };

  recognition.onerror = function() {
    stopListening();
  };

  function stopListening() {
    isListening = false;
    micBtn.classList.remove('listening');
    micBtn.innerHTML = '🎤';
  }
}

// --- CORE WIDGET INITIALIZATION ---

function initAIChatbot() {
  // 1. Inject Toggle button if missing
  let chatToggle = document.getElementById('aiChatToggle');
  if (!chatToggle) {
    chatToggle = document.createElement('button');
    chatToggle.className = 'ai-chat-toggle';
    chatToggle.id = 'aiChatToggle';
    chatToggle.setAttribute('aria-label', 'Open AI Helper');
    chatToggle.innerHTML = `
      🤖
      <span class="chat-badge">AI</span>
    `;
    document.body.appendChild(chatToggle);
  }

  // 2. Inject Panel if missing
  let chatPanel = document.getElementById('aiChatPanel');
  if (!chatPanel) {
    chatPanel = document.createElement('div');
    chatPanel.className = 'ai-chat-panel';
    chatPanel.id = 'aiChatPanel';
    chatPanel.innerHTML = `
      <div class="ai-chat-header">
        <div class="ai-chat-header-info">
          <div class="ai-chat-header-avatar">🤖</div>
          <div>
            <h4>Arun Electronics AI Assistant</h4>
            <span>Online • Smart Shop Helper</span>
          </div>
        </div>
        <div class="ai-chat-header-actions">
          <button class="ai-chat-clear" id="aiChatClear" title="Clear chat history">🧹 Clear</button>
          <button class="ai-chat-close" id="aiChatClose" aria-label="Close chat">✕</button>
        </div>
      </div>
      <div class="ai-chat-body" id="aiChatBody">
        <!-- Messages rendered dynamically -->
      </div>
      <div class="ai-chat-input-area">
        <input type="text" id="aiChatInput" placeholder="Ask general questions or products...">
        <button class="ai-chat-send" id="aiChatSend" aria-label="Send message">➤</button>
      </div>
    `;
    document.body.appendChild(chatPanel);
  }

  const chatClose = document.getElementById('aiChatClose');
  const chatInput = document.getElementById('aiChatInput');
  const chatSend = document.getElementById('aiChatSend');
  const chatClear = document.getElementById('aiChatClear');

  // 3. Inject Chat Overlay dynamically
  let chatOverlay = document.querySelector('.ai-chat-overlay');
  if (!chatOverlay) {
    chatOverlay = document.createElement('div');
    chatOverlay.className = 'ai-chat-overlay';
    document.body.appendChild(chatOverlay);
  }

  chatToggle.addEventListener('click', () => {
    if (chatPanel.classList.contains('active')) {
      closeAIChat();
    } else {
      openAIChat();
    }
  });

  if (chatClose) {
    chatClose.addEventListener('click', closeAIChat);
  }

  chatOverlay.addEventListener('click', closeAIChat);

  if (chatClear) {
    chatClear.addEventListener('click', () => {
      if (confirm("Kya aap conversation history clear karna chahte hain?")) {
        clearChatHistory();
      }
    });
  }

  if (chatInput && chatSend) {
    chatSend.addEventListener('click', () => sendAIMessage());
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAIMessage();
      }
    });
  }

  // Load chat history from localStorage
  const savedHistory = localStorage.getItem('ae-chat-history');
  if (savedHistory) {
    try {
      chatHistory = JSON.parse(savedHistory);
      renderSavedHistory();
    } catch (e) {
      console.warn("Failed to load chat history", e);
      chatHistory = [];
    }
  }

  function openAIChat() {
    chatPanel.classList.add('active');
    chatToggle.classList.add('active');
    chatOverlay.classList.add('active');
    
    const chatBody = document.getElementById('aiChatBody');
    
    if (chatHistory.length === 0) {
      addBotMessage("👋 **Namaste! Arun Electronics mein aapka swagat hai.**\n\nMain aapki products, pricing aur appliance repair services ke details provide kar sakta hoon. Aap kisi bhi query ko English, Hindi ya Hinglish mein punch sakte hain!");
      renderDynamicSuggestions(["Shop Timings ⏰", "Where is Shop? 📍", "TV & Appliances 📺", "Power Backup ⚡", "Repair Service 🛠️"]);
    } else {
      // Re-trigger dynamic suggestions scroll reset
      const sugContainer = document.getElementById('chatSuggestions');
      if (!sugContainer) {
        renderDynamicSuggestions(["Shop Timings ⏰", "Where is Shop? 📍", "TV & Appliances 📺", "Power Backup ⚡", "Repair Service 🛠️"]);
      }
    }
    
    // Auto scroll
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
    
    if (chatInput) {
      setTimeout(() => chatInput.focus(), 300);
    }
  }

  // Initialize advanced input items
  initVoiceInput();
}

function sendAIMessage() {
  const chatInput = document.getElementById('aiChatInput');
  if (!chatInput) return;

  const message = chatInput.value.trim();
  if (!message) return;

  addUserMessage(message);
  chatInput.value = '';

  // Show typing indicator
  showTypingIndicator();

  // Process after a small delay for realism
  setTimeout(() => {
    removeTypingIndicator();
    processAIQuery(message);
  }, 700 + Math.random() * 500);
}

function renderSavedHistory() {
  const chatBody = document.getElementById('aiChatBody');
  if (!chatBody) return;

  chatBody.innerHTML = '';
  
  // Temporary bypass pushing during history reload rendering
  const tempHistory = [...chatHistory];
  chatHistory = []; // Reset so addBotMessage/addUserMessage can re-fill safely

  tempHistory.forEach(item => {
    if (item.role === 'user') {
      addUserMessage(item.text);
    } else if (item.role === 'bot') {
      addBotMessage(item.text);
    } else if (item.role === 'product-cards') {
      // Rebuild product cards
      const container = document.createElement('div');
      container.className = 'chat-product-cards';
      container.innerHTML = item.products.map(p => `
        <div class="chat-product-card" onclick="closeAIChat(); openProductModal(${p.id});">
          <div class="chat-product-image">
            <img src="${p.image}" alt="${p.name}" class="chat-real-image" onerror="this.onerror=null; this.src='images/products/default-placeholder.jpg';">
          </div>
          <div class="chat-product-info">
            <strong>${p.name}</strong>
            <span>Price on Request • ${p.availability}</span>
          </div>
          <button class="chat-product-wa" onclick="event.stopPropagation(); openWhatsApp('${p.name}')">💬</button>
        </div>
      `).join('');
      chatBody.appendChild(container);
      chatHistory.push(item);
    } else if (item.role === 'service-cards') {
      // Rebuild service cards
      const container = document.createElement('div');
      container.className = 'chat-product-cards';
      container.innerHTML = item.services.map(s => `
        <div class="chat-product-card chat-service-card" onclick="openWhatsApp('${s.name} Service')">
          <div class="chat-product-icon" style="background: linear-gradient(135deg, #f97316, #fb923c);">🛠️</div>
          <div class="chat-product-info">
            <strong>${s.name}</strong>
            <span>Book Expert Servicing</span>
          </div>
          <button class="chat-product-wa">💬</button>
        </div>
      `).join('');
      chatBody.appendChild(container);
      chatHistory.push(item);
    }
  });

  chatBody.scrollTop = chatBody.scrollHeight;
  localStorage.setItem('ae-chat-history', JSON.stringify(chatHistory));

  // Build default suggestions if history loads
  renderDynamicSuggestions(["Shop Timings ⏰", "Where is Shop? 📍", "TV & Appliances 📺", "Power Backup ⚡", "Repair Service 🛠️"]);
}

function clearChatHistory() {
  chatHistory = [];
  localStorage.removeItem('ae-chat-history');
  
  // Stop speaking if playing
  window.speechSynthesis.cancel();
  resetSpeechState();

  // Reset dialogue session variables
  chatSessionState = {
    lastCategory: null,
    lastProductName: null,
    lastProducts: [],
    awaitingBudget: false,
    currentBudget: null
  };

  const chatBody = document.getElementById('aiChatBody');
  if (chatBody) {
    chatBody.innerHTML = '';
  }

  addBotMessage("👋 Conversation cleared! Main aapki products aur repairs ke specifications clarify karne mein help kar sakta hoon. Kuch poochna chahte hain?");
  renderDynamicSuggestions(["Shop Timings ⏰", "Where is Shop? 📍", "TV & Appliances 📺", "Power Backup ⚡", "Repair Service 🛠️"]);
}

function closeAIChat() {
  const chatPanel = document.getElementById('aiChatPanel');
  const chatToggle = document.getElementById('aiChatToggle');
  const chatOverlay = document.querySelector('.ai-chat-overlay');
  
  if (chatPanel) chatPanel.classList.remove('active');
  if (chatToggle) chatToggle.classList.remove('active');
  if (chatOverlay) chatOverlay.classList.remove('active');

  // Cancel reading aloud on close
  window.speechSynthesis.cancel();
  resetSpeechState();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}


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
