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
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 6500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 6800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 7500,
        class: "terminal-info",
      },
    ];

    let currentStepIndex = 0;

    async function typeLine(text, element, speed = 20) {
      for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }

    async function runTerminal() {
      if (currentStepIndex >= deploymentSteps.length) return;

      const step = deploymentSteps[currentStepIndex];
      const delayDiff =
        currentStepIndex === 0
          ? step.delay
          : step.delay - deploymentSteps[currentStepIndex - 1].delay;

      await new Promise((resolve) => setTimeout(resolve, delayDiff));

      const line = document.createElement("div");
      line.className = `terminal-line ${step.class}`;
      terminalOutput.appendChild(line);

      // Typing effect for info and highlight
      if (
        step.class === "terminal-info" ||
        step.class === "terminal-highlight"
      ) {
        let typingSpeed = step.class === "terminal-highlight" ? 40 : 15;
        await typeLine(step.text, line, typingSpeed);
      } else {
        // Instant for success and separators
        line.textContent = step.text;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }

      // Add simulated progress bar right after build
      if (step.text.includes("Building application bundle")) {
        const progressLine = document.createElement("div");
        progressLine.className = "terminal-line terminal-info";
        progressLine.style.color = "#ffbd2e";
        terminalOutput.appendChild(progressLine);

        let progressText = "[";
        for (let p = 0; p < 20; p++) {
          progressText += "=";
          progressLine.textContent = progressText + ">] " + p * 5 + "%";
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
        progressLine.textContent = "[====================] 100%";
      }

      currentStepIndex++;
      runTerminal();
    }

    runTerminal();
  }
}
