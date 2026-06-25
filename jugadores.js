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


// Alimentación de cromosMundial (IDs 1 al 6)

cromosMundial.push(
    crearJugador(1, "Patrik Schick", "Chequia", "Delantero", "img/jugadores/1_Patrik_Schick.jpg", "img/banderas/chequia.jpg", "#d71920", 25, 52, "Anotó el gol más lejano en la historia de la Eurocopa (45.5 metros)."),
    crearJugador(2, "Son Heung-min", "Corea del Sur", "Delantero", "img/jugadores/2_Son_Heung.jpg", "img/banderas/coreaDelSur.jpg", "#003478", 54, 143, "Es el máximo goleador asiático en la historia de la Premier League."),
    crearJugador(3, "Hirving Lozano", "México", "Extremo", "img/jugadores/3_Hirving_Lozano.jpg", "img/banderas/mexico.jpg", "#006847", 18, 70, "Su gol contra Alemania en 2018 provocó una celebración tan grande que algunos sismógrafos registraron vibraciones en Ciudad de México."),
    crearJugador(4, "Frenkie de Jong", "Países Bajos", "Mediocentro", "img/jugadores/4_Frenkie_de_Jong.jpg", "img/banderas/paisesBajos.jpg", "#ff8f00", 2, 55, "Fue pieza clave en la reestructuración del Ajax que llegó a semifinales de Champions."),
    crearJugador(5, "Alexander Isak", "Suecia", "Delantero", "img/jugadores/5_Alexander_Isak.jpg", "img/banderas/suecia.jpg", "#006aa7", 16, 56, "Es el goleador más joven en la historia de la selección sueca."),
    crearJugador(6, "Wahbi Khazri", "Túnez", "Mediapunta", "img/jugadores/6_Wahbi_Khazri.jpg", "img/banderas/tunez.jpg", "#e70013", 25, 74, "Es el único jugador tunecino en anotar goles en dos Copas del Mundo distintas.")
);

// Alimentación de cromosMundial (IDs 7 al 12)

cromosMundial.push(
    crearJugador(7, "Kevin De Bruyne", "Bélgica", "Mediocentro", "img/jugadores/7_Kevin_De_Bruyne.jpg", "img/banderas/belgica.jpg", "#E30613", 36, 115, "Es considerado uno de los mejores pasadores de la historia de la Premier League."),
    crearJugador(8, "Mohamed Salah", "Egipto", "Extremo", "img/jugadores/8_Mohamed_Salah.jpg", "img/banderas/egipto.jpg", "#CE1126", 63, 107, "Es el máximo goleador africano en la historia de la Premier League."),
    crearJugador(9, "Mehdi Taremi", "Irán", "Delantero", "img/jugadores/9_Mehdi_Taremi.jpg", "img/banderas/iran.jpg", "#239F40", 57, 102, "Fue nominado al Premio Puskas por su espectacular chilena ante el Chelsea en Champions."),
    crearJugador(10, "Chris Wood", "Nueva Zelanda", "Delantero", "img/jugadores/10_Chris_Wood.jpg", "img/banderas/nuevaZelanda.jpg", "#4119c6", 44, 84, "Es el máximo goleador histórico de la selección de Nueva Zelanda."),
    crearJugador(11, "Luis Diaz", "Colombia", "Extremo", "img/jugadores/11_Luis_Diaz.jpg", "img/banderas/colombia.jpg", "#FCD116", 21, 70, "Su carrera despegó tras un impresionante desempeño en la Copa América 2021."),
    crearJugador(12, "Cristiano Ronaldo", "Portugal", "Delantero", "img/jugadores/12_Cristiano_Ronaldo.jpg", "img/banderas/portugal.jpg", "#FF0000", 145, 230, "Es el máximo goleador histórico en partidos oficiales de selecciones nacionales.")
);


// Función interna para calcular total de goles (Exigida por taller 3, que sea de los jugadores que el estudiante C ha registrado: del 7 al 12))
function calcularTotalGolesGruposGK() {
    return cromosMundial
        .filter(j => j.id >= 7 && j.id <= 12)
        .reduce((sum, j) => sum + j.estadisticas.goles, 0);
}

// 3. Función de renderizado inicial usando .forEach()
function renderizarAlbum() {
    const contenedor = document.getElementById("contenedor-jugadores");
    if (!contenedor) return;
    
    // Limpiamos el contenedor antes de renderizar
    contenedor.innerHTML = "";

    cromosMundial.forEach(jugador => {
        // Creamos el elemento artículo para la tarjeta (.card-cromo)
        const article = document.createElement("article");
        article.className = "card-cromo";
        
        // El estudiante D aplicará el color de fondo dinámico inline aquí
        article.style.backgroundColor = jugador.colorFondoHex || "#ffffff";

        // Estructura interna de la tarjeta
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
                    <p class="cromo-curiosidad" style="font-size: 0.85em; font-style: italic; margin-top: 10px; color: #555;">
                    "${jugador.curiosidad}"
                    </p>
            </div>
        `;

        contenedor.appendChild(article);
    });
}

/// Ejecutar el renderizado y la actualización de estadísticas cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // 1. Renderizamos todos los cromos en el DOM
    renderizarAlbum();

    // 2. Calculamos el total de goles de tus jugadores (IDs 7 al 12)
    const totalGoles = calcularTotalGolesGruposGK();

    // 3. Inyectamos ese valor en el HTML
    const displayTotal = document.getElementById("valor-total-goles");
    if (displayTotal) {
        displayTotal.innerText = totalGoles;
    }
});