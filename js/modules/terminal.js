export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    terminalOutput.innerHTML = "";
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 500,
        class: "terminal-info",
        typingSpeed: 30,
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 1500,
        class: "terminal-info",
        typingSpeed: 20,
      },
      {
        text: "> Resolving dependencies...",
        delay: 2500,
        class: "terminal-info",
        typingSpeed: 30,
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 3500,
        class: "terminal-success",
        typingSpeed: 10,
      },
      {
        text: "> Building application bundle...",
        delay: 4000,
        class: "terminal-info",
        typingSpeed: 20,
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 5000,
        class: "terminal-success",
        typingSpeed: 10,
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 5500,
        class: "terminal-info",
        typingSpeed: 20,
      },
      {
        text: "[OK] All tests passed.",
        delay: 7000,
        class: "terminal-success",
        typingSpeed: 10,
      },
      {
        text: "> Deploying to production server...",
        delay: 7500,
        class: "terminal-info",
        typingSpeed: 30,
      },
      {
        text: "----------------------------------------",
        delay: 9000,
        class: "terminal-info",
        typingSpeed: 5,
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 9500,
        class: "terminal-highlight",
        typingSpeed: 20,
      },
      {
        text: "----------------------------------------",
        delay: 11000,
        class: "terminal-info",
        typingSpeed: 5,
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 11500,
        class: "terminal-info",
        typingSpeed: 30,
      },
    ];

    let currentCursor = null;

    deploymentSteps.forEach((step, index) => {
      setTimeout(() => {
        if (currentCursor) {
          currentCursor.remove();
        }

        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        // Prevent fading animation since we are doing typing effect
        line.style.opacity = 1;
        line.style.animation = "none";
        terminalOutput.appendChild(line);

        currentCursor = document.createElement("span");
        currentCursor.className = "terminal-cursor";
        line.appendChild(currentCursor);

        let i = 0;
        const typeWriter = () => {
          if (i < step.text.length) {
            currentCursor.remove();
            line.textContent += step.text.charAt(i);
            line.appendChild(currentCursor);
            i++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            setTimeout(typeWriter, step.typingSpeed || 20);
          } else {
            // Keep cursor at the end of the last line
            if (index !== deploymentSteps.length - 1) {
              // Not the last line, we will remove cursor when next line starts
            } else {
              // Last line finished, keep blinking
            }
          }
        };
        // we need to set text content to empty first, but keep cursor
        line.textContent = "";
        line.appendChild(currentCursor);
        typeWriter();
      }, step.delay);
    });
  }
}
