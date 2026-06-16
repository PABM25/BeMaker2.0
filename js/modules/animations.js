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
        setTimeout(typeWriter, 40 + Math.random() * 60); // Randomize typing speed for realism
      } else {
        setInterval(() => {
          if (Math.random() > 0.90) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 150 + Math.random() * 150);
          }
        }, 1500);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
