export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 300,
        class: "terminal-info",
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 600,
        class: "terminal-info",
      },
      {
        text: "> Analyzing project structure...",
        delay: 900,
        class: "terminal-info",
      },
      {
        text: "> Resolving 1245 dependencies...",
        delay: 1300,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved (0.4s).",
        delay: 1500,
        class: "terminal-success",
      },
      {
        text: "> Compiling assets: [||||||||||||||||||||] 100%",
        delay: 1900,
        class: "terminal-info",
      },
      {
        text: "> Building application bundle...",
        delay: 2200,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 1.2s.",
        delay: 2500,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 2800,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 3200,
        class: "terminal-success",
      },
      {
        text: "> Compressing artifacts...",
        delay: 3500,
        class: "terminal-info",
      },
      {
        text: "> Uploading to production edge servers...",
        delay: 3900,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 4400,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 4900,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 5100,
        class: "terminal-info",
      },
      {
        text: "> BeMaker Systems Online.",
        delay: 5500,
        class: "terminal-info",
      },
      {
        text: "> Waiting for input...",
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
  }
}
