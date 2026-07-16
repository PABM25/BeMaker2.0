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
        delay: 5500,
        class: "terminal-info",
      },
      {
        text: "🚀 SUCCESS: 150+ proyectos desplegados con éxito.",
        delay: 9500,
        class: "terminal-highlight",
      },
      {
        text: "----------------------------------------",
        delay: 9800,
        class: "terminal-info",
      },
      {
        text: "> System ready. Waiting for input...",
        delay: 10500,
        class: "terminal-info",
      },
    ];

    const mockProjects = [
      "bemaker-ecommerce",
      "legal-consult-platform",
      "nova-beauty-dashboard",
      "constructora-vg-crm",
      "delacruz-inventory",
      "fintech-startup-app",
      "health-tracking-web",
      "realestate-listings",
      "ai-chatbot-service",
      "secure-vpn-gateway"
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

    // Simulate fast-scrolling log of projects deploying
    setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        if (count >= 15) {
          clearInterval(interval);
          return;
        }
        const projectName = mockProjects[Math.floor(Math.random() * mockProjects.length)] + '-' + Math.floor(Math.random() * 1000);
        const line = document.createElement("div");
        line.className = "terminal-line terminal-info";
        line.style.opacity = "0.7";
        line.textContent = `[SYNC] Uploading artifact ${projectName}.tar.gz ... OK`;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        count++;
      }, 200); // Deploy one mock project every 200ms
    }, 5800);
  }
}
