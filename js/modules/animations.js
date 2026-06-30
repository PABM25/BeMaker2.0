export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    let typedStr = "";
    function typeWriter() {
      if (i < textToType.length) {
        typedStr += textToType.charAt(i);
        typingElement.innerHTML = typedStr;
        if (Math.random() > 0.8) {
          typingElement.classList.add("glitch");
          setTimeout(() => typingElement.classList.remove("glitch"), 150);
        }
        i++;
        setTimeout(typeWriter, 80);
      } else {
        // Highlight the word "código"
        typingElement.innerHTML = typedStr.replace(
          "código",
          "<span class='highlight-code'>código</span>",
        );

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
