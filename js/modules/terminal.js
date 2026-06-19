export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 500,
        class: "terminal-info",
      },
    ];

    for (let i = 1; i <= 50; i++) {
      deploymentSteps.push({
        text: `> Deploying project ${i}...`,
        delay: 500 + i * 50,
        class: "terminal-info",
      });
    }

    deploymentSteps.push({
      text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
      delay: 500 + 51 * 50,
      class: "terminal-highlight",
    });

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
