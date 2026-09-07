/**
 * IGLESIA SOL DE JUSTICIA - GIVING & DONATIONS MODULE
 * Interactive accounts copy, giving tabs, amount presets & online giving modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initGivingTabs();
  initCopyAccounts();
  initGivingCalculator();
  initOnlineGivingModal();
});

/* --- Tab Switching (Bancos Locales / Zelle / Donar Online) --- */
function initGivingTabs() {
  const tabBtns = document.querySelectorAll('.giving-tab-btn');
  const tabPanes = document.querySelectorAll('.giving-tab-pane');

  if (tabBtns.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-giving-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(target);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/* --- Copy to Clipboard with Tooltip & Toast --- */
function initCopyAccounts() {
  const copyButtons = document.querySelectorAll('[data-copy-val]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy-val');
      const label = btn.getAttribute('data-copy-label') || 'Dato bancario';

      navigator.clipboard.writeText(val).then(() => {
        window.showToast('¡Copiado al Portapapeles!', `${label}: ${val}`);

        // Visual feedback on the button
        const originalIcon = btn.innerHTML;
        btn.innerHTML = `<svg width="16" height="16" fill="#10B981" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
        setTimeout(() => {
          btn.innerHTML = originalIcon;
        }, 2000);
      }).catch(err => {
        console.error('Error copying:', err);
      });
    });
  });
}

/* --- Giving Calculator & Currency Switcher --- */
function initGivingCalculator() {
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('custom-giving-amount');
  const fundCategorySelect = document.getElementById('giving-fund-select');

  if (amountBtns.length === 0) return;

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const amount = btn.getAttribute('data-amount');
      if (customAmountInput) customAmountInput.value = amount;
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
    });
  }
}

/* --- Online Giving Modal & Simulator --- */
function initOnlineGivingModal() {
  const modal = document.getElementById('online-giving-modal');
  const openBtns = document.querySelectorAll('.open-online-giving');
  const closeBtn = document.getElementById('close-giving-modal');
  const form = document.getElementById('online-giving-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = document.getElementById('modal-giving-amount')?.value || '1,000';
      const currency = document.getElementById('modal-giving-currency')?.value || 'DOP';
      const category = document.getElementById('modal-giving-category')?.value || 'Diezmo y Ofrenda';
      const donorName = document.getElementById('modal-donor-name')?.value || 'Hermano/a en la Fe';

      // Simulation processing
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Procesando con seguridad SSL...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        closeModal();

        window.showToast(
          '¡Ofrenda Procesada con Éxito!',
          `Gracias ${donorName}. Tu aporte de ${currency} $${amount} para "${category}" bendecirá la obra de Dios.`
        );
        form.reset();
      }, 1500);
    });
  }
}
