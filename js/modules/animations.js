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
        const speed = Math.random() * 100 + 50; // Random speed between 50 and 150ms
        setTimeout(typeWriter, speed);
      } else {
        setInterval(() => {
          if (Math.random() > 0.95) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 200);
          }
        }, 1000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
