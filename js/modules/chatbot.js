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
        let botReply =
          "¡Gracias por tu mensaje! Déjame tu correo o escríbenos desde la sección de Contacto y te responderemos enseguida.";

        if (
          lowerText.includes("hola") ||
          lowerText.includes("buenos dias") ||
          lowerText.includes("buenas") ||
          lowerText.includes("buenas tardes")
        ) {
          botReply =
            "¡Hola! ¿Buscas digitalizar tu negocio o necesitas una página web?";
        } else if (
          lowerText.includes("precio") ||
          lowerText.includes("cuanto") ||
          lowerText.includes("planes") ||
          lowerText.includes("costo") ||
          lowerText.includes("valor")
        ) {
          botReply =
            "Contamos con planes desde $120.000 CLP diseñados especialmente para PYMES. Puedes revisar la sección de 'Planes PYME' para ver qué incluye cada uno.";
        } else if (
          lowerText.includes("contacto") ||
          lowerText.includes("hablar") ||
          lowerText.includes("cotizar") ||
          lowerText.includes("reunion") ||
          lowerText.includes("agendar")
        ) {
          botReply =
            "¡Perfecto! Puedes ir al formulario de Contacto en el menú superior o escribirnos directo a bemaker.dev@gmail.com.";
        } else if (
          lowerText.includes("tiempo") ||
          lowerText.includes("demora") ||
          lowerText.includes("plazo") ||
          lowerText.includes("cuando")
        ) {
          botReply =
            "Nuestros planes Express y Conectada suelen estar listos entre 7 a 15 días hábiles, dependiendo de tus requerimientos. ¿Tienes alguna fecha límite?";
        } else if (
          lowerText.includes("pago") ||
          lowerText.includes("pagar") ||
          lowerText.includes("cuotas") ||
          lowerText.includes("metodos")
        ) {
          botReply =
            "Aceptamos transferencias bancarias y podemos coordinar pagos en etapas. Normalmente trabajamos con un 50% de anticipo para iniciar el proyecto.";
        } else if (
          lowerText.includes("tecnologia") ||
          lowerText.includes("herramientas") ||
          lowerText.includes("codigo") ||
          lowerText.includes("framework")
        ) {
          botReply =
            "Trabajamos con tecnologías web modernas, seguras y escalables (como HTML5, CSS3, JavaScript avanzado) para asegurar un rendimiento óptimo de tu sitio.";
        } else if (
          lowerText.includes("mantenimiento") ||
          lowerText.includes("soporte") ||
          lowerText.includes("ayuda") ||
          lowerText.includes("actualizar")
        ) {
          botReply =
            "Sí, ofrecemos soporte post-lanzamiento y planes de mantenimiento para que tu plataforma esté siempre actualizada, segura y funcionando al 100%.";
        } else if (
          lowerText.includes("servicios") ||
          lowerText.includes("hacen") ||
          lowerText.includes("ofrecen")
        ) {
          botReply =
            "Nos especializamos en diseño UI/UX y desarrollo web. Creamos desde Landing Pages de alta conversión hasta software a medida y Dashboards administrativos.";
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
