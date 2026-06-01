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
        text: "  [+] Module: Web_Core deployed.",
        delay: 5200,
        class: "terminal-success",
      },
      {
        text: "  [+] Module: AI_Agent deployed.",
        delay: 5400,
        class: "terminal-success",
      },
      {
        text: "  [+] Module: Sec_Shield deployed.",
        delay: 5600,
        class: "terminal-success",
      },
      {
        text: "----------------------------------------",
        delay: 6000,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 6800,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 7200,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 7800,
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
