export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const highlightWord = "código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    let currentText = "";
    function typeWriter() {
      if (i < textToType.length) {
        currentText += textToType.charAt(i);

        // Check if we are typing the highlight word to wrap it
        if (currentText.includes("código")) {
          const splitIndex = currentText.indexOf("código");
          const before = currentText.substring(0, splitIndex);
          const highlight = currentText.substring(splitIndex);
          typingElement.innerHTML =
            before + `<span class="highlight-text">${highlight}</span>`;
        } else {
          typingElement.innerHTML = currentText;
        }

        if (Math.random() > 0.8) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 150);
        }
        i++;
        setTimeout(typeWriter, 80);
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
