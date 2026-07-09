export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 1000,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 1600,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 2000,
        class: "terminal-success",
      },
      {
        text: "> Compiling UI components...",
        delay: 2400,
        class: "terminal-info",
      },
      {
        text: "> Building application bundle...",
        delay: 3000,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 3600,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 4200,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 5000,
        class: "terminal-success",
      },
      {
        text: "> Deploying 150+ successful projects in real-time...",
        delay: 5600,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 6400,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 7200,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 7800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 8600,
        class: "terminal-info",
      },
    ];

    let globalDelay = 0;

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        terminalOutput.appendChild(line);

        let charIndex = 0;
        function typeChar() {
          if (charIndex < step.text.length) {
            line.textContent += step.text.charAt(charIndex);
            charIndex++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            setTimeout(typeChar, 15);
          }
        }
        typeChar();
      }, step.delay);
    });
  }
}
