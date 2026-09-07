/**
 * IGLESIA SOL DE JUSTICIA - PRAYER REQUESTS MODULE
 * Interactive prayer forms, category pills, privacy filters & live prayer wall
 */

document.addEventListener('DOMContentLoaded', () => {
  initPrayerCategoryPills();
  initPrayerForm();
  initPrayerWallInteractions();
});

/* --- Category Pills Interactive Selection --- */
function initPrayerCategoryPills() {
  const pills = document.querySelectorAll('.category-pill');
  const hiddenCategoryInput = document.getElementById('selected-prayer-category');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      const val = pill.getAttribute('data-cat') || 'General';
      if (hiddenCategoryInput) hiddenCategoryInput.value = val;
    });
  });
}

/* --- Prayer Form Submission --- */
function initPrayerForm() {
  const form = document.getElementById('prayer-request-form');
  const wallList = document.getElementById('prayer-wall-list');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('prayer-name')?.value.trim() || 'Anónimo';
    const emailOrPhone = document.getElementById('prayer-contact')?.value.trim() || '';
    const category = document.getElementById('selected-prayer-category')?.value || 'Sanidad y Salud';
    const requestText = document.getElementById('prayer-text')?.value.trim() || '';
    const isPrivate = document.getElementById('prayer-private')?.checked;

    if (!requestText) {
      alert('Por favor describe tu motivo de oración.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando petición...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      // Reset category pills
      const pills = document.querySelectorAll('.category-pill');
      pills.forEach((p, i) => {
        if (i === 0) p.classList.add('selected');
        else p.classList.remove('selected');
      });

      // Show celebratory confirmation toast
      window.showToast(
        '¡Petición Recibida!',
        isPrivate 
          ? 'Tu petición está en manos del equipo pastoral en estricta confidencialidad.'
          : 'Tu petición ha sido añadida al muro de intercesión. Estaremos orando por ti.'
      );

      // If not private, append to live prayer wall list
      if (!isPrivate && wallList) {
        const newPrayerCard = document.createElement('div');
        newPrayerCard.className = 'prayer-wall-item';
        newPrayerCard.style.animation = 'fadeIn 0.5s ease';
        newPrayerCard.innerHTML = `
          <div class="prayer-wall-meta">
            <span class="prayer-author">${escapeHtml(name)}</span>
            <span class="prayer-category-tag">${escapeHtml(category)} &bull; Hace un momento</span>
          </div>
          <p>${escapeHtml(requestText)}</p>
          <button class="pray-action-btn" onclick="supportPrayer(this)">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>Orar por esta causa (<span class="pray-count">1</span>)</span>
          </button>
        `;
        wallList.insertBefore(newPrayerCard, wallList.firstChild);
      }
    }, 1000);
  });
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/* --- Support Prayer Button Counter --- */
window.supportPrayer = function(btn) {
  const countSpan = btn.querySelector('.pray-count');
  if (countSpan && !btn.classList.contains('prayed')) {
    let count = parseInt(countSpan.textContent, 10) || 0;
    countSpan.textContent = count + 1;
    btn.classList.add('prayed');
    btn.style.background = 'var(--primary-gold)';
    btn.style.color = 'var(--bg-dark-900)';
    window.showToast('¡Unidos en Oración!', 'Has sumado tu oración a esta petición.');
  }
};

function initPrayerWallInteractions() {
  const buttons = document.querySelectorAll('.pray-action-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.supportPrayer(btn);
    });
  });
}
