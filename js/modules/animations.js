export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        let currentText = textToType.substring(0, i + 1);
        if (currentText.includes("código.")) {
          currentText = currentText.replace(
            "código.",
            '<span style="color: var(--red-accent);">código.</span>',
          );
        }
        typingElement.innerHTML = currentText;

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
