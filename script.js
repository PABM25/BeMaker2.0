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
      const useLight = savedTheme === 'light';
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
                if (Math.random() > 0.8) {
                    typingElement.classList.add('glitch');
                    setTimeout(() => typingElement.classList.remove('glitch'), 150);
                }
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setInterval(() => {
                    if (Math.random() > 0.95) {
                        typingElement.classList.add('glitch');
                        setTimeout(() => typingElement.classList.remove('glitch'), 200);
                    }
                }, 1000);
            }
        }
        setTimeout(typeWriter, 500); 
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
                const videoSrc = event.currentTarget.getAttribute('data-video-src');
                if (videoSrc) openModal(videoSrc);
            });
        });
    
        if(closeButton) closeButton.addEventListener('click', closeModal);
    
        videoModal.addEventListener('click', (event) => {
            if (event.target === videoModal) closeModal();
        });
    }

    // 4. Terminal Deployment Animation
    const terminalOutput = document.getElementById('terminal-output');
    if (terminalOutput) {
        const deploymentSteps = [
            { text: "> Initializing deployment process...", delay: 500, class: 'terminal-info' },
            { text: "> Fetching latest commits from branch 'main'...", delay: 800, class: 'terminal-info' },
            { text: "> Resolving dependencies...", delay: 1200, class: 'terminal-info' },
            { text: "[OK] Dependencies resolved.", delay: 1500, class: 'terminal-success' },
            { text: "> Building application bundle...", delay: 2000, class: 'terminal-info' },
            { text: "[OK] Build completed in 2.4s.", delay: 2800, class: 'terminal-success' },
            { text: "> Running test suite (142 tests)...", delay: 3200, class: 'terminal-info' },
            { text: "[OK] All tests passed.", delay: 4500, class: 'terminal-success' },
            { text: "> Deploying to production server...", delay: 5000, class: 'terminal-info' },
            { text: "----------------------------------------", delay: 5800, class: 'terminal-info' },
            { text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.", delay: 6500, class: 'terminal-highlight' },
            { text: "----------------------------------------", delay: 6800, class: 'terminal-info' },
            { text: "> System ready. Waiting for input...", delay: 7500, class: 'terminal-info' }
        ];

        deploymentSteps.forEach(step => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = `terminal-line ${step.class}`;
                line.textContent = step.text;
                terminalOutput.appendChild(line);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, step.delay);
        });
    }

    // 5. NUEVO: ANIMACIÓN DE CÓDIGO A WEB (De la idea a la realidad)
    const typingCodeElement = document.getElementById('typing-code');
    const livePreviewContainer = document.getElementById('live-preview-container');
    const magicWrapper = document.querySelector('.code-magic-wrapper');

    if (typingCodeElement && livePreviewContainer && magicWrapper) {
        
        // El código que se simulará estar escribiendo
        const codeLines = [
            { text: '<div class="card">', class: 'code-tag' },
            { text: '\n  <h3>Tu Negocio</h3>', class: 'code-element' },
            { text: '\n  <p>Digitalizado</p>', class: 'code-text' },
            { text: '\n  <button>Empezar</button>', class: 'code-element' },
            { text: '\n</div>', class: 'code-tag' }
        ];

        // El HTML que aparecerá de golpe al terminar de escribir
        const finalHTML = `
            <div class="preview-result-card" style="transform: scale(0);">
                <h3>Tu Negocio</h3>
                <p>Digitalizado</p>
                <button>Empezar</button>
            </div>
        `;

        let currentLine = 0;
        let currentChar = 0;
        let isTyping = false;

        function typeMagicCode() {
            if (currentLine < codeLines.length) {
                const line = codeLines[currentLine];
                if (currentChar < line.text.length) {
                    
                    // Escapar caracteres para que no se interpreten como HTML en el editor
                    let charToType = line.text.charAt(currentChar);
                    if (charToType === '<') charToType = '&lt;';
                    else if (charToType === '>') charToType = '&gt;';
                    
                    typingCodeElement.innerHTML += `<span class="${line.class}">${charToType}</span>`;
                    currentChar++;
                    
                    // Velocidad de tipeo aleatoria para mayor realismo
                    setTimeout(typeMagicCode, Math.random() * 40 + 20);
                } else {
                    currentLine++;
                    currentChar = 0;
                    setTimeout(typeMagicCode, 300); // Pausa al final de cada línea
                }
            } else {
                // Al terminar de escribir, mostramos la tarjeta renderizada
                setTimeout(() => {
                    livePreviewContainer.innerHTML = finalHTML;
                    
                    // Pequeño timeout para activar la transición de CSS (Pop-in)
                    setTimeout(() => {
                        const card = livePreviewContainer.querySelector('.preview-result-card');
                        if(card) card.style.transform = 'scale(1)';
                    }, 50);
                    
                    // Bucle infinito: Reinicia todo tras 6 segundos
                    setTimeout(() => {
                        typingCodeElement.innerHTML = '';
                        livePreviewContainer.innerHTML = '';
                        currentLine = 0;
                        currentChar = 0;
                        typeMagicCode();
                    }, 6000);
                }, 400);
            }
        }

        // Usamos IntersectionObserver para iniciar la animación solo cuando el usuario baja a esa sección
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !isTyping) {
                isTyping = true;
                setTimeout(typeMagicCode, 500);
            }
        }, { threshold: 0.5 });
        
        observer.observe(magicWrapper);
    }
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
  getRandomValue(min, max) { return Math.random() * (max - min) + min; }
  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }
  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) { this.counter += this.counterStep; return; }
    if (this.size >= this.maxSize) { this.isShimmer = true; }
    if (this.isShimmer) { this.shimmer(); } else { this.size += this.sizeStep; }
    this.draw();
  }
  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) { this.isIdle = true; return; } else { this.size -= 0.1; }
    this.draw();
  }
  shimmer() {
    if (this.size >= this.maxSize) { this.isReverse = true; } else if (this.size <= this.minSize) { this.isReverse = false; }
    if (this.isReverse) { this.size -= this.speed; } else { this.size += this.speed; }
  }
}

