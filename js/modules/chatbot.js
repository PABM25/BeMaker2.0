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
            keywords: [
              "hola",
              "buenos dias",
              "buenas",
              "buenas tardes",
              "buenas noches",
              "hey",
              "saludos",
            ],
            reply:
              "¡Hola! Soy el asistente virtual de BeMaker. ¿Buscas digitalizar tu negocio o necesitas una página web?",
          },
          {
            keywords: [
              "precio",
              "cuanto",
              "planes",
              "costo",
              "valor",
              "presupuesto",
              "tarifa",
            ],
            reply:
              "Contamos con planes desde $120.000 CLP diseñados especialmente para PYMES. Puedes revisar la sección de 'Planes PYME' para ver qué incluye cada uno.",
          },
          {
            keywords: [
              "kits",
              "kit",
              "diy",
              "niños",
              "adolescentes",
              "adultos",
              "robotica",
              "electronica",
            ],
            reply:
              "¡Tenemos Kits DIY de robótica y electrónica para todas las edades! Puedes verlos y comprarlos en la sección 'Kits DIY' en nuestro menú.",
          },
          {
            keywords: [
              "contacto",
              "hablar",
              "cotizar",
              "reunion",
              "agendar",
              "telefono",
              "whatsapp",
              "correo",
              "email",
            ],
            reply:
              "¡Perfecto! Puedes ir al formulario de Contacto en el menú superior, o escribirnos directo a nuestro WhatsApp o al correo bemaker.dev@gmail.com.",
          },
          {
            keywords: [
              "tiempo",
              "demora",
              "plazo",
              "cuando",
              "duracion",
              "tardan",
            ],
            reply:
              "Nuestros planes Express y Conectada suelen estar listos entre 7 a 15 días hábiles, dependiendo de tus requerimientos. ¿Tienes alguna fecha límite?",
          },
          {
            keywords: [
              "pago",
              "pagar",
              "cuotas",
              "metodos",
              "tarjeta",
              "transferencia",
            ],
            reply:
              "Aceptamos transferencias bancarias y podemos coordinar pagos en etapas. Normalmente trabajamos con un 50% de anticipo para iniciar el proyecto y el saldo al finalizar.",
          },
          {
            keywords: [
              "tecnologia",
              "herramientas",
              "codigo",
              "framework",
              "react",
              "wordpress",
              "programan",
            ],
            reply:
              "Trabajamos con tecnologías web modernas, seguras y escalables (como HTML5, CSS3, JavaScript avanzado, y Web Components) para asegurar un rendimiento óptimo de tu sitio.",
          },
          {
            keywords: [
              "mantenimiento",
              "soporte",
              "ayuda",
              "actualizar",
              "modificar",
              "arreglar",
            ],
            reply:
              "Sí, ofrecemos soporte post-lanzamiento y planes de mantenimiento para que tu plataforma esté siempre actualizada, segura y funcionando al 100%.",
          },
          {
            keywords: [
              "servicios",
              "hacen",
              "ofrecen",
              "dedican",
              "desarrollo",
            ],
            reply:
              "Nos especializamos en diseño UI/UX y desarrollo web. Creamos desde Landing Pages de alta conversión hasta software a medida y Dashboards administrativos.",
          },
          {
            keywords: [
              "ecommerce",
              "tienda",
              "vender",
              "carrito",
              "productos",
              "online",
              "virtual",
            ],
            reply:
              "¡Claro! Desarrollamos tiendas online (e-commerce) preparadas para vender 24/7 con integración a pasarelas de pago como MercadoPago o Transbank. ¿Qué tipo de productos vendes?",
          },
          {
            keywords: [
              "dominio",
              "hosting",
              "alojamiento",
              "servidor",
              ".com",
              ".cl",
              "web hosting",
            ],
            reply:
              "Todos nuestros planes web incluyen la gestión y configuración de Hosting y Dominio (.com o .cl) por el primer año, además de correos corporativos y certificados de seguridad SSL.",
          },
          {
            keywords: [
              "seo",
              "google",
              "buscador",
              "posicionamiento",
              "aparecer",
              "busquedas",
            ],
            reply:
              "Entregamos todas nuestras páginas web con optimización SEO básica de base. Así nos aseguramos de que Google pueda indexar correctamente tu sitio y ayudarte a posicionar mejor.",
          },
          {
            keywords: [
              "portafolio",
              "ejemplos",
              "trabajos",
              "hecho",
              "clientes",
              "proyectos",
              "experiencia",
            ],
            reply:
              "Puedes ver parte de nuestro trabajo haciendo clic en 'Portafolio' en el menú de navegación. ¡Hemos ayudado a múltiples empresas a transformar sus ideas en código!",
          },
          {
            keywords: [
              "donde",
              "ubicacion",
              "oficina",
              "pais",
              "ciudad",
              "estan",
            ],
            reply:
              "Somos una agencia digital, por lo que trabajamos de forma 100% remota atendiendo a clientes en todo Chile y también de forma internacional.",
          },
          {
            keywords: ["quienes", "equipo", "agencia", "bemaker", "ustedes"],
            reply:
              "Somos BeMaker, un equipo de 'Makers', ingenieros y desarrolladores apasionados por la tecnología y la creación de soluciones digitales que generan impacto.",
          },
          {
            keywords: [
              "gracias",
              "agradecido",
              "genial",
              "excelente",
              "perfecto",
              "buenisimo",
              "ok",
              "vale",
            ],
            reply:
              "¡De nada! ¿Hay algo más en lo que te pueda ayudar o alguna otra duda que tengas?",
          },
          {
            keywords: [
              "adios",
              "chao",
              "hasta luego",
              "nos vemos",
              "bye",
              "despedida",
            ],
            reply:
              "¡Hasta luego! Quedamos atentos para cuando decidas llevar tus ideas al siguiente nivel con BeMaker.",
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
