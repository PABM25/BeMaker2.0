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
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 900,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 1100,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 1500,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 1900,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 2200,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 2800,
        class: "terminal-success",
      },
      {
        text: "> Connecting to live servers...",
        delay: 3100,
        class: "terminal-info",
      },
    ];

    const projectNames = [
      "bemaker-app",
      "clinica-nova",
      "finanzas-dash",
      "ecommerce-v2",
      "crm-system",
    ];
    let delayCounter = 3500;

    for (let i = 1; i <= 5; i++) {
      const proj = projectNames[i - 1];
      deploymentSteps.push({
        text: `Deploying [${proj}] ... ${Math.floor(Math.random() * 20 + 80)}%`,
        delay: delayCounter,
        class: "terminal-info",
      });
      delayCounter += 200;
      deploymentSteps.push({
        text: `[OK] ${proj} deployed.`,
        delay: delayCounter,
        class: "terminal-success",
      });
      delayCounter += 300;
    }

    deploymentSteps.push(
      {
        text: "----------------------------------------",
        delay: delayCounter + 200,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: delayCounter + 600,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: delayCounter + 800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: delayCounter + 1200,
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
