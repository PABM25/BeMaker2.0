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
    ];

    let currentDelay = 5800;

    // Simulate real-time deployment of 150 projects
    for (let i = 1; i <= 150; i += Math.floor(Math.random() * 15) + 5) {
      const deployNum = Math.min(i, 150);
      deploymentSteps.push({
        text: `> Deploying project ${deployNum}/150... [${"#".repeat(Math.floor(deployNum / 15))}${".".repeat(10 - Math.floor(deployNum / 15))}]`,
        delay: currentDelay,
        class: "terminal-info",
      });
      currentDelay += Math.floor(Math.random() * 100) + 50;
    }

    deploymentSteps.push(
      {
        text: "[OK] All 150 projects deployed successfully.",
        delay: currentDelay + 200,
        class: "terminal-success",
      },
      {
        text: "----------------------------------------",
        delay: currentDelay + 500,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: currentDelay + 1000,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: currentDelay + 1300,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: currentDelay + 1800,
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
