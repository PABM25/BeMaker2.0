export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const baseSteps = [
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
        delay: 2400,
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
        text: "> Starting rapid deployment of 150+ projects...",
        delay: 3500,
        class: "terminal-info",
      },
    ];

    baseSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        line.textContent = step.text;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }, step.delay);
    });

    let currentProject = 1;
    const totalProjects = 150;
    let deploymentInterval;

    setTimeout(() => {
      const deployLine = document.createElement("div");
      deployLine.className = `terminal-line terminal-progress`;
      terminalOutput.appendChild(deployLine);

      deploymentInterval = setInterval(() => {
        if (currentProject <= totalProjects) {
          const progressPercentage = Math.floor(
            (currentProject / totalProjects) * 100,
          );
          const barLength = 20;
          const filledLength = Math.floor(
            (progressPercentage / 100) * barLength,
          );
          const bar =
            "=".repeat(filledLength) +
            ">".repeat(filledLength < barLength ? 1 : 0) +
            " ".repeat(
              barLength - filledLength - (filledLength < barLength ? 1 : 0),
            );

          deployLine.textContent = `> Deploying project [${currentProject}/${totalProjects}] [${bar}] ${progressPercentage}%`;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          currentProject += Math.floor(Math.random() * 5) + 1; // Increment by 1-5 projects
        } else {
          clearInterval(deploymentInterval);
          deployLine.textContent = `> Deploying project [150/150] [====================] 100%`;

          setTimeout(() => {
            const finalSteps = [
              {
                text: "----------------------------------------",
                delay: 300,
                class: "terminal-info",
              },
              {
                text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
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
                delay: 1500,
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
          }, 500);
        }
      }, 50); // fast deployment update
    }, 3800);
  }
}
