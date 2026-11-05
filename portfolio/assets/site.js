'use strict';
const root = document.documentElement;
let saved;
try { saved = localStorage.getItem('belisarius-theme'); } catch {}
const preference = matchMedia('(prefers-color-scheme: dark)');
root.dataset.theme = saved === 'light' || saved === 'dark' ? saved : preference.matches ? 'dark' : 'light';
document.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('.theme-toggle');
  const refreshTheme = () => {
    const dark = root.dataset.theme === 'dark';
    theme.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    theme.querySelector('span').textContent = dark ? 'Light mode' : 'Dark mode';
  };
  refreshTheme();
  theme.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    saved = root.dataset.theme;
    try { localStorage.setItem('belisarius-theme', saved); } catch {}
    refreshTheme();
  });
  preference.addEventListener('change', event => {
    if (!saved) { root.dataset.theme = event.matches ? 'dark' : 'light'; refreshTheme(); }
  });
  const menu = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const closeMenu = () => { sidebar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!sidebar.contains(event.target) && !menu.contains(event.target)) closeMenu(); });
  matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);
  const form = document.querySelector('#conversation-form');
  if (form) {
    const date = form.querySelector('[name=date]');
    const today = new Date();
    date.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `Conversation request: ${data.get('topic')}`;
      const body = `Hello Joseph,\n\nI would like to arrange a conversation.\n\nName: ${data.get('name')}\nTopic: ${data.get('topic')}\nPreferred date: ${data.get('date')}\nPreferred time and time zone: ${data.get('time')}\n\n${data.get('message')}\n\nPlease let me know whether this works for you.`;
      location.href = `mailto:josepht.daniels@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      document.querySelector('#booking-status').textContent = 'Your email app should open with a draft. Send it to request a time; your meeting is confirmed only when Joseph replies. If no app opens, email josepht.daniels@outlook.com directly.';
    });
  }
});

// Decorative motion and focus exploration have no network or tracking dependency.
document.addEventListener('DOMContentLoaded', () => {
  const motion = document.querySelector('.motion-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let pauseChoice;
  try { pauseChoice = localStorage.getItem('belisarius-motion'); } catch {}
  const updateMotion = () => {
    const paused = reduced.matches || pauseChoice === 'paused';
    root.dataset.motion = paused ? 'paused' : 'running';
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? 'Resume background motion' : 'Pause background motion');
    motion.querySelector('span').textContent = paused ? 'Motion off' : 'Motion on';
    motion.disabled = reduced.matches;
    motion.title = reduced.matches ? 'Motion disabled by your reduced-motion preference' : 'Control decorative background motion';
  };
  updateMotion();
  reduced.addEventListener('change', updateMotion);
  motion.addEventListener('click', () => {
    pauseChoice = root.dataset.motion === 'paused' ? 'running' : 'paused';
    try { localStorage.setItem('belisarius-motion', pauseChoice); } catch {}
    updateMotion();
  });
  const choices = document.querySelectorAll('.focus-choice');
  const detail = document.querySelector('#focus-detail');
  choices.forEach(choice => choice.addEventListener('click', () => {
    choices.forEach(button => button.setAttribute('aria-pressed', String(button === choice)));
    detail.querySelector('h3').textContent = choice.querySelector('span').textContent;
    detail.querySelector('p').textContent = choice.dataset.description;
  }));
  document.querySelectorAll('.tabs a').forEach(link => link.addEventListener('click', () => {
    document.querySelectorAll('.tabs a').forEach(item => item.classList.toggle('active', item === link));
  }));
});