class PixelCanvas extends HTMLElement {
  static register(tag = "pixel-canvas") { if ("customElements" in window) { customElements.define(tag, this); } }
  static css = `:host { display: grid; inline-size: 100%; block-size: 100%; overflow: hidden; }`;
  get colors() { return this.dataset.colors?.split(",") || ["#010066", "#ED0807", "#333333"]; }
  get gap() {
    const value = this.dataset.gap || 5;
    const min = 4; const max = 50;
    if (value <= min) { return min; } else if (value >= max) { return max; } else { return parseInt(value); }
  }
  get speed() {
    const value = this.dataset.speed || 35;
    const min = 0; const max = 100; const throttle = 0.001;
    if (value <= min || this.reducedMotion) { return min; } else if (value >= max) { return max * throttle; } else { return parseInt(value) * throttle; }
  }
  get noFocus() { return this.hasAttribute("data-no-focus"); }
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
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.init();
    this.resizeObserver = new ResizeObserver(() => this.init());
    this.resizeObserver.observe(this);
    this._parent.addEventListener("mouseenter", this);
    this._parent.addEventListener("mouseleave", this);
    if (!this.noFocus) { this._parent.addEventListener("focusin", this); this._parent.addEventListener("focusout", this); }
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
    this._parent.removeEventListener("mouseenter", this);
    this._parent.removeEventListener("mouseleave", this);
    if (!this.noFocus) { this._parent.removeEventListener("focusin", this); this._parent.removeEventListener("focusout", this); }
    delete this._parent;
  }
  handleEvent(event) { this[`on${event.type}`](event); }
  onmouseenter() { this.handleAnimation("appear"); }
  onmouseleave() { this.handleAnimation("disappear"); }
  onfocusin(e) { if (e.currentTarget.contains(e.relatedTarget)) return; this.handleAnimation("appear"); }
  onfocusout(e) { if (e.currentTarget.contains(e.relatedTarget)) return; this.handleAnimation("disappear"); }
  handleAnimation(name) { cancelAnimationFrame(this.animation); this.animation = this.animate(name); }
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
    return Math.sqrt(dx * dx + dy * dy);
  }
  createPixels() {
    for (let x = 0; x < this.canvas.width; x += this.gap) {
      for (let y = 0; y < this.canvas.height; y += this.gap) {
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const delay = this.reducedMotion ? 0 : this.getDistanceToCanvasCenter(x, y);
        this.pixels.push(new Pixel(this.canvas, this.ctx, x, y, color, this.speed, delay));
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
    for (let i = 0; i < this.pixels.length; i++) { this.pixels[i][fnName](); }
    if (this.pixels.every((pixel) => pixel.isIdle)) { cancelAnimationFrame(this.animation); }
  }
}
PixelCanvas.register();