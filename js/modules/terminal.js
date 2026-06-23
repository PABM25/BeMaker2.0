export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing BeMaker Deploy Dashboard...",
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "> Establishing secure connection to production nodes...",
        delay: 800,
        class: "terminal-info",
      },
      {
        text: "[OK] Connection established (Latency: 12ms)",
        delay: 1200,
        class: "terminal-success",
      },
      {
        text: "> Syncing real-time project metrics...",
        delay: 1800,
        class: "terminal-info",
      },
      {
        text: "> Analyzing infrastructure load...",
        delay: 2400,
        class: "terminal-info",
      },
      {
        text: "[OK] Load optimal. Scalability systems active.",
        delay: 3000,
        class: "terminal-success",
      },
      {
        text: "> Verifying active digital deployments...",
        delay: 3500,
        class: "terminal-info",
      },
      {
        text: "  - Fetching web platforms [OK]",
        delay: 4000,
        class: "terminal-info",
      },
      {
        text: "  - Fetching AI modules [OK]",
        delay: 4500,
        class: "terminal-info",
      },
      {
        text: "  - Auditing cybersecurity [OK]",
        delay: 5000,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 5500,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: Desplegando el éxito de los 150+ proyectos en tiempo real.",
        delay: 6200,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 6500,
        class: "terminal-info",
      },
      {
        text: "> System operational. Ready to transform your idea.",
        delay: 7200,
        class: "terminal-success",
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
