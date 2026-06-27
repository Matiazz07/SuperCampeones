// ==========================================================================
// ESTUDIANTE A (Addonys)- ESTRUCTURA BASE DINÁMICA
// ==========================================================================

// 1. Arreglo global vacío obligatorio
const cromosMundial = [];

// 2. Función fábrica para estructurar de forma estricta cada objeto jugador
function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, curiosidad, destacado = false) {
    return {
        id: id,
        nombre: nombre,
        pais: pais,
        posicion: posicion,
        urlImagen: urlImagen,
        urlBandera: urlBandera,
        colorFondoHex: colorFondoHex,
        estadisticas: {
            goles: goles,
            partidos: partidos
        },
        curiosidad: curiosidad,
        destacado: destacado
    };
}

cromosMundial.push(
    crearJugador(1, "Patrik Schick", "Chequia", "Delantero", "img/jugadores/1_Patrik_Schick.jpg", "img/banderas/chequia.jpg", "#d71920", 25, 52, "Anotó el gol más lejano en la historia de la Eurocopa (45.5 metros)."),
    crearJugador(2, "Son Heung-min", "Corea del Sur", "Delantero", "img/jugadores/2_Son_Heung.jpg", "img/banderas/coreaDelSur.jpg", "#003478", 54, 143, "Es el máximo goleador asiático en la historia de la Premier League."),
    crearJugador(3, "Hirving Lozano", "México", "Extremo", "img/jugadores/3_Hirving_Lozano.jpg", "img/banderas/mexico.jpg", "#006847", 18, 70, "Su gol contra Alemania en 2018 provocó una celebración tan grande que algunos sismógrafos registraron vibraciones en Ciudad de México."),
    crearJugador(4, "Frenkie de Jong", "Paises Bajos", "Mediocentro", "img/jugadores/4_Frenkie_de_Jong.jpg", "img/banderas/paisesBajos.jpg", "#ff8f00", 2, 55, "Fue pieza clave en la reestructuración del Ajax que llegó a semifinales de Champions."),
    crearJugador(5, "Alexander Isak", "Suecia", "Delantero", "img/jugadores/5_Alexander_Isak.jpg", "img/banderas/suecia.jpg", "#006aa7", 16, 56, "Es el goleador más joven en la historia de la selección sueca."),
    crearJugador(6, "Wahbi Khazri", "Túnez", "Mediapunta", "img/jugadores/6_Wahbi_Khazri.jpg", "img/banderas/tunez.jpg", "#e70013", 25, 74, "Es el único jugador tunecino en anotar goles en dos Copas del Mundo distintas.")
);

// ==========================================================================
// ESTUDIANTE A - RENDERIZADO DEL ÁLBUM
// ==========================================================================

function renderizarAlbum(lista = cromosMundial) {

    const contenedor = document.getElementById("contenedor-jugadores");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    lista.forEach(jugador => {

        const article = document.createElement("article");

        article.className = "card-cromo";

        article.style.backgroundColor = jugador.colorFondoHex || "#ffffff";

        article.innerHTML = `
            <div class="cromo-header">
                <img src="${jugador.urlBandera}" alt="Bandera de ${jugador.pais}" class="cromo-bandera-top">
                <span class="cromo-posicion">${jugador.posicion}</span>
            </div>

            <div class="cromo-avatar-container">
                <img src="${jugador.urlImagen}" alt="Foto de ${jugador.nombre}" class="cromo-foto-jugador">
            </div>

            <div class="cromo-info">
                <h3>${jugador.nombre.toUpperCase()}</h3>
                <p class="cromo-pais-nombre">${jugador.pais}</p>

                <table class="cromo-tabla-stats">
                    <tr>
                        <td>Partidos</td>
                        <td><strong>${jugador.estadisticas.partidos}</strong></td>
                    </tr>
                    <tr>
                        <td>Goles</td>
                        <td><strong>${jugador.estadisticas.goles}</strong></td>
                    </tr>
                </table>

                <p class="cromo-curiosidad" style="font-size:0.85em; font-style:italic; margin-top:10px; color:#555;">
                    "${jugador.curiosidad}"
                </p>
            </div>
        `;

        contenedor.appendChild(article);

    });

}

// ==========================================================================
// ESTUDIANTE E - FILTROS Y BÚSQUEDA
// ==========================================================================

// Cargar automáticamente los países en el select
function cargarPaises() {

    const select = document.getElementById("filtroPais");

    const paises = [...new Set(cromosMundial.map(jugador => jugador.pais))];

    paises.sort();

    paises.forEach(pais => {

        const option = document.createElement("option");

        option.value = pais;

        option.textContent = pais;

        select.appendChild(option);

    });

}

// Aplicar filtros usando .filter()
function aplicarFiltros() {

    const texto = document
        .getElementById("buscadorJugador")
        .value
        .toLowerCase();

    const paisSeleccionado = document
        .getElementById("filtroPais")
        .value;

    const jugadoresFiltrados = cromosMundial.filter(jugador => {

        const coincideNombre = jugador.nombre
            .toLowerCase()
            .includes(texto);

        const coincidePais =
            paisSeleccionado === "" ||
            jugador.pais === paisSeleccionado;

        return coincideNombre && coincidePais;

    });

    renderizarAlbum(jugadoresFiltrados);

}

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

    renderizarAlbum();

    cargarPaises();

    document
        .getElementById("buscadorJugador")
        .addEventListener("input", aplicarFiltros);

    document
        .getElementById("filtroPais")
        .addEventListener("change", aplicarFiltros);

});