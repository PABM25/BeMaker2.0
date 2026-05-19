document.addEventListener('DOMContentLoaded', () => {
    // 1. GESTIÓN DEL TEMA (MODO CLARO/OSCURO)
    const themeSwitchBtn = document.getElementById('theme-switch');
    const body = document.body;
    const logoImage = document.getElementById('logo-image');
    const themeStorageKey = 'bemaker-theme';
  
    const lightModeLogo = "img/logo/LOGO BEMAKER-14 copy.PNG";
    const darkModeLogo = "img/logo/LOGO BEMAKER-16 copy.png";
  
    function updateThemeUI(isLightMode) {
      if (isLightMode) {
        body.classList.add('light-mode');
        if(logoImage) logoImage.src = lightModeLogo;
        if(themeSwitchBtn) themeSwitchBtn.textContent = '☀️';
        localStorage.setItem(themeStorageKey, 'light');
      } else {
        body.classList.remove('light-mode');
        if(logoImage) logoImage.src = darkModeLogo;
        if(themeSwitchBtn) themeSwitchBtn.textContent = '🌙';
        localStorage.setItem(themeStorageKey, 'dark');
      }
    }
  
    function toggleTheme() {
      const isLight = !body.classList.contains('light-mode');
      updateThemeUI(isLight);
    }
  
    function initTheme() {
      const savedTheme = localStorage.getItem(themeStorageKey);
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const useLight = savedTheme === 'light' || (!savedTheme && prefersLight);
      updateThemeUI(useLight);
    }
  
    if (themeSwitchBtn) {
      initTheme();
      themeSwitchBtn.addEventListener('click', toggleTheme);
    }
  
    // 2. EFECTO DE ESCRITURA (TYPING EFFECT) EN EL HERO
    const textToType = "Transformamos ideas en código.";
    const typingElement = document.getElementById('typing-hero-title');
    
    if (typingElement) {
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 80); // Velocidad de tipeo
            }
        }
        setTimeout(typeWriter, 500); // Retraso inicial
    }
  
    // 3. GESTIÓN DEL MODAL DE VIDEO
    const playButtons = document.querySelectorAll('.play-button');
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const closeButton = document.getElementById('close-button');
  
    if(videoModal && videoPlayer) {
        function openModal(videoSrc) {
            videoPlayer.src = videoSrc;
            videoModal.classList.add('open');
            videoPlayer.play();
        }
    
        function closeModal() {
            videoModal.classList.remove('open');
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    
        playButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const videoSrc = event.target.getAttribute('data-video-src');
                if (videoSrc) openModal(videoSrc);
            });
        });
    
        if(closeButton) closeButton.addEventListener('click', closeModal);
    
        // Cerrar al hacer click fuera del video
        videoModal.addEventListener('click', (event) => {
            if (event.target === videoModal) closeModal();
        });
    }
  });



  // Inicializar el Carousel del Hero
if (document.querySelector('.hero-carousel')) {
    const heroSwiper = new Swiper('.hero-carousel', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade', // Opcional: efecto de desvanecimiento suave
    });
}

// Animación Bento Cards con Anime.js
if (typeof anime !== 'undefined') {
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                duration: 400,
                easing: 'easeOutElastic(1, .5)'
            });

            // Animamos el icono dentro de la tarjeta
            anime({
                targets: card.querySelector('i'),
                translateY: -10,
                color: '#ED0807', // Color rojo accent
                duration: 600
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                duration: 400
            });

            anime({
                targets: card.querySelector('i'),
                translateY: 0,
                color: '#010066', // Azul primary
                duration: 600
            });
        });
    });

    // Animación avanzada para el Bento Grid
    const bentoCards = document.querySelectorAll('.bento-card');

    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            anime({
                targets: card,
                rotateX: (y - rect.height / 2) / 10,
                rotateY: (x - rect.width / 2) / 10,
                duration: 100,
                easing: 'linear'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                rotateX: 0,
                rotateY: 0,
                duration: 500,
                easing: 'easeOutElastic(1, .5)'
            });
        });
    });
}

