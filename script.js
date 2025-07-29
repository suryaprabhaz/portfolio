const toggleBtn = document.getElementById('toggleTheme');
const icon = document.getElementById('themeIcon');

toggleBtn.onclick = () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  if (current === 'light') {
    html.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    html.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
  }
};
