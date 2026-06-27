export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        typingElement.setAttribute("data-text", typingElement.textContent);
        if (Math.random() > 0.6) { // Increased glitch probability
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 200);
        }
        i++;
        setTimeout(typeWriter, 50); // Faster typing speed
      } else {
        setInterval(() => {
          if (Math.random() > 0.7) { // Increased frequency of glitch after typing
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 300);
          }
        }, 1500);
      }
    }
    setTimeout(typeWriter, 300);
  }
}
