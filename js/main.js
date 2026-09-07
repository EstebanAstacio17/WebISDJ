/**
 * IGLESIA SOL DE JUSTICIA - MASTER JAVASCRIPT
 * Interactivity, Navigation, Live Countdown, Video Modals, Scripture Sharing
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCountdown();
  initScrollReveal();
  initVideoModals();
  initDevotionalVerse();
  initGeneralModals();
  initScrollTop();
});

/* --- Toast Notification Helper --- */
window.showToast = function(title, message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    </div>
    <div class="toast-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
};

/* --- Navigation & Mobile Menu --- */
function initNavigation() {
  const header = document.querySelector('.header-main');
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Scroll Class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      const isOpen = menu.classList.contains('active');
      toggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
        : '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
      });
    });
  }

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

/* --- Real-Time Next Service Countdown --- */
function initCountdown() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');
  const labelEl = document.getElementById('countdown-next-label');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function getNextServiceDate() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 3 = Wednesday
    const currentHour = now.getHours();

    let target = new Date(now);

    // Services:
    // Sunday at 10:00 AM
    // Wednesday at 7:00 PM (19:00)
    
    // Check if next is Wednesday or Sunday
    if (currentDay < 3 || (currentDay === 3 && currentHour < 19)) {
      // Next is Wednesday 19:00
      const daysUntilWed = (3 - currentDay + 7) % 7;
      target.setDate(now.getDate() + daysUntilWed);
      target.setHours(19, 0, 0, 0);
      if (labelEl) labelEl.textContent = 'Culto de Oración y Estudio Bíblico (Miércoles 7:00 PM)';
    } else if (currentDay < 0 || (currentDay === 0 && currentHour < 10) || currentDay > 3) {
      // Next is Sunday 10:00 AM
      const daysUntilSun = (7 - currentDay) % 7;
      target.setDate(now.getDate() + daysUntilSun);
      target.setHours(10, 0, 0, 0);
      if (labelEl) labelEl.textContent = 'Culto Dominical de Adoración y Palabra (Domingo 10:00 AM)';
    } else {
      // Sunday after 10 AM, next is Wednesday
      const daysUntilWed = (3 - currentDay + 7) % 7;
      target.setDate(now.getDate() + daysUntilWed);
      target.setHours(19, 0, 0, 0);
      if (labelEl) labelEl.textContent = 'Culto de Oración y Estudio Bíblico (Miércoles 7:00 PM)';
    }

    return target;
  }

  const nextService = getNextServiceDate();

  function update() {
    const now = new Date().getTime();
    const distance = nextService.getTime() - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* --- Scroll Reveal Animations --- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --- Video Modals & Sermons --- */
function initVideoModals() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-frame');
  const titleEl = document.getElementById('video-modal-title');
  const preacherEl = document.getElementById('video-modal-preacher');
  const playButtons = document.querySelectorAll('[data-video-id]');
  const closeBtn = document.getElementById('close-video-modal');

  if (!modal || !iframe) return;

  playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoId = btn.getAttribute('data-video-id') || 'dQw4w9WgXcQ';
      const title = btn.getAttribute('data-video-title') || 'Mensaje de la Palabra de Dios';
      const preacher = btn.getAttribute('data-video-preacher') || 'Iglesia Sol de Justicia';

      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      if (titleEl) titleEl.textContent = title;
      if (preacherEl) preacherEl.textContent = preacher;

      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    iframe.src = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* --- Devotional Verse Generator & Sharing --- */
const devotions = [
  {
    verse: "Mas a vosotros los que teméis mi nombre, nacerá el Sol de justicia, y en sus alas traerá salvación; y saldréis, y saltaréis como becerros de la manada.",
    ref: "Malaquías 4:2 (RVR1960)"
  },
  {
    verse: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
    ref: "Efesios 2:8-9 (RVR1960)"
  },
  {
    verse: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
    ref: "Juan 3:16 (RVR1960)"
  },
  {
    verse: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
    ref: "Salmos 119:105 (RVR1960)"
  },
  {
    verse: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
    ref: "Filipenses 4:7 (RVR1960)"
  },
  {
    verse: "Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará.",
    ref: "Salmos 23:1-2 (RVR1960)"
  }
];

function initDevotionalVerse() {
  const verseText = document.getElementById('daily-verse-text');
  const verseRef = document.getElementById('daily-verse-ref');
  const nextBtn = document.getElementById('btn-next-verse');
  const copyBtn = document.getElementById('btn-copy-verse');
  const shareWaBtn = document.getElementById('btn-share-verse-wa');

  if (!verseText || !verseRef) return;

  let currentIndex = 0;

  function showVerse(index) {
    const item = devotions[index];
    verseText.textContent = `“${item.verse}”`;
    verseRef.textContent = `— ${item.ref}`;
  }

  showVerse(currentIndex);

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % devotions.length;
      showVerse(currentIndex);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = `${verseText.textContent}\n${verseRef.textContent}\n\n— Iglesia Sol de Justicia`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        window.showToast('¡Versículo Copiado!', 'El pasaje bíblico fue copiado al portapapeles.');
      });
    });
  }

  if (shareWaBtn) {
    shareWaBtn.addEventListener('click', () => {
      const text = encodeURIComponent(`🕊️ *Versículo del Día - Iglesia Sol de Justicia*\n\n${verseText.textContent}\n${verseRef.textContent}\n\n¡Dios te bendiga hoy!`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }
}

/* --- General Modals (Plan Visit, Salvation Prayer) --- */
function initGeneralModals() {
  const planModal = document.getElementById('plan-visit-modal');
  const openPlanBtns = document.querySelectorAll('.open-plan-visit');
  const closePlanBtn = document.getElementById('close-plan-modal');

  if (planModal && openPlanBtns.length > 0) {
    openPlanBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        planModal.classList.add('active');
      });
    });

    if (closePlanBtn) {
      closePlanBtn.addEventListener('click', () => planModal.classList.remove('active'));
    }
    planModal.addEventListener('click', (e) => {
      if (e.target === planModal) planModal.classList.remove('active');
    });
  }
}

/* --- Scroll To Top --- */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
