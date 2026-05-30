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

  // Close when links are clicked and navigate to the page programmatically
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (!link.closest('.sidebar-brand-wrapper')) {
        e.preventDefault();
        const href = link.getAttribute('href');
        closeMenu();
        if (href) {
          window.location.href = href;
        }
      }
    });
  });

  function openMenu() {
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hide AI chatbot toggle and close its panel if open
    const chatToggle = document.getElementById('aiChatToggle');
    const chatPanel = document.getElementById('aiChatPanel');
    const chatOverlay = document.querySelector('.ai-chat-overlay');
    if (chatToggle) chatToggle.style.display = 'none';
    if (chatPanel) chatPanel.classList.remove('active');
    if (chatOverlay) chatOverlay.classList.remove('active');
    if (chatToggle) chatToggle.classList.remove('active');
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Show AI chatbot toggle again
    const chatToggle = document.getElementById('aiChatToggle');
    if (chatToggle) chatToggle.style.display = '';
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

/* ---------- Dynamic products.js Loading for Non-Products Pages ---------- */
if (!document.querySelector('script[src*="products.js"]')) {
  const script = document.createElement('script');
  script.src = 'js/products.js';
  document.body.appendChild(script);
}
