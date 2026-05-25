export function initTheme() {
  const themeSwitchBtn = document.getElementById("theme-switch");
  const body = document.body;
  const logoImage = document.getElementById("logo-image");
  const themeStorageKey = "bemaker-theme";

  const lightModeLogo = "img/logo/LOGO BEMAKER-14 copy.PNG";
  const darkModeLogo = "img/logo/LOGO BEMAKER-16 copy.png";

  function updateThemeUI(isLightMode) {
    if (isLightMode) {
      body.classList.add("light-mode");
      if (logoImage) logoImage.src = lightModeLogo;
      if (themeSwitchBtn) themeSwitchBtn.textContent = "☀️";
      localStorage.setItem(themeStorageKey, "light");
    } else {
      body.classList.remove("light-mode");
      if (logoImage) logoImage.src = darkModeLogo;
      if (themeSwitchBtn) themeSwitchBtn.textContent = "🌙";
      localStorage.setItem(themeStorageKey, "dark");
    }
  }

  function toggleTheme() {
    const isLight = !body.classList.contains("light-mode");
    updateThemeUI(isLight);
  }

  if (themeSwitchBtn) {
    const savedTheme = localStorage.getItem(themeStorageKey);
    const useLight = savedTheme === "light";
    updateThemeUI(useLight);
    themeSwitchBtn.addEventListener("click", toggleTheme);
  }
}
