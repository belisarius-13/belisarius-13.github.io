const themeButton = document.querySelector('button[aria-pressed]');
function setTheme(enabled) {
  document.body.classList.toggle('dark', enabled);
  themeButton.setAttribute('aria-pressed', String(enabled));
}
try {
  setTheme(localStorage.getItem('belisarius-purple') === 'on');
} catch {}
themeButton.addEventListener('click', () => {
  const enabled = !document.body.classList.contains('dark');
  setTheme(enabled);
  try { localStorage.setItem('belisarius-purple', enabled ? 'on' : 'off'); } catch {}
});

function showSection(id) {
  const section = document.getElementById(id);
  if (!section) return false;
  section.tabIndex = -1;
  section.focus({preventScroll:true});
  section.scrollIntoView();
  return true;
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button || event.ctrlKey || event.shiftKey || event.metaKey || event.altKey) return;
  if (showSection(link.hash.slice(1))) event.preventDefault();
});
if (location.hash && showSection(location.hash.slice(1))) {
  history.replaceState(history.state, '', location.pathname + location.search);
}
