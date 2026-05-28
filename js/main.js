import { initPortfolio } from "./modules/portfolio.js";
import { initHeroAnimations } from "./modules/animations.js";
import { initModals } from "./modules/modals.js";
import { initTerminal } from "./modules/terminal.js";
import { initPreloader } from "./modules/preloader.js";
import { initChatbot } from "./modules/chatbot.js";
import { initPixelCanvas } from "./modules/pixel-canvas.js";
import "./modules/components.js";

document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({ once: true, duration: 800 });
  }
  initHeroAnimations();
  initModals();
  initTerminal();
  initPreloader();
  initChatbot();
  initPortfolio();
});
initPixelCanvas();
