const toggleBtn = document.getElementById('themeToggle');
const root = document.body;

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  root.classList.add('dark');
  if (toggleBtn) toggleBtn.innerHTML = '<span class="toggle-icon">☀️</span>';
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    toggleBtn.innerHTML = isDark ? '<span class="toggle-icon">☀️</span>' : '<span class="toggle-icon">🌙</span>';
  });
}
