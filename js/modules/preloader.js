export function initPreloader() {
  const typingCodeElement = document.getElementById("typing-code");
  const livePreviewContainer = document.getElementById(
    "live-preview-container",
  );
  const preloader = document.getElementById("preloader");

  if (typingCodeElement && livePreviewContainer && preloader) {
    const codeLines = [
      { text: '<div class="card">', class: "code-tag" },
      { text: "\n  <h3>Tu Negocio</h3>", class: "code-element" },
      { text: "\n  <p>Digitalizado</p>", class: "code-text" },
      { text: "\n  <button>Empezar</button>", class: "code-element" },
      { text: "\n</div>", class: "code-tag" },
    ];

    const finalHTML = `
            <div class="preview-result-card" style="transform: scale(0);">
                <h3>Tu Negocio</h3>
                <p>Digitalizado</p>
                <button>Empezar</button>
            </div>
        `;

    let currentLine = 0;
    let currentChar = 0;

    function typeMagicCode() {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        if (currentChar < line.text.length) {
          let charToType = line.text.charAt(currentChar);
          if (charToType === "<") charToType = "&lt;";
          else if (charToType === ">") charToType = "&gt;";

          typingCodeElement.innerHTML += `<span class="${line.class}">${charToType}</span>`;
          currentChar++;

          setTimeout(typeMagicCode, Math.random() * 25 + 10);
        } else {
          currentLine++;
          currentChar = 0;
          setTimeout(typeMagicCode, 150);
        }
      } else {
        setTimeout(() => {
          livePreviewContainer.innerHTML = finalHTML;
          setTimeout(() => {
            const card = livePreviewContainer.querySelector(
              ".preview-result-card",
            );
            if (card) card.style.transform = "scale(1)";
          }, 50);
          setTimeout(() => {
            preloader.classList.add("hidden");
            document.body.classList.remove("no-scroll");
          }, 1200);
        }, 300);
      }
    }
    setTimeout(typeMagicCode, 500);
  }
}
