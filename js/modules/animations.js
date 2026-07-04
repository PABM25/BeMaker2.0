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
          setTimeout(() => typingElement.classList.remove("glitch"), 150);
        }
        i++;
        setTimeout(typeWriter, 50 + Math.random() * 50);
      } else {
        setInterval(() => {
          if (Math.random() > 0.92) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 300);
          }
        }, 2000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
