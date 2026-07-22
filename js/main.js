// =====================
// Mobile navigation toggle
// =====================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// =====================
// Contact form validation
// =====================
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const fields = ['name', 'email', 'subject', 'message'];
    let valid = true;

    fields.forEach((field) => {
      const input = contactForm.querySelector(`[name="${field}"]`);
      if (input) {
        input.classList.remove('error');
        const value = String(formData.get(field) || '').trim();
        if (!value) {
          input.classList.add('error');
          valid = false;
        }
      }
    });

    const emailField = contactForm.querySelector('[name="email"]');
    if (emailField) {
      const emailValue = String(formData.get('email') || '').trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue && !emailPattern.test(emailValue)) {
        emailField.classList.add('error');
        valid = false;
      }
    }

    if (formStatus) {
      if (valid) {
        formStatus.textContent = 'Message ready — thank you for reaching out.';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Please complete every field with valid information.';
      }
    }
  });
}
