export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> root@bemaker:~# ./deploy.sh --target=production",
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "> Initializing high-impact deployment process...",
        delay: 800,
        class: "terminal-info",
      },
      {
        text: "> Resolving Web, AI & Cybersecurity dependencies...",
        delay: 1200,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved. 100% optimized.",
        delay: 1500,
        class: "terminal-success",
      },
      {
        text: "> Compiling Dark Mode aesthetics...",
        delay: 2000,
        class: "terminal-info",
      },
      {
        text: "[OK] UI/UX patterns injected successfully.",
        delay: 2800,
        class: "terminal-success",
      },
      {
        text: "> Connecting to global infrastructure (142 nodes)...",
        delay: 3200,
        class: "terminal-info",
      },
      {
        text: "[OK] Secure connection established.",
        delay: 4500,
        class: "terminal-success",
      },
      {
        text: "> Launching innovation protocol...",
        delay: 5000,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos de innovación desplegados con éxito en tiempo real.",
        delay: 6500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 6800,
        class: "terminal-info",
      },
      {
        text: "> System operational. Awaiting new ideas...",
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
