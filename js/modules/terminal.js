export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 200,
        class: "terminal-info",
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 600,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 1000,
        class: "terminal-info",
      },
      {
        text: "[████      ] 40%",
        delay: 1300,
        class: "terminal-info",
      },
      {
        text: "[████████  ] 80%",
        delay: 1600,
        class: "terminal-info",
      },
      {
        text: "[██████████] 100%",
        delay: 1900,
        class: "terminal-success",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 2100,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 2500,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 3000,
        class: "terminal-success",
      },
      {
        text: "> Deploying project 150/150...",
        delay: 3500,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 4000,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 4500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 4800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 5500,
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
