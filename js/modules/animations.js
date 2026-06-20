export function initHeroAnimations() {
  const textToType = "Transformamos ideas en ";
  const emphasisWord = "código.";
  const typingElement = document.getElementById("typing-hero-title");

  if (typingElement) {
    let i = 0;
    let j = 0;
    let isTypingEmphasis = false;

    function typeWriter() {
      if (!isTypingEmphasis && i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      } else if (!isTypingEmphasis && i === textToType.length) {
        isTypingEmphasis = true;
        typingElement.innerHTML += '<span class="hero-emphasis"></span>';
        setTimeout(typeWriter, 80);
      } else if (isTypingEmphasis && j < emphasisWord.length) {
        const emphasisSpan = typingElement.querySelector('.hero-emphasis');
        if (emphasisSpan) {
           emphasisSpan.innerHTML += emphasisWord.charAt(j);
           if (Math.random() > 0.8) {
              emphasisSpan.classList.add("glitch");
              setTimeout(() => emphasisSpan.classList.remove("glitch"), 150);
           }
        }
        j++;
        setTimeout(typeWriter, 80);
      } else {
        setInterval(() => {
          if (Math.random() > 0.95) {
            const emphasisSpan = typingElement.querySelector('.hero-emphasis');
            if(emphasisSpan) {
                emphasisSpan.classList.add("glitch");
                setTimeout(() => emphasisSpan.classList.remove("glitch"), 200);
            }
          }
        }, 1000);
      }
    }
    setTimeout(typeWriter, 500);
  }
}
