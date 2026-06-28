export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 250,
        class: "terminal-info",
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 400,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 600,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 750,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 1000,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 1400,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 1600,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 2250,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 2500,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 2900,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 3250,
        class: "terminal-highlight-bold",
      },
      {
        text: "----------------------------------------",
        delay: 3400,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 3750,
        class: "terminal-info",
      },
    ];

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        line.textContent = step.text;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }, step.delay);
    });
  }
}
