// Меню для мобильной навигации
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
  siteNav.classList.toggle('is-open', !isOpen);
});
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}));

// Юридические диалоги
document.querySelectorAll('.footer-legal button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dialog = document.querySelector(btn.dataset.dialog);
    if (dialog) dialog.showModal();
  });
});
document.querySelectorAll('.legal-dialog').forEach((dialog) => {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.querySelectorAll('.dialog-close').forEach((btn) => {
    btn.addEventListener('click', () => dialog.close());
  });
});

// Плавная прокрутка с учётом липкой шапки
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }
}));

// Inline-ошибки формы
const appointmentForm = document.querySelector('#appointment-form');
appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formError = document.querySelector('#form-error');
  const formMessage = document.querySelector('#form-message');
  formError.textContent = '';
  formMessage.textContent = '';
  appointmentForm.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));

  if (!appointmentForm.checkValidity()) {
    formError.textContent = 'Заполните имя и телефон — без них мы не сможем вам перезвонить.';
    appointmentForm.querySelectorAll('input, select').forEach((el) => {
      if (!el.checkValidity()) el.setAttribute('aria-invalid', 'true');
    });
    const firstInvalid = appointmentForm.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const clientName = appointmentForm.elements.name.value.trim();
  formMessage.textContent = 'Спасибо, ' + clientName + '! Мы скоро вам позвоним.';
  appointmentForm.reset();
});

// Анимация появления при прокрутке
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
if (prefersReducedMotion.matches) {
  revealElements.forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealElements.forEach((el) => revealObserver.observe(el));
}