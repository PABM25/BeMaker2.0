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
        text: "🚀 DEPLOYING PROJECTS...",
        delay: 6200,
        class: "terminal-info",
        id: "deploy-counter",
      },
      {
        text: "----------------------------------------",
        delay: 8500,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 9000,
        class: "terminal-info",
      },
    ];

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        line.textContent = step.text;
        if (step.id) {
          line.id = step.id;

          // Animate counter
          let count = 0;
          const target = 150;
          const duration = 2000;
          const interval = duration / target;

          const counterInterval = setInterval(() => {
            count++;
            line.innerHTML = `🚀 SUCCESS: <span style="color: var(--red-accent); font-weight: bold;">${count}+</span> proyectos desplegados con éxito.`;
            if (count >= target) {
              clearInterval(counterInterval);
              line.className = "terminal-line terminal-highlight";
            }
          }, interval);
        }
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }, step.delay);
    });
  }
}
