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
    const chars = "!<>-_\\\\/[]{}—=+*^?#________";
    
    if (typingElement) {
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                // Hacker scramble effect for the current character
                let scrambleCount = 0;
                const maxScrambles = 3; // Number of random chars to show before the real one

                function typeScrambleChar() {
                    if (scrambleCount < maxScrambles) {
                        const randomChar = chars[Math.floor(Math.random() * chars.length)];
                        typingElement.innerHTML = textToType.substring(0, i) + `<span class="scramble">${randomChar}</span>`;
                        scrambleCount++;
                        setTimeout(typeScrambleChar, 30);
                    } else {
                        typingElement.innerHTML = textToType.substring(0, i + 1);
                        if (Math.random() > 0.8) {
                            typingElement.classList.add('glitch');
                            setTimeout(() => typingElement.classList.remove('glitch'), 150);
                        }
                        i++;
                        setTimeout(typeWriter, 80);
                    }
                }
                typeScrambleChar();
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
        const deployModules = [
            'core-routing', 'auth-service', 'payment-gateway', 'ai-chatbot-ui',
            'dashboard-analytics', 'user-onboarding', 'email-notifications',
            'database-migration', 'cdn-assets', 'api-rate-limiter', 'seo-meta-tags'
        ];

        let deploymentCount = 0;
        let isDeploying = true;

        function appendTerminalLine(text, className) {
            const line = document.createElement('div');
            line.className = `terminal-line ${className}`;
            line.textContent = text;
            terminalOutput.appendChild(line);
            if (terminalOutput.childElementCount > 15) {
                terminalOutput.removeChild(terminalOutput.firstChild);
            }
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        function runDeploymentSequence() {
            if (!isDeploying) return;

            if (deploymentCount === 0) {
                terminalOutput.innerHTML = '';
                appendTerminalLine('> Initializing multi-node deployment...', 'terminal-info');
            }

            if (deploymentCount < 150) {
                const module = deployModules[Math.floor(Math.random() * deployModules.length)];
                const ms = (Math.random() * 20 + 10).toFixed(2);
                appendTerminalLine(`[OK] Deployed ${module} to production (${ms}ms)`, 'terminal-success');
                deploymentCount++;

                // Fast typing effect
                setTimeout(runDeploymentSequence, Math.random() * 50 + 20);
            } else {
                appendTerminalLine("----------------------------------------", "terminal-info");
                appendTerminalLine("🚀 SUCCESS: 150+ proyectos desplegados con éxito.", "terminal-highlight");
                appendTerminalLine("----------------------------------------", "terminal-info");
                appendTerminalLine("> System ready. Awaiting next command...", "terminal-info");

                isDeploying = false;

                // Restart sequence after a delay
                setTimeout(() => {
                    deploymentCount = 0;
                    isDeploying = true;
                    runDeploymentSequence();
                }, 6000);
            }
        }

        // Start sequence after short initial delay
        setTimeout(runDeploymentSequence, 1000);
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



// ==================================================
    // LÓGICA DEL CHATBOT
    // ==================================================
    const chatbotToggler = document.getElementById('chatbot-toggler');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatBody = document.getElementById('chat-body');

    if (chatbotToggler && chatbotContainer) {
        // Abrir/Cerrar chat
        chatbotToggler.addEventListener('click', () => {
            chatbotContainer.classList.toggle('open');
        });

        // Función para agregar mensajes al DOM
        const appendMessage = (text, sender) => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', `${sender}-message`);
            msgDiv.textContent = text;
            chatBody.appendChild(msgDiv);
            chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll hacia abajo
        };

        // Función para procesar el envío
        const handleChatSend = () => {
            const text = chatInput.value.trim();
            if (!text) return;
            
            // 1. Imprimir mensaje del usuario
            appendMessage(text, 'user');
            chatInput.value = '';

            // 2. Simular que el bot "está pensando" y responde (Retraso de 1 segundo)
            setTimeout(() => {
                const lowerText = text.toLowerCase();
                let botReply = "¡Gracias por tu mensaje! Déjame tu correo o escríbenos desde la sección de Contacto y te responderemos enseguida.";

                // Respuestas automatizadas según palabras clave
                if(lowerText.includes('precio') || lowerText.includes('cuanto') || lowerText.includes('planes')) {
                    botReply = "Contamos con planes desde $120.000 CLP diseñados especialmente para PYMES. Puedes revisar la sección de 'Planes PYME' para ver qué incluye cada uno.";
                } else if (lowerText.includes('contacto') || lowerText.includes('hablar') || lowerText.includes('cotizar')) {
                    botReply = "¡Perfecto! Puedes ir al formulario de Contacto en el menú superior o escribirnos directo a bemaker.dev@gmail.com";
                } else if (lowerText.includes('hola') || lowerText.includes('buenos dias')) {
                    botReply = "¡Hola! ¿Buscas digitalizar tu negocio o necesitas una página web?";
                }

                appendMessage(botReply, 'bot');
            }, 1000); // 1000 milisegundos = 1 segundo de retraso
        };

        // Eventos para enviar (Click en botón o Enter en teclado)
        chatSendBtn.addEventListener('click', handleChatSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleChatSend();
            }
        });
    }