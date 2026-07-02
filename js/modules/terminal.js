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
        text: "[####################] 100%",
        delay: 1800,
        class: "terminal-success",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 2000,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 2500,
        class: "terminal-info",
      },
      {
        text: "[####################] 100%",
        delay: 3200,
        class: "terminal-success",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 3400,
        class: "terminal-success",
      },
      {
        text: "> Deploying to global edge network...",
        delay: 3800,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 4500,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados en tiempo real.",
        delay: 5000,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 5300,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 6000,
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
