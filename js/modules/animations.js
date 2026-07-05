export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    let currentText = "";
    function typeWriter() {
      if (i < textToType.length) {
        currentText += textToType.charAt(i);
        typingElement.innerHTML = currentText;
        typingElement.setAttribute("data-text", currentText);

        if (Math.random() > 0.6) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 200);
        }
        i++;
        setTimeout(typeWriter, 80);
      } else {
        typingElement.setAttribute("data-text", currentText);
        setInterval(() => {
          if (Math.random() > 0.7) {
            typingElement.classList.add("glitch");
            setTimeout(() => typingElement.classList.remove("glitch"), 300);
          }
        }, 1000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
