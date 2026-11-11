const themeButton = document.querySelector('button[aria-pressed]');
themeButton.addEventListener('click', () => {
  themeButton.setAttribute('aria-pressed', document.body.classList.toggle('dark'));
});
