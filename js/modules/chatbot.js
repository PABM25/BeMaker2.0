export function initChatbot() {
  const chatbotToggler = document.getElementById("chatbot-toggler");
  const chatbotContainer = document.querySelector(".chatbot-container");
  const chatInput = document.getElementById("chat-input");
  const chatSendBtn = document.getElementById("chat-send-btn");
  const chatBody = document.getElementById("chat-body");

  if (chatbotToggler && chatbotContainer) {
    chatbotToggler.addEventListener("click", () => {
      chatbotContainer.classList.toggle("open");
    });

    const appendMessage = (text, sender) => {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("message", `${sender}-message`);
      msgDiv.textContent = text;
      chatBody.appendChild(msgDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    };

    const handleChatSend = () => {
      const text = chatInput.value.trim();
      if (!text) return;
      appendMessage(text, "user");
      chatInput.value = "";
      setTimeout(() => {
        const lowerText = text.toLowerCase();
        let botReply = "¡Gracias por tu mensaje! Déjame tu correo o escríbenos desde la sección de Contacto y te responderemos enseguida.";
        if (lowerText.includes("precio") || lowerText.includes("cuanto") || lowerText.includes("planes")) {
          botReply = "Contamos con planes desde $120.000 CLP diseñados especialmente para PYMES. Puedes revisar la sección de 'Planes PYME' para ver qué incluye cada uno.";
        } else if (lowerText.includes("contacto") || lowerText.includes("hablar") || lowerText.includes("cotizar")) {
          botReply = "¡Perfecto! Puedes ir al formulario de Contacto en el menú superior o escribirnos directo a bemaker.dev@gmail.com";
        } else if (lowerText.includes("hola") || lowerText.includes("buenos dias") || lowerText.includes("buenas")) {
          botReply = "¡Hola! ¿Buscas digitalizar tu negocio o necesitas una página web?";
        }
        appendMessage(botReply, "bot");
      }, 1000);
    };

    if (chatSendBtn) chatSendBtn.addEventListener("click", handleChatSend);
    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleChatSend();
        }
      });
    }
  }
}
