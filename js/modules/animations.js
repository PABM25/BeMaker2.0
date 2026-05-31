export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        if (Math.random() > 0.6) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 250);
        }
        i++;
        setTimeout(typeWriter, 80);
      } else {
        setInterval(() => {
          if (Math.random() > 0.85) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 300);
          }
        }, 1000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
