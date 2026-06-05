export function initTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  if (!terminalOutput) return;

  const steps = [
    {
      text: "> Initializing secure deployment protocol...",
      class: "terminal-info",
      delay: 100,
    },
    {
      text: "> Authenticating maker credentials...",
      class: "terminal-info",
      delay: 800,
    },
    {
      text: "[OK] Authentication successful.",
      class: "terminal-success",
      delay: 1500,
    },
    {
      text: "> Fetching latest commits from 'main'...",
      class: "terminal-info",
      delay: 2000,
    },
    {
      text: "> Resolving modern dependencies...",
      class: "terminal-info",
      delay: 2800,
    },
    {
      text: "[OK] All dependencies resolved in 0.8s.",
      class: "terminal-success",
      delay: 3500,
    },
    {
      text: "> Building ultra-fast application bundle...",
      class: "terminal-info",
      delay: 4200,
    },
    { text: "[OK] Build completed.", class: "terminal-success", delay: 5500 },
    {
      text: "> Running automated test suite (245 tests)...",
      class: "terminal-info",
      delay: 6000,
    },
    {
      text: "[OK] 245/245 tests passed securely.",
      class: "terminal-success",
      delay: 7200,
    },
    {
      text: "> Deploying to production nodes...",
      class: "terminal-info",
      delay: 8000,
    },
    {
      text: "----------------------------------------",
      class: "terminal-info",
      delay: 9000,
    },
    {
      text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
      class: "terminal-highlight",
      delay: 9500,
    },
    {
      text: "----------------------------------------",
      class: "terminal-info",
      delay: 9800,
    },
    {
      text: "> System fully operational. Awaiting next big idea...",
      class: "terminal-info",
      delay: 10500,
    },
  ];

  let cumulativeDelay = 0;

  steps.forEach((step) => {
    cumulativeDelay += Math.random() * 500 + 400; // random delay for realism
    const triggerDelay = step.delay;

    setTimeout(() => {
      const line = document.createElement("div");
      line.className = `terminal-line ${step.class}`;
      terminalOutput.appendChild(line);

      // Character streaming effect
      let charIndex = 0;
      function streamText() {
        if (charIndex < step.text.length) {
          line.textContent += step.text.charAt(charIndex);
          charIndex++;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          setTimeout(streamText, Math.random() * 20 + 10);
        }
      }
      streamText();
    }, triggerDelay);
  });
}
