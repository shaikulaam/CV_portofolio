document.addEventListener('DOMContentLoaded', function () {
  const darkModeBtn = document.getElementById('darkModeBtn');
  const html = document.documentElement;

  // Fungsi untuk mengaktifkan/menonaktifkan Dark Mode
  function applyDarkMode(isDark) {
    if (isDark) {
      html.classList.add('dark-mode');
      if (darkModeBtn) darkModeBtn.textContent = '☀️';
    } else {
      html.classList.remove('dark-mode');
      if (darkModeBtn) darkModeBtn.textContent = '🌙';
    }
  }

  // Load preferensi awal dari localStorage
  const isSavedDark = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(isSavedDark);

  // Toggle Dark Mode saat tombol diklik
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function () {
      const isCurrentlyDark = html.classList.contains('dark-mode');
      const newDarkState = !isCurrentlyDark;

      applyDarkMode(newDarkState);
      localStorage.setItem('darkMode', newDarkState);
    });
  }
});
