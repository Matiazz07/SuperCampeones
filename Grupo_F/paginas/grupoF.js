const datosEquipos = {

    paisesbajos: {
        nombre: "PAÍSES BAJOS",
        historia: "La selección neerlandesa es una de las más exitosas de Europa. Ha sido subcampeona mundial en tres ocasiones (1974, 1978 y 2010) y es reconocida por su histórico estilo de juego conocido como 'Fútbol Total'.",
        partidos: [
            {
                rival: "vs Japón",
                fecha: "14 de Junio de 2026",
                estadio: "MetLife Stadium"
            },
            {
                rival: "vs Suecia",
                fecha: "20 de Junio de 2026",
                estadio: "AT&T Stadium"
            },
            {
                rival: "vs Túnez",
                fecha: "26 de Junio de 2026",
                estadio: "SoFi Stadium"
            }
        ]
    },

    japon: {
        nombre: "JAPÓN",
        historia: "Japón es una de las selecciones más fuertes de Asia. Ha participado regularmente en los mundiales desde 1998 y destaca por su disciplina táctica, velocidad y excelente formación de jugadores.",
        partidos: [
            {
                rival: "vs Países Bajos",
                fecha: "14 de Junio de 2026",
                estadio: "MetLife Stadium"
            },
            {
                rival: "vs Túnez",
                fecha: "20 de Junio de 2026",
                estadio: "NRG Stadium"
            },
            {
                rival: "vs Suecia",
                fecha: "26 de Junio de 2026",
                estadio: "Lumen Field"
            }
        ]
    },

    suecia: {
        nombre: "SUECIA",
        historia: "Suecia es una selección histórica del fútbol europeo. Fue subcampeona mundial en 1958 y obtuvo el tercer lugar en 1994. Se caracteriza por su fortaleza física y orden defensivo.",
        partidos: [
            {
                rival: "vs Túnez",
                fecha: "15 de Junio de 2026",
                estadio: "Mercedes-Benz Stadium"
            },
            {
                rival: "vs Países Bajos",
                fecha: "20 de Junio de 2026",
                estadio: "AT&T Stadium"
            },
            {
                rival: "vs Japón",
                fecha: "26 de Junio de 2026",
                estadio: "Lumen Field"
            }
        ]
    },

    tunez: {
        nombre: "TÚNEZ",
        historia: "Túnez es una de las selecciones africanas con mayor presencia en Copas del Mundo. Destaca por su organización táctica y por representar constantemente al fútbol del norte de África.",
        partidos: [
            {
                rival: "vs Suecia",
                fecha: "15 de Junio de 2026",
                estadio: "Mercedes-Benz Stadium"
            },
            {
                rival: "vs Japón",
                fecha: "20 de Junio de 2026",
                estadio: "NRG Stadium"
            },
            {
                rival: "vs Países Bajos",
                fecha: "26 de Junio de 2026",
                estadio: "SoFi Stadium"
            }
        ]
    }

};

function abrirModal(equipoId) {

    const modal = document.getElementById("modal-equipo");
    const titulo = document.getElementById("modal-titulo");
    const historia = document.getElementById("modal-historia");
    const listaPartidos = document.getElementById("modal-partidos");

    const datos = datosEquipos[equipoId];

    titulo.textContent = datos.nombre;
    historia.textContent = datos.historia;

    listaPartidos.innerHTML = "";

    datos.partidos.forEach(partido => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${partido.rival}</strong>
            <br>
            📅 Fecha: ${partido.fecha}
            <br>
            🏟️ Estadio: ${partido.estadio}
        `;

        listaPartidos.appendChild(li);

    });

    modal.classList.add("activo");
}

function cerrarModal() {
    document.getElementById("modal-equipo").classList.remove("activo");
}

window.onclick = function(event) {

    const modal = document.getElementById("modal-equipo");

    if (event.target === modal) {
        cerrarModal();
    }

};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Grupo F Mundial 2026 cargado correctamente");
});