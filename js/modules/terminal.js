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
        text: "> Starting deployment phase...",
        delay: 3200,
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

    // Dynamic progress bar and counter
    setTimeout(() => {
      const progressContainer = document.createElement("div");
      progressContainer.className = "terminal-line terminal-info";
      terminalOutput.appendChild(progressContainer);

      let currentProject = 0;
      const totalProjects = 150;
      const progressBarLength = 30;

      const progressInterval = setInterval(() => {
        currentProject += Math.floor(Math.random() * 5) + 1;
        if (currentProject > totalProjects) currentProject = totalProjects;

        const progressPercent = currentProject / totalProjects;
        const filledChars = Math.floor(progressPercent * progressBarLength);
        const emptyChars = progressBarLength - filledChars;

        const progressBar = `[${"=".repeat(filledChars)}${">"}${" ".repeat(Math.max(0, emptyChars - 1))}]`;

        progressContainer.innerHTML = `> Deploying projects: ${progressBar} <span class="terminal-highlight">${currentProject}+</span> / ${totalProjects}`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        if (currentProject === totalProjects) {
          clearInterval(progressInterval);
          finishDeployment();
        }
      }, 50);
    }, 3600);

    function finishDeployment() {
      const finalSteps = [
        {
          text: "----------------------------------------",
          delay: 300,
          class: "terminal-info",
        },
        {
          text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito en tiempo real.",
          delay: 800,
          class: "terminal-highlight",
        },
        {
          text: "----------------------------------------",
          delay: 1100,
          class: "terminal-info",
        },
        {
          text: "> System ready. Waiting for input...",
          delay: 1600,
          class: "terminal-info",
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
  }
}
