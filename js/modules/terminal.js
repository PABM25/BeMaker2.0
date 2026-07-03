export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "[10:42:01] > Initializing deployment process...",
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "[10:42:02] > Fetching latest commits from branch 'main'...",
        delay: 800,
        class: "terminal-info",
      },
      {
        text: "[10:42:03] > Resolving dependencies... [===>       ]",
        delay: 1200,
        class: "terminal-info",
      },
      {
        text: "[10:42:03] [OK] Dependencies resolved. [==========]",
        delay: 1500,
        class: "terminal-success",
      },
      {
        text: "[10:42:04] > Building application bundle... [=====>    ]",
        delay: 2000,
        class: "terminal-info",
      },
      {
        text: "[10:42:05] [OK] Build completed in 2.4s.    [==========]",
        delay: 2800,
        class: "terminal-success",
      },
      {
        text: "[10:42:06] > Running test suite (142 tests)...",
        delay: 3200,
        class: "terminal-info",
      },
      {
        text: "[10:42:08] [OK] All tests passed.",
        delay: 4500,
        class: "terminal-success",
      },
      {
        text: "[10:42:09] > Deploying to production server... [========> ]",
        delay: 5000,
        class: "terminal-info",
      },
      {
        text: "--------------------------------------------------",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "[10:42:11] 🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 6500,
        class: "terminal-highlight",
      },
      {
        text: "--------------------------------------------------",
        delay: 6800,
        class: "terminal-info",
      },
      {
        text: "[10:42:12] > System ready. Waiting for input...",
        delay: 7500,
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
