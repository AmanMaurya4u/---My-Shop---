/* ============================================
   ARUN ELECTRONICS — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initScrollAnimations();
  initHeaderScroll();
  initActiveNav();
  initHeroSlider();
  initProductSearch();
  initProductFilter();
  initGalleryLightbox();
  initGalleryFilter();
  initContactForm();
  initAnimatedCounters();
  initPWAInstallPrompt();
  initAIChatbot();
});

/* ---------- Theme Toggle (Dark Mode) ---------- */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const saved = localStorage.getItem('ae-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    updateToggleIcon(toggle, saved);
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ae-theme', next);
    updateToggleIcon(toggle, next);
  });
}

function updateToggleIcon(btn, theme) {
  btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/* ---------- Mobile Navigation ---------- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;

  // 1. Create or select Dark Overlay dynamically
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  // 2. Create sidebar header with brand logo & close button dynamically
  if (!navMenu.querySelector('.sidebar-brand-wrapper')) {
    const brandWrapper = document.createElement('div');
    brandWrapper.className = 'sidebar-brand-wrapper';
    brandWrapper.innerHTML = `
      <div class="logo">
        <div class="logo-icon">⚡</div>
        Arun Electronics
      </div>
      <button class="sidebar-close" aria-label="Close menu" title="Close Menu">&times;</button>
    `;
    navMenu.insertBefore(brandWrapper, navMenu.firstChild);

    // Event listener for dynamic Close button (X)
    const closeBtn = brandWrapper.querySelector('.sidebar-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
  }

  // Toggle navigation menu
  hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when overlay (outside sidebar) is clicked
  overlay.addEventListener('click', closeMenu);

  // Close when links are clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (!link.closest('.sidebar-brand-wrapper')) {
        closeMenu();
      }
    });
  });

  function openMenu() {
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ---------- Header Scroll Effect ---------- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ---------- Active Nav Highlighting ---------- */
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---------- Hero Image Slider ---------- */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.slide');
  const dotsContainer = slider.querySelector('.slider-dots');
  if (slides.length === 0) return;

  let current = 0;
  let interval;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
  }

  slider.addEventListener('mouseenter', () => clearInterval(interval));
  slider.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

/* ---------- Product Search ---------- */
function initProductSearch() {
  const searchInput = document.getElementById('productSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      const category = card.getAttribute('data-category').toLowerCase();
      const match = name.includes(query) || category.includes(query);
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    const noResults = document.getElementById('noResults');
    if (noResults) {
      noResults.classList.toggle('show', visibleCount === 0);
    }
  });
}

/* ---------- Product Category Filter ---------- */
function initProductFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      const cards = document.querySelectorAll('.product-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      const noResults = document.getElementById('noResults');
      if (noResults) {
        noResults.classList.toggle('show', visibleCount === 0);
      }

      // Reset search
      const searchInput = document.getElementById('productSearch');
      if (searchInput) searchInput.value = '';
    });
  });
}

/* ---------- Gallery Lightbox ---------- */
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  let galleryImages = [];
  let currentIndex = 0;

  function updateGalleryImages() {
    galleryImages = Array.from(document.querySelectorAll('.gallery-item:not([style*="display: none"]) img'));
  }

  document.addEventListener('click', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (!galleryItem) return;

    updateGalleryImages();
    const img = galleryItem.querySelector('img');
    currentIndex = galleryImages.indexOf(img);
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
  });
}

/* ---------- Gallery Filter ---------- */
function initGalleryFilter() {
  const tabs = document.querySelectorAll('.gallery-filter-tab');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      const items = document.querySelectorAll('.gallery-item');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        item.style.display = (filter === 'all' || category === filter) ? '' : 'none';
      });
    });
  });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Save to localStorage
    const enquiries = JSON.parse(localStorage.getItem('ae-enquiries') || '[]');
    enquiries.push({
      name,
      phone,
      message,
      date: new Date().toISOString()
    });
    localStorage.setItem('ae-enquiries', JSON.stringify(enquiries));

    // Show success
    const success = document.getElementById('formSuccess');
    if (success) {
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    }

    form.reset();
  });
}

/* ---------- Animated Counters ---------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, 0, target, 2000, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, start, end, duration, suffix) {
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(start + range * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ---------- WhatsApp Helper ---------- */
function openWhatsApp(productName) {
  const phone = '91XXXXXXXXXX'; // Replace with actual number
  const message = encodeURIComponent(
    `Hello Arun Electronics,\nI want information about: ${productName}`
  );
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

/* ============================================
   PWA APP INSTALLATION PROMPT (AFTER 15s)
   ============================================ */
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
});

