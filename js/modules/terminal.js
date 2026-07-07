export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 300,
        class: "terminal-info",
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 700,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 900,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 1200,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 1500,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 1800,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 2200,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 2600,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 3000,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 3400,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 3600,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 4000,
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
