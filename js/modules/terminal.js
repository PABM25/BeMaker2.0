export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Starting BeMaker deploy engine v2.0...",
        delay: 300,
        class: "terminal-info",
      },
      {
        text: "> [==================  ] 90% Compiling assets...",
        delay: 800,
        class: "terminal-info",
      },
      {
        text: "> [====================] 100% Build complete.",
        delay: 1200,
        class: "terminal-success",
      },
      {
        text: "> Securing endpoints and connecting to CDN...",
        delay: 1600,
        class: "terminal-info",
      },
      {
        text: "[OK] SSL certificates provisioned.",
        delay: 1900,
        class: "terminal-success",
      },
      {
        text: "> Running advanced optimizations...",
        delay: 2200,
        class: "terminal-info",
      },
      {
        text: "  - Minifying JS... Done.",
        delay: 2400,
        class: "terminal-info",
      },
      {
        text: "  - Compressing Images... Done.",
        delay: 2600,
        class: "terminal-info",
      },
      {
        text: "> Launching to production...",
        delay: 3100,
        class: "terminal-info",
      },
      {
        text: "--------------------------------------------------",
        delay: 3600,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos transformados y en línea.",
        delay: 4200,
        class: "terminal-highlight",
      },
      {
        text: "--------------------------------------------------",
        delay: 4500,
        class: "terminal-info",
      },
      {
        text: "> Ready for the next big idea. _",
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
  }
}