// Efecto de inclinación para los servicios
const serviceCards = document.querySelectorAll('.bento-item');
serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        let { offsetX: x, offsetY: y } = e;
        
        let rotateY = (x - width / 2) / 10;
        let rotateX = -(y - height / 2) / 10;
        
        card.style.transform = `scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `scale(1) rotateY(0) rotateX(0)`;
    });
});
// --- PIXEL CANVAS ANIMATION ---
class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;

    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }

    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }

    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }

    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;

    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }

    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }

    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

class PixelCanvas extends HTMLElement {
  static register(tag = "pixel-canvas") {
    if ("customElements" in window) {
      customElements.define(tag, this);
    }
  }

  static css = `
    :host {
      display: grid;
      inline-size: 100%;
      block-size: 100%;
      overflow: hidden;
    }
  `;

  get colors() {
    return this.dataset.colors?.split(",") || ["#010066", "#ED0807", "#333333"];
  }

  get gap() {
    const value = this.dataset.gap || 5;
    const min = 4;
    const max = 50;

    if (value <= min) {
      return min;
    } else if (value >= max) {
      return max;
    } else {
      return parseInt(value);
    }
  }

  get speed() {
    const value = this.dataset.speed || 35;
    const min = 0;
    const max = 100;
    const throttle = 0.001;

    if (value <= min || this.reducedMotion) {
      return min;
    } else if (value >= max) {
      return max * throttle;
    } else {
      return parseInt(value) * throttle;
    }
  }

  get noFocus() {
    return this.hasAttribute("data-no-focus");
  }

  connectedCallback() {
    const canvas = document.createElement("canvas");
    const sheet = new CSSStyleSheet();

    this._parent = this.parentNode;
    this.shadowroot = this.attachShadow({ mode: "open" });

    sheet.replaceSync(PixelCanvas.css);

    this.shadowroot.adoptedStyleSheets = [sheet];
    this.shadowroot.append(canvas);
    this.canvas = this.shadowroot.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.timeInterval = 1000 / 60;
    this.timePrevious = performance.now();
    this.reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    this.init();
    this.resizeObserver = new ResizeObserver(() => this.init());
    this.resizeObserver.observe(this);

    this._parent.addEventListener("mouseenter", this);
    this._parent.addEventListener("mouseleave", this);

    if (!this.noFocus) {
      this._parent.addEventListener("focusin", this);
      this._parent.addEventListener("focusout", this);
    }
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
    this._parent.removeEventListener("mouseenter", this);
    this._parent.removeEventListener("mouseleave", this);

    if (!this.noFocus) {
      this._parent.removeEventListener("focusin", this);
      this._parent.removeEventListener("focusout", this);
    }

    delete this._parent;
  }

  handleEvent(event) {
    this[`on${event.type}`](event);
  }

  onmouseenter() {
    this.handleAnimation("appear");
  }

  onmouseleave() {
    this.handleAnimation("disappear");
  }

  onfocusin(e) {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    this.handleAnimation("appear");
  }

  onfocusout(e) {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    this.handleAnimation("disappear");
  }

  handleAnimation(name) {
    cancelAnimationFrame(this.animation);
    this.animation = this.animate(name);
  }

  init() {
    const rect = this.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    this.pixels = [];
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.createPixels();
  }

  getDistanceToCanvasCenter(x, y) {
    const dx = x - this.canvas.width / 2;
    const dy = y - this.canvas.height / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance;
  }

  createPixels() {
    for (let x = 0; x < this.canvas.width; x += this.gap) {
      for (let y = 0; y < this.canvas.height; y += this.gap) {
        const color = this.colors[
          Math.floor(Math.random() * this.colors.length)
        ];
        const delay = this.reducedMotion
          ? 0
          : this.getDistanceToCanvasCenter(x, y);

        this.pixels.push(
          new Pixel(this.canvas, this.ctx, x, y, color, this.speed, delay)
        );
      }
    }
  }

  animate(fnName) {
    this.animation = requestAnimationFrame(() => this.animate(fnName));

    const timeNow = performance.now();
    const timePassed = timeNow - this.timePrevious;

    if (timePassed < this.timeInterval) return;

    this.timePrevious = timeNow - (timePassed % this.timeInterval);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.pixels.length; i++) {
      this.pixels[i][fnName]();
    }

    if (this.pixels.every((pixel) => pixel.isIdle)) {
      cancelAnimationFrame(this.animation);
    }
  }
}

PixelCanvas.register();
