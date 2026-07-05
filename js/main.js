import { initPortfolio } from "./modules/portfolio.js";
import { initHeroAnimations } from "./modules/animations.js";
import { initModals } from "./modules/modals.js";
import { initTerminal } from "./modules/terminal.js";
import { initChatbot } from "./modules/chatbot.js";
import { initPixelCanvas } from "./modules/pixel-canvas.js";
import { initCart } from "./modules/cart.js";
import "./modules/components.js";

document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({ once: true, duration: 800 });
  }
  initHeroAnimations();
  initModals();
  initTerminal();
  initChatbot();
  initPortfolio();
  initCart();
});
initPixelCanvas();
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".bento-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
