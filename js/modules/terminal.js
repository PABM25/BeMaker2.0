export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const projectNames = [
      "ecommerce-v2",
      "crm-dashboard",
      "landing-lawyer",
      "clinic-app",
      "portfolio-site",
      "inventory-sys",
    ];
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
        text: "> Deploying recent projects to cloud nodes...",
        delay: 3200,
        class: "terminal-info",
      },
    ];

    // Dynamically generate simulated project deployment logs
    let currentDelay = 3500;
    for (let i = 0; i < 5; i++) {
      const randProject =
        projectNames[Math.floor(Math.random() * projectNames.length)];
      const randId = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");
      deploymentSteps.push({
        text: `[OK] Node ${randId} deployed: ${randProject}...`,
        delay: currentDelay,
        class: "terminal-success",
      });
      currentDelay += 300 + Math.random() * 200;
    }

    deploymentSteps.push(
      {
        text: "----------------------------------------",
        delay: currentDelay + 500,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: currentDelay + 1200,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: currentDelay + 1500,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: currentDelay + 2200,
        class: "terminal-info",
      },
    );

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
