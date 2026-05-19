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


// Animación Bento Cards con Anime.js
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