export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        if (Math.random() > 0.8) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 150);
        }
        i++;
        setTimeout(typeWriter, 80);
      } else {
        // Sporadically trigger a more pronounced glitch effect after finishing typing
        setInterval(() => {
          if (Math.random() > 0.85) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 300);
          }
        }, 1500);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
