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
        id: "project-counter",
        text: "🚀 SUCCESS: 0+ proyectos desplegados con éxito.",
        delay: 6500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 8500, // delayed to wait for counter
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 9200,
        class: "terminal-info",
      },
    ];

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        line.textContent = step.text;
        if (step.id) line.id = step.id;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        if (step.id === "project-counter") {
          let count = 0;
          const target = 150;
          const duration = 1500; // 1.5 seconds to count
          const interval = duration / target;

          const counterInterval = setInterval(() => {
            count++;
            line.textContent = `🚀 SUCCESS: ${count}+ proyectos desplegados con éxito.`;
            if (count >= target) {
              clearInterval(counterInterval);
            }
          }, interval);
        }
      }, step.delay);
    });
  }
}
