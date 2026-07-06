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
        delay: 2500,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 2800,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 3200,
        class: "terminal-success",
      },
      {
        text: "> Deploying microservices:",
        delay: 3500,
        class: "terminal-info",
      },
      {
        text: "    - Deploying service-1... [OK]",
        delay: 3650,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-2... [OK]",
        delay: 3800,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-3... [OK]",
        delay: 3950,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-4... [OK]",
        delay: 4100,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-5... [OK]",
        delay: 4250,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-6... [OK]",
        delay: 4400,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-7... [OK]",
        delay: 4550,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-8... [OK]",
        delay: 4700,
        class: "terminal-success",
      },
      {
        text: "    - Deploying service-9... [OK]",
        delay: 4850,
        class: "terminal-success",
      },
      {
        text: "> Finalizing production rollout...",
        delay: 5200,
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
        line.textContent = step.text;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }, step.delay);
    });
  }
}
