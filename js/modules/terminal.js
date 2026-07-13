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
        text: "> Resolving dependencies... [████████░░] 80%",
        delay: 1200,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved. 1432 packages audited.",
        delay: 1600,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 2100,
        class: "terminal-info",
      },
      {
        text: "  - Compiling assets... [Done]",
        delay: 2400,
        class: "terminal-info",
      },
      {
        text: "  - Minifying code... [Done]",
        delay: 2700,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 3000,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 3400,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed (142/142).",
        delay: 4200,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 4800,
        class: "terminal-info",
      },
      {
        text: "> Uploading build artifacts [██████████] 100%",
        delay: 5300,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 6300,
        class: "terminal-highlight",
      },
      {
        text: "   Live at: https://bemaker.dev",
        delay: 6600,
        class: "terminal-success",
      },
      {
        text: "----------------------------------------",
        delay: 6900,
        class: "terminal-info",
      },
      {
        text: "> System ready. Listening on port 3000...",
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
