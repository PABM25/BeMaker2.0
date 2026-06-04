export function initHeroAnimations() {
  const textPart1 = "Transformamos ideas en ";
  const textPart2 = "código.";
  const typingElement = document.getElementById("typing-hero-title");
  const codeElement = document.getElementById("hero-code-word");

  if (typingElement && codeElement) {
    let i = 0;
    let j = 0;

    function typePart1() {
      if (i < textPart1.length) {
        typingElement.innerHTML += textPart1.charAt(i);
        i++;
        setTimeout(typePart1, 60);
      } else {
        setTimeout(typePart2, 100);
      }
    }

    function typePart2() {
      if (j < textPart2.length) {
        codeElement.innerHTML += textPart2.charAt(j);
        if (Math.random() > 0.7) {
          codeElement.classList.add("glitch");
          setTimeout(() => codeElement.classList.remove("glitch"), 150);
        }
        j++;
        setTimeout(typePart2, 80);
      } else {
        codeElement.classList.add("highlight-code");
        setInterval(() => {
          if (Math.random() > 0.9) {
            codeElement.classList.add("glitch");
            setTimeout(() => codeElement.classList.remove("glitch"), 200);
          }
        }, 1000);
      }
    }

    setTimeout(typePart1, 500);
  }
}
