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

        const intents = [
          {
            keywords: ["hola", "buenos dias", "buenas", "buenas tardes"],
            reply:
              "¡Hola! ¿Buscas digitalizar tu negocio o necesitas una página web?",
          },
          {
            keywords: ["precio", "cuanto", "planes", "costo", "valor"],
            reply:
              "Contamos con planes desde $120.000 CLP diseñados especialmente para PYMES. Puedes revisar la sección de 'Planes PYME' para ver qué incluye cada uno.",
          },
          {
            keywords: ["contacto", "hablar", "cotizar", "reunion", "agendar"],
            reply:
              "¡Perfecto! Puedes ir al formulario de Contacto en el menú superior o escribirnos directo a bemaker.dev@gmail.com.",
          },
          {
            keywords: ["tiempo", "demora", "plazo", "cuando"],
            reply:
              "Nuestros planes Express y Conectada suelen estar listos entre 7 a 15 días hábiles, dependiendo de tus requerimientos. ¿Tienes alguna fecha límite?",
          },
          {
            keywords: ["pago", "pagar", "cuotas", "metodos"],
            reply:
              "Aceptamos transferencias bancarias y podemos coordinar pagos en etapas. Normalmente trabajamos con un 50% de anticipo para iniciar el proyecto.",
          },
          {
            keywords: ["tecnologia", "herramientas", "codigo", "framework"],
            reply:
              "Trabajamos con tecnologías web modernas, seguras y escalables (como HTML5, CSS3, JavaScript avanzado) para asegurar un rendimiento óptimo de tu sitio.",
          },
          {
            keywords: ["mantenimiento", "soporte", "ayuda", "actualizar"],
            reply:
              "Sí, ofrecemos soporte post-lanzamiento y planes de mantenimiento para que tu plataforma esté siempre actualizada, segura y funcionando al 100%.",
          },
          {
            keywords: ["servicios", "hacen", "ofrecen"],
            reply:
              "Nos especializamos en diseño UI/UX y desarrollo web. Creamos desde Landing Pages de alta conversión hasta software a medida y Dashboards administrativos.",
          },
        ];

        let botReply =
          "¡Gracias por tu mensaje! Déjame tu correo o escríbenos desde la sección de Contacto y te responderemos enseguida.";

        for (const intent of intents) {
          if (intent.keywords.some((keyword) => lowerText.includes(keyword))) {
            botReply = intent.reply;
            break;
          }
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
