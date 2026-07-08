export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing build process...",
        delay: 500,
        class: "terminal-info",
      },
      {
        text: "> Fetching latest commits from 'main'...",
        delay: 1000,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies...",
        delay: 1600,
        class: "terminal-info",
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 2000,
        class: "terminal-success",
      },
      {
        text: "> Compiling React components...",
        delay: 2500,
        class: "terminal-info",
      },
      {
        text: "> Bundling assets with Vite...",
        delay: 3000,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed successfully in 3.2s.",
        delay: 3800,
        class: "terminal-success",
      },
      {
        text: "> Running security audits...",
        delay: 4200,
        class: "terminal-info",
      },
      {
        text: "[OK] 0 vulnerabilities found.",
        delay: 4800,
        class: "terminal-success",
      },
      {
        text: "> Deploying to edge network...",
        delay: 5300,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 6000,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: Despliegue completado.",
        delay: 6500,
        class: "terminal-highlight",
      },
      { text: "   Status: Online", delay: 6700, class: "terminal-success" },
      {
        text: "   Projects Deployed: 150+",
        delay: 6900,
        class: "terminal-info",
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

    terminalOutput.innerHTML = ""; // Clear initial state

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;

        // Typing effect for lines
        let i = 0;
        function typeTerminalLine() {
          if (i < step.text.length) {
            line.textContent += step.text.charAt(i);
            i++;
            setTimeout(typeTerminalLine, 15); // Fast typing speed
          } else {
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
          }
        }

        terminalOutput.appendChild(line);
        typeTerminalLine();
      }, step.delay);
    });
  }
}
