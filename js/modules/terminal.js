export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing BeMaker deployment protocol...",
        delay: 300,
        class: "terminal-info",
      },
      {
        text: "> Authenticating user...",
        delay: 600,
        class: "terminal-info",
      },
      {
        text: "[OK] Authentication successful.",
        delay: 900,
        class: "terminal-success",
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 1200,
        class: "terminal-info",
      },
      {
        text: "> Resolving dependencies and optimizing assets...",
        delay: 1700,
        class: "terminal-info",
      },
      {
        text: "[OK] Assets optimized.",
        delay: 2100,
        class: "terminal-success",
      },
      {
        text: "> Building robust application bundle...",
        delay: 2500,
        class: "terminal-info",
      },
      {
        text: "[OK] Build completed in 1.2s.",
        delay: 3200,
        class: "terminal-success",
      },
      {
        text: "> Running security checks and test suite (256 tests)...",
        delay: 3600,
        class: "terminal-info",
      },
      {
        text: "[OK] All security checks passed.",
        delay: 4800,
        class: "terminal-success",
      },
      {
        text: "> Connecting to global CDN...",
        delay: 5200,
        class: "terminal-info",
      },
      {
        text: "> Deploying to production servers...",
        delay: 5800,
        class: "terminal-info",
      },
      {
        text: "----------------------------------------",
        delay: 6400,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 6900,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 7200,
        class: "terminal-info",
      },
      {
        text: "> System ready. Ready to transform your idea into code...",
        delay: 8000,
        class: "terminal-info",
      },
    ];

    let stepIndex = 0;

    function typeLine(step) {
      const line = document.createElement("div");
      line.className = `terminal-line ${step.class}`;
      terminalOutput.appendChild(line);

      let charIndex = 0;
      function typeChar() {
        if (charIndex < step.text.length) {
          line.textContent += step.text.charAt(charIndex);
          charIndex++;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          setTimeout(typeChar, 10 + Math.random() * 20); // Fast typing effect
        } else {
          stepIndex++;
          if (stepIndex < deploymentSteps.length) {
            const nextStep = deploymentSteps[stepIndex];
            const nextDelay = nextStep.delay - step.delay;
            setTimeout(() => typeLine(nextStep), Math.max(0, nextDelay));
          }
        }
      }
      typeChar();
    }

    if (deploymentSteps.length > 0) {
      setTimeout(() => typeLine(deploymentSteps[0]), deploymentSteps[0].delay);
    }
  }
}
