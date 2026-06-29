class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header-logo">
          <a href="index.html">
            <img id="logo-image" src="img/logo/LOGO BEMAKER-16 copy.png" alt="logo BeMaker" />
          </a>
        </div>
        <nav class="header-nav">
          <ul>
            <li><a href="index.html#services-section">Soluciones</a></li>
            <li><a href="index.html#pricing-section">Planes PYME</a></li>
            <li><a href="kits.html">Kits DIY</a></li>
            <li><a href="index.html#about-us-section">Sobre Nosotros</a></li>
            <li><a href="portafolio.html">Portafolio</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <button class="header-cta" onclick="location.href = 'contacto.html'">
            Comenzar
          </button>
          <button id="theme-switch" class="theme-switch-btn">🌙</button>
          <button class="mobile-menu-btn" aria-label="Abrir menú">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </header>
    `;

    const mobileBtn = this.querySelector(".mobile-menu-btn");
    const headerNav = this.querySelector(".header-nav");

    if (mobileBtn && headerNav) {
      mobileBtn.addEventListener("click", () => {
        headerNav.classList.toggle("active");
      });

      const links = headerNav.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          headerNav.classList.remove("active");
        });
      });
    }

    const themeSwitchBtn = this.querySelector("#theme-switch");
    const logoImage = this.querySelector("#logo-image");

    if (themeSwitchBtn) {
      const body = document.body;
      const themeStorageKey = "bemaker-theme";
      const lightModeLogo = "img/logo/LOGO BEMAKER-14 copy.PNG";
      const darkModeLogo = "img/logo/LOGO BEMAKER-16 copy.png";

      function updateThemeUI(isLightMode) {
        if (isLightMode) {
          body.classList.add("light-mode");
          if (logoImage) logoImage.src = lightModeLogo;
          themeSwitchBtn.textContent = "☀️";
          localStorage.setItem(themeStorageKey, "light");
        } else {
          body.classList.remove("light-mode");
          if (logoImage) logoImage.src = darkModeLogo;
          themeSwitchBtn.textContent = "🌙";
          localStorage.setItem(themeStorageKey, "dark");
        }
      }

      function toggleTheme() {
        const isLight = !body.classList.contains("light-mode");
        updateThemeUI(isLight);
      }

      const savedTheme = localStorage.getItem(themeStorageKey);
      const useLight = savedTheme === "light";
      updateThemeUI(useLight);
      themeSwitchBtn.addEventListener("click", toggleTheme);
    }
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2025 BeMaker. Todos los derechos reservados.</p>
          <div class="footer-social-media">
            <a href="https://www.linkedin.com/in/pilar-bonnault-mancilla" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro perfil de LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/bemaker.dev" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro perfil de Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/share/16bNj2comz/" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestra página de Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-header", AppHeader);
customElements.define("app-footer", AppFooter);
