export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    let deploymentSteps = [
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
    ];

    let currentDelay = 5000;
    for (let i = 1; i <= 15; i++) {
      currentDelay += 50;
      deploymentSteps.push({
        text: `> Deploying project module_${i}... [OK]`,
        delay: currentDelay,
        class: "terminal-success",
      });
    }

    currentDelay += 300;
    deploymentSteps.push(
      {
        text: "----------------------------------------",
        delay: currentDelay,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: currentDelay + 500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: currentDelay + 800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: currentDelay + 1500,
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
