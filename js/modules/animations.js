export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        if (Math.random() > 0.7) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 100);
        }
        i++;
        setTimeout(typeWriter, 50); // Faster typing
      } else {
        setInterval(() => {
          if (Math.random() > 0.9) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 200);
          }
        }, 2000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
