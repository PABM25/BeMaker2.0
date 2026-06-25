export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (!terminalOutput) return;

  const steps = [
    {
      text: "> Initializing secure deployment process...",
      delay: 500,
      class: "terminal-info",
    },
    { text: "> Authenticating...", delay: 1000, class: "terminal-info" },
    {
      text: "[OK] Authentication successful.",
      delay: 1500,
      class: "terminal-success",
    },
    {
      text: "> Fetching latest commits from branch 'main'...",
      delay: 2000,
      class: "terminal-info",
    },
    {
      text: "> Building application bundle...",
      delay: 2500,
      class: "terminal-info",
    },
    {
      text: "[OK] Build completed in 2.4s.",
      delay: 3200,
      class: "terminal-success",
    },
    {
      text: "> Starting massive deployment sequence...",
      delay: 3800,
      class: "terminal-highlight",
    },
  ];

  let currentDelay = 0;

  // Add initial steps
  steps.forEach((step) => {
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = `terminal-line ${step.class}`;
      line.textContent = step.text;
      terminalOutput.appendChild(line);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, step.delay);
  });

  currentDelay = 4000;

  // Simulate deployment of 150 projects rapidly
  let projectCounter = document.createElement("div");
  projectCounter.className = "terminal-line terminal-info";
  setTimeout(() => {
    terminalOutput.appendChild(projectCounter);

    let count = 0;
    const interval = setInterval(() => {
      count += 5;
      projectCounter.textContent = `> Deploying project cluster [${count}/150]...`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      if (count >= 150) {
        clearInterval(interval);
      }
    }, 50); // 30 intervals * 50ms = 1.5s total
  }, currentDelay);

  currentDelay += 2000;

  // Final steps
  const finalSteps = [
    {
      text: "----------------------------------------",
      delay: currentDelay,
      class: "terminal-info",
    },
    {
      text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
      delay: currentDelay + 500,
      class: "terminal-success",
    },
    {
      text: "----------------------------------------",
      delay: currentDelay + 800,
      class: "terminal-info",
    },
    {
      text: "> System ready. Awaiting new ideas...",
      delay: currentDelay + 1500,
      class: "terminal-highlight",
    },
  ];

  finalSteps.forEach((step) => {
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = `terminal-line ${step.class}`;
      line.textContent = step.text;
      terminalOutput.appendChild(line);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, step.delay);
  });
}
