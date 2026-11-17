'use strict';

const contactForm = document.getElementById('conversation-form');
if (contactForm) {
  const submitButton = contactForm.querySelector('[type="submit"]');
  const status = document.getElementById('booking-status');
  let sending = false;
  submitButton.disabled = false;

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !contactForm.reportValidity()) return;

    sending = true;
    submitButton.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending your message…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch('https://formspree.io/f/xwllzrlp', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
        credentials: 'omit',
        redirect: 'error',
        signal: controller.signal
      });
      if (response.ok) {
        contactForm.reset();
        status.textContent = 'Thank you. Your message has been submitted. I’ll reply to the email address you provided.';
      } else if (response.status === 429) {
        status.textContent = 'Too many requests. Please wait a few minutes before trying again. Your message is still here.';
      } else {
        status.textContent = 'Your message could not be submitted. Please check your details and try again, or email josepht.daniels@outlook.com. Your message is still here.';
      }
    } catch {
      status.textContent = 'We couldn’t confirm submission. Please check your connection before trying again, or email josepht.daniels@outlook.com. Your message is still here.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      submitButton.disabled = false;
      contactForm.removeAttribute('aria-busy');
      status.focus();
    }
  });
}
