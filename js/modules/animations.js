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

        let typingSpeed = 80;
        if (Math.random() > 0.7) {
          typingSpeed = 30; // fast burst
        } else if (Math.random() > 0.9) {
          typingSpeed = 150; // brief pause
        }

        setTimeout(typeWriter, typingSpeed);
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
