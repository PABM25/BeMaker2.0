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

    const projectNames = [
      "crm-dashboard-v2",
      "ecommerce-backend",
      "analytics-engine",
      "auth-service",
      "mobile-api-gateway",
      "billing-system",
      "inventory-sync",
      "user-portal",
    ];

    let rapidDeployActive = false;

    deploymentSteps.forEach((step) => {
      if (
        step.text === "----------------------------------------" &&
        step.delay === 5800
      ) {
        setTimeout(() => {
          rapidDeployActive = true;
          let count = 1;
          const deployInterval = setInterval(() => {
            if (count > 150) {
              clearInterval(deployInterval);
              rapidDeployActive = false;
            } else {
              const proj =
                projectNames[Math.floor(Math.random() * projectNames.length)];
              const line = document.createElement("div");
              line.className = `terminal-line terminal-info`;
              line.textContent = `> Deploying project #${count}: ${proj}... [OK]`;
              terminalOutput.appendChild(line);
              terminalOutput.scrollTop = terminalOutput.scrollHeight;
              count += Math.floor(Math.random() * 5) + 1; // Increment by 1-5 to speed up visually
            }
          }, 30);
        }, 5100);
      }

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
