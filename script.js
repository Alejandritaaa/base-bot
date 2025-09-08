// Crear las listas de imágenes, títulos y frases
const imagenes = [

"https://prodcdnmobisoft.oxxodomicilios.com/01HNE7C4JWYQK0909XWSJZ42TV.jpg",
  "https://comercialpapelera.com.co/tienda/15806-large_default/gansito-37-gr-ramo.jpg",
  "https://static.merqueo.com/images/products/large/e4a0f37e-2d6c-4321-a75d-cc247bb2410a.jpg",
  "https://i.ytimg.com/vi/5YVufumpyUE/maxresdefault.jpg",
  "https://pbs.twimg.com/media/GtK6zaZWEAA8FiY?format=jpg&name=large",
  "https://s3.pagegear.co/409/productos/13880_800x800.jpg?1736765",
];

const titulos = [
  "Gansito Zoombiee",
  "Gansito Tradicional",
  "Gansito Hohohoo",
  "Gansito mora-arequipeee",
  "Gansito bombomm",
"Gansito chocoososo",
];

const frases = [
  "Distintos sabores te van a cautivar, con arequie, mora y chocolaate te vas a enamorar.",
  "Su deliciosa cobertura te eriza la piel.",
  "Acompaña la navidad con un HOHOHOO y cautiva tu corazon",
  "Un sin fin de sabores que te endulzaran el corazon",
  "Un solo bocado lleno de sabor",
  "Animate a aprobar nuestra nueva edicion",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();