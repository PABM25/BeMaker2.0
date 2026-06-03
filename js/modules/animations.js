export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);

        // Increase glitch probability for stronger effect
        if (Math.random() > 0.7) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 250);
        }
        i++;
        // Slightly variable typing speed for realism
        setTimeout(typeWriter, Math.random() * 50 + 50);
      } else {
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
