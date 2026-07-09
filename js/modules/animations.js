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
          setTimeout(() => typingElement.classList.remove("glitch"), 200);
        }
        i++;
        // Hacer el tipado más dinámico (algunas letras más rápidas que otras)
        const delay = Math.random() > 0.5 ? 40 : 100;
        setTimeout(typeWriter, delay);
      } else {
        setInterval(() => {
          if (Math.random() > 0.9) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 300);
          }
        }, 2000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
