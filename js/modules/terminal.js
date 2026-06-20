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
        text: "[====================] 100% Dependencies resolved.",
        delay: 1700,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 2000,
        class: "terminal-info",
      },
      {
        text: "[====================] 100% Build completed in 2.4s.",
        delay: 2500,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 2800,
        class: "terminal-info",
      },
      {
        text: "✓ test_auth_service.py",
        delay: 3000,
        class: "terminal-success",
      },
      {
        text: "✓ test_payment_gateway.js",
        delay: 3100,
        class: "terminal-success",
      },
      {
        text: "✓ test_api_endpoints.ts",
        delay: 3200,
        class: "terminal-success",
      },
      {
        text: "[OK] All 142 tests passed.",
        delay: 3500,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 3800,
        class: "terminal-info",
      },
      {
        text: "Uploading assets: [########............] 40%",
        delay: 4100,
        class: "terminal-info",
      },
      {
        text: "Uploading assets: [################....] 80%",
        delay: 4400,
        class: "terminal-info",
      },
      {
        text: "Uploading assets: [####################] 100%",
        delay: 4700,
        class: "terminal-success",
      },
      {
        text: "----------------------------------------",
        delay: 5100,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 5500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 6500,
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
