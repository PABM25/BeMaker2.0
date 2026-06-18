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
        delay: 800,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 1200,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 1500,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 2000,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 2800,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 3200,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 4500,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 5000,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 6500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 6800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 7500,
        class: "terminal-info",
      },
    ];

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        terminalOutput.appendChild(line);

        // Character-by-character typing effect
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex < step.text.length) {
            line.textContent += step.text.charAt(charIndex);
            charIndex++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
          } else {
            clearInterval(typeInterval);
          }
        }, 15); // Adjust typing speed here
      }, step.delay);
    });
  }
}
