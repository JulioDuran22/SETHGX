// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Para ti pequeña Sofi", time: 10 },
  { text: "Mira Las Estrellas", time: 32 },
  { text: "Mira Como Brillan Por Ti", time: 35 },
  { text: "Y Todo Lo Que Haces", time: 41 },
  { text: "Si, Eran Todas Amarillas", time: 46 },
  { text: "Yo Llegue", time: 48 },
  { text: "Escribí una canción para ti", time: 52 },
  { text: "Y para todas las cosas que haces", time: 57 },
  { text: "Y se llamaba Amarillo", time: 63 },
  { text: "Así que tomé mi turno", time: 68 },
  { text: "Oh, qué cosa habia hecho", time: 74 },
  { text: "Y era todo amarillo", time: 79 },
  { text: "Tu piel.. Oh, sí, tu piel y tus huesos", time: 88 },
  { text: "Se convirtieron en algo hermoso", time: 93 },
  { text: "¿Sabes?, ¿Sabes que te amo tanto?", time: 99 },
  { text: "¿Sabes que te amo tanto?", time: 107 },
  { text: "Crucé el océano", time: 132 },
  { text: "Salté barreras por ti", time: 135 },

  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);