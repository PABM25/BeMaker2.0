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
        text: "> Starting counter...",
        delay: 6000,
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

    // Dynamic Counter Simulation
    setTimeout(() => {
      const counterLine = document.createElement("div");
      counterLine.className = "terminal-line terminal-highlight";
      terminalOutput.appendChild(counterLine);

      let count = 0;
      const target = 150;
      const duration = 1500; // ms
      const intervalTime = duration / target;

      const counterInterval = setInterval(() => {
        count++;
        counterLine.textContent = `Deploying project ${count}...`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        if (count >= target) {
          clearInterval(counterInterval);
          setTimeout(() => {
            counterLine.textContent =
              "🚀 SUCCESS: 150+ proyectos desplegados con éxito.";

            setTimeout(() => {
              const separator = document.createElement("div");
              separator.className = "terminal-line terminal-info";
              separator.textContent =
                "----------------------------------------";
              terminalOutput.appendChild(separator);

              const readyMsg = document.createElement("div");
              readyMsg.className = "terminal-line terminal-info";
              readyMsg.textContent = "> System ready. Waiting for input...";
              terminalOutput.appendChild(readyMsg);
              terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, 500);
          }, 300);
        }
      }, intervalTime);
    }, 6200);
  }
}
