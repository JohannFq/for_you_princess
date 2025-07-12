const messages = [
"Hola, princesita. Espero que estés bien. Esto no te quitará mucho tiempo, ¿sí?",
"Quiero pedirte perdón por todas las veces que te fallé.",
"Sé que las palabras no bastan para arreglar lo que rompí.",
"Por eso me preocupo mucho por ti. Hago lo que está en mis manos para que puedas estar feliz, para que sonrías.",
"Aunque sé que todo eso tampoco lo va a arreglar, lo intento, porque te amo. No lo supe, pero desde el momento en que te vi, ya te amaba y supe que daría mi vida por ti, porque eres mi mundo.",
"Cada día que no estaba junto a ti, que no sabía de ti, era una tortura.",
"Te extrañaba, te pensaba, y me dolía no tenerte cerca, o sea, aún te sigo pensando y extrañando, pero por lo menos ahora puedo cuidarte.",
"Entiendo perfectamente que ahora no quieras una relación y no te voy a presionar.",
"Lo que sí haré es esperarte. Sé que no me lo has pedido, pero quiero hacerlo, porque te amo y eres el amor de mi vida, y para mi vida, no quiero a nadie más que no seas tú.",
"Te esperaré por meses, años e incluso siglos. Esperaré por ti, pero siempre te voy a cuidar.",
"Y, princesa, no sé si lo sepas, pero soy muy avaricioso, así que no me importa qué lado tan horrible tengas, o qué tan inestable seas... YO voy a robarte."
];

let index = 0;
const messageContainer = document.getElementById("message");

function typeWriter(text, i = 0, span, callback) {
  if (i < text.length) {
    span.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1, span, callback), 40);
  } else if (callback) {
    setTimeout(callback, 1000);
  }
}

function startMessages() {
  document.querySelector("button").style.display = "none";

  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(() => {}); // Intenta reproducir (evita errores silenciosos)
  }

  showNextMessage();
}


function showNextMessage() {
  if (index < messages.length) {
    const newLine = document.createElement("p");
    newLine.classList.add("fade-in");
    messageContainer.appendChild(newLine);
    typeWriter(messages[index], 0, newLine, showNextMessage);
    index++;
  }
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");
  if (music.paused) {
    music.play();
    btn.textContent = "🔊 Música";
  } else {
    music.pause();
    btn.textContent = "🔇 Música";
  }
}
