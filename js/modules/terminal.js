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

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        line.textContent = step.text;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }, step.delay);
    });

    // Deploy counter simulation
    setTimeout(() => {
      let count = 1;
      const counterLine = document.createElement("div");
      counterLine.className = `terminal-line terminal-info`;
      terminalOutput.appendChild(counterLine);

      const interval = setInterval(() => {
        counterLine.textContent = `> Deploying project #${count}... [OK]`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        count += 7;

        if (count >= 150) {
          clearInterval(interval);
          counterLine.textContent = `> Deploying project #150... [OK]`;

          setTimeout(() => {
            const finalSteps = [
              {
                text: "----------------------------------------",
                class: "terminal-info",
              },
              {
                text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
                class: "terminal-highlight",
              },
              {
                text: "----------------------------------------",
                class: "terminal-info",
              },
              {
                text: "> System ready. Waiting for input...",
                class: "terminal-info",
              },
            ];

            finalSteps.forEach((step, index) => {
              setTimeout(() => {
                const line = document.createElement("div");
                line.className = `terminal-line ${step.class}`;
                line.textContent = step.text;
                terminalOutput.appendChild(line);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
              }, index * 300);
            });
          }, 300);
        }
      }, 40);
    }, 5500);
  }
}