function initPWAInstallPrompt() {
  // Check if already installed or dismissed forever
  if (localStorage.getItem('ae-app-installed') === 'true' || localStorage.getItem('ae-install-prompt-dismissed') === 'true') {
    return;
  }

  // Check if running in standalone mode (already installed as PWA)
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    return;
  }

  // Show option after 15 seconds (15000ms) for new visitors
  setTimeout(() => {
    if (localStorage.getItem('ae-app-installed') === 'true' || localStorage.getItem('ae-install-prompt-dismissed') === 'true') {
      return;
    }
    showPWAInstallBanner();
  }, 15000);
}

function showPWAInstallBanner() {
  if (document.getElementById('pwaInstallBanner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwaInstallBanner';
  banner.className = 'pwa-install-banner';
  banner.innerHTML = `
    <div class="pwa-banner-header">
      <div class="pwa-banner-icon">⚡</div>
      <div class="pwa-banner-title">
        <span>Official Store App</span>
        <h4>Arun Electronics</h4>
      </div>
      <button class="pwa-banner-close" id="pwaCloseBtn" aria-label="Close modal" title="Close">&times;</button>
    </div>
    <div class="pwa-banner-body">
      <p id="pwaBodyText">Install our official app for quick access to daily electronics deals, fast repair bookings, and offline product catalog!</p>
    </div>
    <div class="pwa-banner-actions">
      <button class="pwa-btn-install" id="pwaInstallBtn">📲 Install App Now</button>
      <button class="pwa-btn-later" id="pwaLaterBtn">Maybe Later</button>
    </div>
  `;

  document.body.appendChild(banner);

  // Trigger smooth glassmorphism fade/slide-in animation
  setTimeout(() => {
    banner.classList.add('show');
  }, 100);

  const installBtn = banner.querySelector('#pwaInstallBtn');
  const bodyText = banner.querySelector('#pwaBodyText');

  installBtn.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        localStorage.setItem('ae-app-installed', 'true');
        closePWABanner();
      }
      deferredInstallPrompt = null;
    } else {
      // Graceful fallback instructions if native prompt is not ready (e.g. iOS Safari / HTTP)
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isIOS) {
        bodyText.innerHTML = '<strong>To install on iOS:</strong> Tap the Share button <span style="font-size:1.2em;">⎋</span> at the bottom of Safari and select <strong>"Add to Home Screen" ➕</strong>.';
      } else {
        bodyText.innerHTML = '<strong>To install manually:</strong> Tap your browser menu <span style="font-size:1.2em;">⋮</span> in the top right corner and select <strong>"Install App"</strong> or <strong>"Add to Home Screen"</strong>.';
      }
      installBtn.style.display = 'none';
    }
  });

  const closeBtn = banner.querySelector('#pwaCloseBtn');
  const laterBtn = banner.querySelector('#pwaLaterBtn');

  closeBtn.addEventListener('click', () => closePWABanner(true));
  laterBtn.addEventListener('click', () => closePWABanner(true));
}

/* ============================================
   AI CHATBOT ASSISTANT WIDGET & NLP ENGINE
   ============================================ */
