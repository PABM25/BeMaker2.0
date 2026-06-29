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
        delay: 800,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 1100,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 1400,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 2000,
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
      { text: "> Optimizing assets...", delay: 3000, class: "terminal-info" },
      {
        text: "[OK] Assets optimized.",
        delay: 3300,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production cluster...",
        delay: 3500,
        class: "terminal-info",
      },
    ];

    // Rapid deployment simulation
    let currentDelay = 3800;
    for (let i = 1; i <= 20; i++) {
      deploymentSteps.push({
        text: `> Deploying module ${i}/20... [OK]`,
        delay: currentDelay,
        class: "terminal-info",
      });
      currentDelay += 80; // Fast progression
    }

    deploymentSteps.push(
      {
        text: "----------------------------------------",
        delay: currentDelay + 200,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: currentDelay + 600,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: currentDelay + 900,
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
