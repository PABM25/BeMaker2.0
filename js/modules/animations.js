export function initHeroAnimations() {
  const textToType = "Transformamos ideas en código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        typingElement.setAttribute("data-text", typingElement.innerHTML);
        if (Math.random() > 0.8) {
          typingElement.classList.add("glitch");
          setTimeout(() => {
            typingElement.classList.remove("glitch");
          }, 150);
        }
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setInterval(() => {
          if (Math.random() > 0.95) {
            typingElement.classList.add("glitch");
            setTimeout(() => {
              typingElement.classList.remove("glitch");
            }, 200);
          }
        }, 1000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