function initAIChatbot() {
  if (document.getElementById('aiChatWidget')) return;

  // 1. Create Floating Button and Chat Window Structure
  const widget = document.createElement('div');
  widget.id = 'aiChatWidget';
  widget.innerHTML = `
    <!-- Floating Trigger Button -->
    <button class="ai-chat-btn" id="aiChatBtn" aria-label="Open AI Assistant" title="Ask AI Assistant">
      <span class="btn-icon">⚡</span>
      <span class="btn-text">Ask AI Assistant</span>
    </button>

    <!-- Chat Window Modal -->
    <div class="ai-chat-window" id="aiChatWindow" aria-hidden="true">
      <div class="ai-chat-header">
        <div class="ai-header-info">
          <div class="ai-avatar">🤖</div>
          <div class="ai-header-text">
            <h4>Arun AI Assistant ⚡</h4>
            <span><i class="ai-online-dot"></i> Online • Instant Answers</span>
          </div>
        </div>
        <div class="ai-header-actions">
          <button class="ai-header-btn" id="aiClearBtn" title="Clear Chat History">🗑️</button>
          <button class="ai-header-btn" id="aiCloseBtn" title="Close Chat" aria-label="Close Chat">✕</button>
        </div>
      </div>

      <!-- Quick Suggestion Chips -->
      <div class="ai-suggestions" id="aiSuggestions">
        <button class="ai-chip" data-query="Where is the shop located?">📍 Shop Location</button>
        <button class="ai-chip" data-query="What products do you sell?">📦 View Products</button>
        <button class="ai-chip" data-query="What repair services do you offer?">🛠️ Repair Services</button>
        <button class="ai-chip" data-query="What are the shop timings?">⏰ Shop Timings</button>
        <button class="ai-chip" data-query="What is owner contact number?">📞 Contact Owner</button>
        <button class="ai-chip" data-query="Any special discounts or offers?">🎁 Current Deals</button>
      </div>

      <!-- Chat Messages Area -->
      <div class="ai-chat-body" id="aiChatBody">
        <!-- Welcome Message -->
        <div class="ai-msg-row ai">
          <div class="ai-msg-avatar">🤖</div>
          <div class="ai-bubble">
            Hello! 👋 Welcome to <strong>Arun Electronics</strong>, Gopiganj! I am your 24/7 intelligent assistant.<br><br>
            How can I help you today? Ask me about <strong>products, repair services, prices, shop location</strong>, or select a topic above!
          </div>
        </div>
      </div>

      <!-- Input Bar -->
      <form class="ai-chat-footer" id="aiChatForm" onsubmit="return false;">
        <div class="ai-input-wrapper">
          <input type="text" class="ai-chat-input" id="aiInput" placeholder="Ask in English or Hindi (e.g. TV repair, timings)..." autocomplete="off" aria-label="Chat input">
          <button type="button" class="ai-voice-btn" id="aiVoiceBtn" title="Speak question" aria-label="Speak question">🎤</button>
        </div>
        <button type="submit" class="ai-send-btn" id="aiSendBtn" aria-label="Send message" title="Send">➤</button>
      </form>
    </div>
  `;

  document.body.appendChild(widget);

  const chatBtn = document.getElementById('aiChatBtn');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiCloseBtn');
  const clearBtn = document.getElementById('aiClearBtn');
  const chatBody = document.getElementById('aiChatBody');
  const chatForm = document.getElementById('aiChatForm');
  const chatInput = document.getElementById('aiInput');
  const voiceBtn = document.getElementById('aiVoiceBtn');
  const suggestions = document.getElementById('aiSuggestions');

  // Toggle Chat Window
  function toggleChat(show) {
    const isActive = typeof show === 'boolean' ? show : !chatWindow.classList.contains('active');
    if (isActive) {
      chatWindow.classList.add('active');
      chatWindow.setAttribute('aria-hidden', 'false');
      setTimeout(() => chatInput.focus(), 100);
      scrollToBottom();
    } else {
      chatWindow.classList.remove('active');
      chatWindow.setAttribute('aria-hidden', 'true');
    }
  }

  chatBtn.addEventListener('click', () => toggleChat());
  closeBtn.addEventListener('click', () => toggleChat(false));

  // Clear Chat
  clearBtn.addEventListener('click', () => {
    chatBody.innerHTML = `
      <div class="ai-msg-row ai">
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-bubble">
          Chat history cleared! 👋 How else can I assist you with Arun Electronics today?
        </div>
      </div>
    `;
  });

  // Suggestion Chips Click
  suggestions.querySelectorAll('.ai-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      handleUserMessage(query);
    });
  });

  // Form Submit
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (text) {
      chatInput.value = '';
      handleUserMessage(text);
    }
  });

  // Voice Search inside Chatbot
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;

    voiceBtn.addEventListener('click', () => {
      voiceBtn.classList.add('listening');
      voiceBtn.innerHTML = '<span style="color:#ef4444;">🔴</span>';
      recognition.start();
    });

    recognition.addEventListener('result', (event) => {
      const transcript = event.results[0][0].transcript;
      voiceBtn.classList.remove('listening');
      voiceBtn.innerHTML = '🎤';
      handleUserMessage(transcript);
    });

    recognition.addEventListener('speechend', () => {
      voiceBtn.classList.remove('listening');
      voiceBtn.innerHTML = '🎤';
    });

    recognition.addEventListener('error', () => {
      voiceBtn.classList.remove('listening');
      voiceBtn.innerHTML = '🎤';
    });
  } else {
    voiceBtn.style.display = 'none';
  }

  function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Handle Message Flow
  function handleUserMessage(text) {
    // 1. Add User Bubble
    const userRow = document.createElement('div');
    userRow.className = 'ai-msg-row user';
    userRow.innerHTML = `
      <div class="ai-msg-avatar">👤</div>
      <div class="ai-bubble">${escapeHtml(text)}</div>
    `;
    chatBody.appendChild(userRow);
    scrollToBottom();

    // 2. Add Typing Indicator
    const typingRow = document.createElement('div');
    typingRow.className = 'ai-msg-row ai typing-indicator-row';
    typingRow.innerHTML = `
      <div class="ai-msg-avatar">🤖</div>
      <div class="ai-bubble ai-typing">
        <span></span><span></span><span></span>
      </div>
    `;
    chatBody.appendChild(typingRow);
    scrollToBottom();

    // 3. Process with AI Answer Engine (Simulate natural typing delay)
    setTimeout(() => {
      const typingEl = chatBody.querySelector('.typing-indicator-row');
      if (typingEl) typingEl.remove();

      const response = generateAIResponse(text);
      const aiRow = document.createElement('div');
      aiRow.className = 'ai-msg-row ai';
      aiRow.innerHTML = `
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-bubble">${response}</div>
      `;
      chatBody.appendChild(aiRow);
      scrollToBottom();
    }, 600);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- NLP & FAQ KNOWLEDGE ENGINE ---------- */
  function generateAIResponse(query) {
    const q = query.toLowerCase().trim();

    // 1. Location & Address
    if (matchAny(q, ['where', 'kahan', 'location', 'address', 'map', 'pata', 'gopiganj', 'bhadohi', 'station road', 'situated', 'direction', 'how to reach', 'jagah', 'sthit', 'dukan kahan'])) {
      return `
        📍 <strong>Arun Electronics Location:</strong><br>
        We are conveniently situated at <strong>Station Road, Gopiganj, Bhadohi, Uttar Pradesh 221303</strong>.<br><br>
        Visit us for the best deals on home electronics and prompt repair services!
        <div class="ai-bubble-actions">
          <a href="https://www.google.com/maps/search/Arun+Electronics+Station+Road+Gopiganj+Gerai+UP+221303" target="_blank" class="ai-action-btn primary">📍 Google Maps</a>
          <a href="tel:+919005739983" class="ai-action-btn outline">📞 Call Store</a>
        </div>
      `;
    }

    // 2. Shop Timings & Days
    if (matchAny(q, ['time', 'timing', 'hours', 'open', 'close', 'khula', 'khulti', 'band', 'baje', 'when', 'kab se kab', 'sunday', `holiday`, `working`, `din`])) {
      return `
        ⏰ <strong>Shop Opening Hours:</strong><br>
        • <strong>Days:</strong> Open All 7 Days (Monday – Sunday)<br>
        • <strong>Timings:</strong> <strong>9:00 AM to 9:00 PM</strong><br><br>
        Our doors are open every day to serve you with quality electronics and repair facilities!
        <div class="ai-bubble-actions">
          <a href="contact.html" class="ai-action-btn outline">✉️ Contact Form</a>
        </div>
      `;
    }

    // 3. Contact Details & Owner
    if (matchAny(q, ['contact', 'phone', 'mobile', 'number', 'call', 'owner', 'arun', 'whatsapp', 'baat', 'sampark', 'telephone', 'num', 'malik'])) {
      return `
        📞 <strong>Contact Details:</strong><br>
        • <strong>Owner:</strong> Mr. Arun<br>
        • <strong>Phone / WhatsApp:</strong> +91 9005739983<br>
        • <strong>Address:</strong> Station Road, Gopiganj, UP<br><br>
        Feel free to call us or drop a message on WhatsApp for instant price quotations or inquiries!
        <div class="ai-bubble-actions">
          <button class="ai-action-btn whatsapp" onclick="openWhatsApp('General Enquiry')">💬 Chat on WhatsApp</button>
          <a href="tel:+919005739983" class="ai-action-btn primary">📞 Call +91 9005739983</a>
        </div>
      `;
    }

    // 4. Repair & Servicing
    if (matchAny(q, ['repair', 'servicing', 'service', 'banwana', 'thik', 'khraab', 'khrab', 'broken', 'problem', 'mechanic', 'technician', 'gas', 'wiring work', 'installation', 'fault', 'compressor', 'motor', 'display issue', 'repearing'])) {
      return `
        🛠️ <strong>Expert Repairing Services:</strong><br>
        We offer reliable in-house & home repairing services by skilled technicians:<br>
        <ul>
          <li>📺 <strong>TV / LED:</strong> Display, motherboard, sound issues</li>
          <li>🧊 <strong>Refrigerator:</strong> Gas filling, cooling fault, compressor</li>
          <li>❄️ <strong>AC & Coolers:</strong> Servicing, gas recharge, motor repair</li>
          <li>🌀 <strong>Washing Machine:</strong> Drum, motor, timer repair</li>
          <li>⚡ <strong>Electrical Wiring:</strong> House wiring, short-circuit fix</li>
        </ul>
        <div class="ai-bubble-actions">
          <button class="ai-action-btn whatsapp" onclick="openWhatsApp('Repair Service Booking')">🛠️ Book Repair on WhatsApp</button>
          <a href="services.html" class="ai-action-btn outline">🔍 View Services</a>
        </div>
      `;
    }

    // 5. Deals, Discounts & Pricing
    if (matchAny(q, ['price', 'rate', 'cost', 'kitne ka', 'dam', 'daam', 'discount', 'offer', 'deal', 'sasta', 'cheapest', 'concession', 'kitna', 'saste'])) {
      return `
        🎁 <strong>Best Prices & Special Offers!</strong><br>
        At Arun Electronics, we guarantee genuine branded items at the most affordable rates in Bhadohi!<br><br>
        🔥 <strong>Current Highlights:</strong><br>
        • Up to <strong>20% OFF</strong> on LED Bulbs & Lighting<br>
        • Special combo discounts on Mixer Grinders & Fans<br>
        • Best exchange value on Inverter Batteries<br><br>
        For exact prices of any item, click the button below!
        <div class="ai-bubble-actions">
          <button class="ai-action-btn whatsapp" onclick="openWhatsApp('Price Quotation Request')">💬 Ask Exact Price on WhatsApp</button>
          <a href="products.html" class="ai-action-btn primary">📦 Explore Products</a>
        </div>
      `;
    }

    // 6. Delivery & Payment Methods
    if (matchAny(q, ['delivery', 'home delivery', 'shipping', 'ghar', 'bhej', 'online', 'courier', 'pay', 'payment', 'upi', 'google pay', 'phonepe', 'paytm', 'cash', 'card', 'emi'])) {
      return `
        🚚 <strong>Delivery & Payment Options:</strong><br>
        • <strong>Delivery:</strong> We provide fast local delivery across <strong>Gopiganj, Bhadohi, and nearby areas</strong>.<br>
        • <strong>Payment Methods:</strong> We accept Cash, UPI (Google Pay, PhonePe, Paytm), Debit/Credit Cards, and Net Banking.<br><br>
        Need an item delivered today? Message us on WhatsApp!
        <div class="ai-bubble-actions">
          <button class="ai-action-btn whatsapp" onclick="openWhatsApp('Home Delivery Inquiry')">💬 Order on WhatsApp</button>
        </div>
      `;
    }

    // 7. Why Choose Us / Trust
    if (matchAny(q, ['why', 'trust', 'experience', 'warranty', 'guarantee', 'old', 'best', 'reputation', 'puraan', 'purana', 'visvas'])) {
      return `
        ⭐ <strong>Why Choose Arun Electronics?</strong><br>
        🏆 <strong>10+ Years of Experience</strong> serving Gopiganj<br>
        😊 <strong>5000+ Happy Customers</strong> in Bhadohi<br>
        ✅ <strong>100% Genuine Branded Items</strong> with warranty<br>
        🛠️ <strong>Complete Repairing Facility</strong> under one roof<br><br>
        We pride ourselves on honest pricing and unmatched customer service!
      `;
    }

    // 8. Specific Product Keyword Matching
    const productMatch = checkProductKeywords(q);
    if (productMatch) {
      return productMatch;
    }

    // 9. General Products / Catalog Query
    if (matchAny(q, ['what do you sell', 'catalog', 'catalogue', 'saman', 'kya kya', 'item', 'list', 'milta', 'products', 'shop', 'appliances', 'cheezein', 'stock'])) {
      return `
        📦 <strong>Our Comprehensive Product Catalog:</strong><br>
        We stock a vast variety of electronics & electrical accessories:<br>
        <ul>
          <li>📺 <strong>Entertainment:</strong> LED TVs, D2H Boxes, Speakers</li>
          <li>🧊 <strong>Large Appliances:</strong> Refrigerators, Washing Machines, ACs</li>
          <li>❄️ <strong>Summer Coolers:</strong> Desert Coolers, Tower Air Coolers, Ceiling Fans</li>
          <li>⚡ <strong>Power Backup:</strong> Inverters, Tubular Batteries, Stabilizers, UPS</li>
          <li>🍳 <strong>Kitchen:</strong> Mixer Grinders, Induction Cooktops, Kettles, Irons</li>
          <li>💡 <strong>Electrical & Wiring:</strong> ISI Wires, Modular Switches, LED Bulbs, MCBs</li>
        </ul>
        <div class="ai-bubble-actions">
          <a href="products.html" class="ai-action-btn primary">📦 View All Products</a>
          <button class="ai-action-btn whatsapp" onclick="openWhatsApp('Product Catalog Inquiry')">💬 Ask on WhatsApp</button>
        </div>
      `;
    }

    // 10. Greetings
    if (matchAny(q, ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'good morning', 'good evening', 'good afternoon', 'kaise ho', 'hi there', 'hii', 'hola'])) {
      return `
        Namaste! 🙏 Welcome to <strong>Arun Electronics</strong>.<br><br>
        I am here to help you find the best electronics, answer your pricing questions, or book repair services. What are you looking for today?
        <div class="ai-bubble-actions">
          <a href="products.html" class="ai-action-btn primary">📦 Browse Products</a>
          <a href="services.html" class="ai-action-btn outline">🛠️ View Services</a>
        </div>
      `;
    }

    // 11. Gratitude
    if (matchAny(q, ['thanks', 'thank you', 'dhanyavad', 'shukriya', 'bahut badhiya', 'nice', 'good', 'great', 'awesome', 'mast', 'acccha', 'accha'])) {
      return `
        You are most welcome! 😊 We are always happy to help.<br><br>
        If you need anything else, feel free to ask or visit our shop at Station Road, Gopiganj. Have a wonderful day! ⚡
      `;
    }

    // 12. Smart Fallback with Actionable Assistance
    return `
      Thank you for your question! 🤔 While I am an AI trained on Arun Electronics offerings, I want to make sure you get the exact details you need.<br><br>
      Our shop owner Mr. Arun is available to assist you directly with custom quotes, product availability, or technical guidance!
      <div class="ai-bubble-actions">
        <button class="ai-action-btn whatsapp" onclick="openWhatsApp('${escapeHtml(query)}')">💬 Ask Owner on WhatsApp</button>
        <a href="tel:+919005739983" class="ai-action-btn primary">📞 Call +91 9005739983</a>
        <a href="contact.html" class="ai-action-btn outline">📍 Visit Store</a>
      </div>
    `;
  }

  function matchAny(text, words) {
    return words.some(w => text.includes(w));
  }

  function checkProductKeywords(q) {
    const categories = [
      {
        keys: ['tv', 'television', 'led tv', 'smart tv', 'android tv', 'screen', 'display'],
        name: 'Televisions & Smart TVs',
        desc: 'We offer LED, Smart & Android TVs from 24" to 55" across top brands with crystal clear display & sound.',
        action: 'Television'
      },
      {
        keys: ['fridge', 'refrigerator', 'single door', 'double door', 'thanda', 'cooling', 'ice'],
        name: 'Refrigerators (Fridges)',
        desc: 'Single door & double door fridges with energy-saving inverter compressors and fast cooling technology.',
        action: 'Refrigerator'
      },
      {
        keys: ['cooler', 'air cooler', 'desert cooler', 'tower cooler', 'window cooler', 'garmi', 'summer'],
        name: 'Air Coolers & Desert Coolers',
        desc: 'High-blast desert coolers and stylish tower coolers with honeycomb pads for extreme summer cooling.',
        action: 'Air Cooler'
      },
      {
        keys: ['ac', 'air conditioner', 'split ac', 'window ac', 'inverter ac', 'ton'],
        name: 'Air Conditioners (AC)',
        desc: '1 Ton, 1.5 Ton & 2 Ton Split and Window ACs with fast cooling and installation support.',
        action: 'Air Conditioner'
      },
      {
        keys: ['washing machine', 'washer', 'laundry', 'kapda', 'dhona', 'automatic'],
        name: 'Washing Machines',
        desc: 'Semi-automatic and fully automatic top-load washing machines for effortless fabric care.',
        action: 'Washing Machine'
      },
      {
        keys: ['inverter', 'battery', 'ups', 'backup', 'power', 'bijli', 'tubular'],
        name: 'Inverters & Batteries',
        desc: 'Sine wave inverters and heavy-duty tubular batteries providing uninterrupted home power backup.',
        action: 'Inverter & Battery'
      },
      {
        keys: ['stabilizer', 'voltage', 'fluctuation', 'regulator'],
        name: 'Voltage Stabilizers',
        desc: 'Automatic voltage stabilizers to protect your AC, Refrigerator, TV, and entire house from voltage fluctuations.',
        action: 'Stabilizer'
      },
      {
        keys: ['fan', 'pankha', 'ceiling fan', 'table fan', 'exhaust fan', 'hawa', 'regulator'],
        name: 'Fans & Regulators',
        desc: 'High-speed decorative ceiling fans, portable table fans, exhaust fans, and electronic dimmers.',
        action: 'Fan'
      },
      {
        keys: ['mixer', 'grinder', 'juicer', 'chutney', 'jar', 'blend'],
        name: 'Mixer Grinders',
        desc: 'Heavy motor 500W–750W mixer grinders with 3 stainless steel jars for tough grinding and juicing.',
        action: 'Mixer Grinder'
      },
      {
        keys: ['iron', 'press', 'steam iron', 'dry iron', 'kapde press'],
        name: 'Electric Irons',
        desc: 'Lightweight dry irons and powerful steam irons with non-stick coating for crisp, wrinkle-free clothes.',
        action: 'Electric Iron'
      },
      {
        keys: ['geyser', 'water heater', 'immersion rod', 'heater rod', 'hot water', 'garam pani', 'sardi', 'winter'],
        name: 'Geysers & Water Heaters',
        desc: 'Instant and storage water geysers (3L to 25L) plus immersion heater rods for instant winter heating.',
        action: 'Water Heater & Geyser'
      },
      {
        keys: ['wire', 'cable', 'copper', 'wiring', 'switch', 'socket', 'plug', 'holder', 'board', 'mcb', 'rccb', 'fuse', 'tape', 'connector'],
        name: 'Electrical Accessories & Wiring',
        desc: 'ISI marked copper wires, modular switches, sockets, DB boxes, MCBs, extension boards, and cables.',
        action: 'Electrical Accessories'
      },
      {
        keys: ['bulb', 'led', 'tubelight', 'panel light', 'tube', 'roshni', 'lamp', 'night lamp', 'light'],
        name: 'LED Lighting Solutions',
        desc: 'Energy-saving 7W–15W LED bulbs, bright LED batten tube lights, and concealed ceiling panel lights.',
        action: 'LED Lighting'
      },
      {
        keys: ['ro', 'water purifier', 'filter', 'clean water', 'pani', 'drinking'],
        name: 'RO Water Purifiers',
        desc: 'RO+UV+UF multi-stage water purifiers ensuring 100% pure and sweet drinking water for your family.',
        action: 'RO Water Purifier'
      },
      {
        keys: ['d2h', 'dth', 'set top box', 'dish', 'tata play', 'airtel', 'speaker', 'bluetooth', 'soundbar', 'gaana', 'music'],
        name: 'Entertainment & Audio',
        desc: 'DTH set-top boxes (Tata Play, Airtel, Dish TV) and high-bass Bluetooth tower speakers & soundbars.',
        action: 'Speaker & D2H'
      }
    ];

    for (const cat of categories) {
      if (matchAny(q, cat.keys)) {
        return `
          📦 <strong>${cat.name}:</strong><br>
          ${cat.desc}<br><br>
          ✅ <strong>Status:</strong> Available at store with genuine brand warranty!<br>
          Want to know models and today's discounted price?
          <div class="ai-bubble-actions">
            <button class="ai-action-btn whatsapp" onclick="openWhatsApp('${cat.action} Price Inquiry')">💬 Ask Price on WhatsApp</button>
            <a href="products.html" class="ai-action-btn primary">📦 View in Catalog</a>
          </div>
        `;
      }
    }
    return null;
  }
}

