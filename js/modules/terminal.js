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
        delay: 1000,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 1500,
        class: "terminal-info",
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
        text: "[OK] Build completed in 2.4s.",
        delay: 3500,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 4000,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 5000,
        class: "terminal-success",
      },
      {
        text: "> Preparing production deployment for BeMaker...",
        delay: 5500,
        class: "terminal-info",
      },
      {
        text: "> Syncing assets across global CDN nodes...",
        delay: 6500,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 7500,
        class: "terminal-info",
      },
      {
        text: "🚀 REAL-TIME SUCCESS: Deploying 150+ projects...",
        delay: 8200,
        class: "terminal-highlight",
      },
      {
        text: "[OK] All systems operational.",
        delay: 9000,
        class: "terminal-success",
      },
      {
        text: "----------------------------------------",
        delay: 9500,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 10500,
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
