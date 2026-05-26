export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        if (Math.random() > 0.85) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 100);
        }
        i++;
        setTimeout(typeWriter, 60); // Más rápido
      } else {
        setInterval(() => {
          if (Math.random() > 0.90) { // Glitch más frecuente después de terminar
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 150);
          }
        }, 800);
      }
    }
    setTimeout(typeWriter, 400); // Empieza más rápido
  }
}
