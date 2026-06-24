// ==========================================================================
// ESTUDIANTE A (Addonys)- ESTRUCTURA BASE DINÁMICA
// ==========================================================================

// 1. Arreglo global vacío obligatorio
const cromosMundial = [];

// 2. Función fábrica para estructurar de forma estricta cada objeto jugador
function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado = false) {
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
        destacado: destacado
    };
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
            </div>
        `;

        contenedor.appendChild(article);
    });
}

// Ejecutar el renderizado cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    renderizarAlbum();
});