export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (terminalOutput) {
    const deploymentSteps = [
      {
        text: "> Initializing deployment process...",
        delay: 500,
        class: "terminal-info",
        typewriter: true,
      },
      {
        text: "> Fetching latest commits from branch 'main'...",
        delay: 1500,
        class: "terminal-info",
        typewriter: true,
      },
      {
        text: "> Resolving dependencies...",
        delay: 3000,
        class: "terminal-info",
        typewriter: true,
      },
      {
        text: "[OK] Dependencies resolved.",
        delay: 4500,
        class: "terminal-success",
      },
      {
        text: "> Building application bundle...",
        delay: 5000,
        class: "terminal-info",
        typewriter: true,
      },
      {
        text: "[OK] Build completed in 2.4s.",
        delay: 7000,
        class: "terminal-success",
      },
      {
        text: "> Running test suite (142 tests)...",
        delay: 7500,
        class: "terminal-info",
        typewriter: true,
      },
      {
        text: "[OK] All tests passed.",
        delay: 9500,
        class: "terminal-success",
      },
      {
        text: "> Deploying to production server...",
        delay: 10000,
        class: "terminal-info",
        typewriter: true,
      },
      {
        text: "Deploying [████████████████████] 100%",
        delay: 12000,
        class: "terminal-info",
        progress: true,
      },
      {
        text: "----------------------------------------",
        delay: 13000,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 13500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 14000,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 15000,
        class: "terminal-info",
        typewriter: true,
      },
    ];

    function typeLine(element, text, speed, callback) {
      let i = 0;
      function typing() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          setTimeout(typing, speed);
        } else if (callback) {
          callback();
        }
      }
      typing();
    }

    function animateProgress(element, text, duration, callback) {
      const parts = text.split("[");
      const prefix = parts[0] + "[";
      const rest = parts[1].split("]");
      const blocks = rest[0];
      const suffix = "]" + rest[1];

      let i = 0;
      element.textContent =
        prefix + "                    " + suffix.replace("100%", "0%");

      const interval = setInterval(() => {
        i++;
        const currentBlocks = "█".repeat(i) + " ".repeat(20 - i);
        const currentPercent = Math.floor((i / 20) * 100) + "%";
        element.textContent =
          prefix + currentBlocks + "]" + suffix.replace("100%", currentPercent);

        if (i >= 20) {
          clearInterval(interval);
          if (callback) callback();
        }
      }, duration / 20);
    }

    deploymentSteps.forEach((step) => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `terminal-line ${step.class}`;
        terminalOutput.appendChild(line);

        if (step.typewriter) {
          typeLine(line, step.text, 30);
        } else if (step.progress) {
          animateProgress(line, step.text, 800);
        } else {
          line.textContent = step.text;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
      }, step.delay);
    });
  }
}
