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
        delay: 900,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 1300,
        class: "terminal-info",
      },
      {
        text: "[████████████████████] 100%",
        delay: 1600,
        class: "terminal-success",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 1700,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 2100,
        class: "terminal-info",
      },
      {
        text: "[█████████████████   ] 85%",
        delay: 2600,
        class: "terminal-warning",
      },
      {
        text: "[████████████████████] 100%",
        delay: 3000,
        class: "terminal-success",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 3100,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 3500,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 4300,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 4800,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 5300,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 5800,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 6100,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 6800,
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
