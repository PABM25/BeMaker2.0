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
        text: "> Running test suite (142 tests)...",
        delay: 3200,
        class: "terminal-info",
      },
      {
        text: "[OK] All tests passed.",
        delay: 4500,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 5000,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 0 proyectos desplegados con éxito.",
        delay: 6500,
        class: "terminal-highlight",
        isCounter: true,
      },
      {
        text: "----------------------------------------",
        delay: 8500,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 9000,
        class: "terminal-info",
      },
    ];

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        let charIndex = 0;
        function typeChar() {
          if (charIndex < step.text.length) {
            line.textContent += step.text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 15);
          } else if (step.isCounter) {
            let count = 0;
            const target = 150;
            const counterInterval = setInterval(() => {
              count += 5;
              if (count >= target) {
                line.textContent = `🚀 SUCCESS: ${target}+ proyectos desplegados con éxito.`;
                clearInterval(counterInterval);
              } else {
                line.textContent = `🚀 SUCCESS: ${count} proyectos desplegados con éxito.`;
              }
            }, 40);
          }
        }
        typeChar();
      }, step.delay);
    });
  }
}
