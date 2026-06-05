const datosEquipos = {
    portugal: {
        nombre: "SELECCIÓN DE PORTUGAL",
        historia: "La selección lusitana llega al Mundial 2026 buscando su primera Copa del Mundo. Su mejor participación histórica fue el tercer lugar alcanzado en Inglaterra 1966. Con una generación brillante y gran experiencia internacional, son los amplios favoritos para liderar el Grupo K.",
        curiosidades: [
            "Cristiano Ronaldo busca ampliar su récord absoluto de goles anotados en múltiples ediciones de la Copa del Mundo.",
            "Tienen en sus vitrinas la Eurocopa 2016 y la edición inaugural de la UEFA Nations League."
        ],
        estadisticas: [
            { label: "Apariciones", value: "8" },
            { label: "Mejor Fase", value: "3er" },
            { label: "Ranking", value: "6°" }
        ],
        partidos: [
            { rival: "vs RD Congo", fecha: "15 de Junio, 2026", estadio: "MetLife Stadium (NY/NJ)" },
            { rival: "vs Uzbekistán", fecha: "20 de Junio, 2026", estadio: "Gillette Stadium (Boston)" },
            { rival: "vs Colombia", fecha: "25 de Junio, 2026", estadio: "Hard Rock Stadium (Miami)" }
        ]
    },
    congo: {
        nombre: "SELECCIÓN DE RD CONGO",
        historia: "¡Los Leopardos regresan a la gran cita mundialista! Esta será apenas su segunda participación histórica tras su debut en 1974 bajo el nombre de Zaire. Son un equipo caracterizado por su imponente fortaleza física y gran velocidad en las transiciones.",
        curiosidades: [
            "Fueron la primera nación del África subsahariana en lograr la clasificación a una Copa del Mundo de la FIFA.",
            "Han conquistado la Copa Africana de Naciones en dos ocasiones (1968 y 1974)."
        ],
        estadisticas: [
            { label: "Apariciones", value: "2" },
            { label: "Mejor Fase", value: "Grupos" },
            { label: "Ranking", value: "63°" }
        ],
        partidos: [
            { rival: "vs Portugal", fecha: "15 de Junio, 2026", estadio: "MetLife Stadium (NY/NJ)" },
            { rival: "vs Colombia", fecha: "19 de Junio, 2026", estadio: "BMO Field (Toronto)" },
            { rival: "vs Uzbekistán", fecha: "24 de Junio, 2026", estadio: "Mercedes-Benz Stadium (Atlanta)" }
        ]
    },
    uzbekistan: {
        nombre: "SELECCIÓN DE UZBEKISTÁN",
        historia: "¡Debutantes absolutos! Los 'Lobos Blancos' han hecho historia al clasificar por primera vez a un Mundial. Representan el increíble desarrollo táctico y técnico del fútbol de Asia Central y prometen ser un rival ordenado que no regalará espacios.",
        curiosidades: [
            "Es el primer equipo de Asia Central en clasificar al torneo desde la disolución de la Unión Soviética.",
            "Eldor Shomurodov es su máximo referente histórico, abriendo camino en ligas top de Europa."
        ],
        estadisticas: [
            { label: "Apariciones", value: "1" },
            { label: "Mejor Fase", value: "Debut" },
            { label: "Ranking", value: "64°" }
        ],
        partidos: [
            { rival: "vs Colombia", fecha: "14 de Junio, 2026", estadio: "Levi's Stadium (San Francisco)" },
            { rival: "vs Portugal", fecha: "20 de Junio, 2026", estadio: "Gillette Stadium (Boston)" },
            { rival: "vs RD Congo", fecha: "24 de Junio, 2026", estadio: "Mercedes-Benz Stadium (Atlanta)" }
        ]
    },
    colombia: {
        nombre: "SELECCIÓN DE COLOMBIA",
        historia: "La escuadra Tricolor vuelve a la máxima competición mundial buscando superar la histórica actuación que lograron en Brasil 2014. Con un estilo de juego alegre, fuerte presión alta y letalidad ofensiva, aspiran a ser protagonistas en Norteamérica.",
        curiosidades: [
            "Acumularon uno de los invictos más largos de su historia durante el proceso de clasificación bajo el mando de Néstor Lorenzo.",
            "La selección de 2014 ganó el Premio Puskás y el Botín de Oro con James Rodríguez."
        ],
        estadisticas: [
            { label: "Apariciones", value: "7" },
            { label: "Mejor Fase", value: "4tos" },
            { label: "Ranking", value: "12°" }
        ],
        partidos: [
            { rival: "vs Uzbekistán", fecha: "14 de Junio, 2026", estadio: "Levi's Stadium (San Francisco)" },
            { rival: "vs RD Congo", fecha: "19 de Junio, 2026", estadio: "BMO Field (Toronto)" },
            { rival: "vs Portugal", fecha: "25 de Junio, 2026", estadio: "Hard Rock Stadium (Miami)" }
        ]
    }
};

function abrirModal(equipoId) {
    const modal = document.getElementById('modal-equipo');
    const datos = datosEquipos[equipoId];

    document.getElementById('modal-titulo').textContent = datos.nombre;
    document.getElementById('modal-historia').textContent = datos.historia;

    const listaCuriosidades = document.getElementById('modal-curiosidades');
    listaCuriosidades.innerHTML = '';
    datos.curiosidades.forEach(curiosidad => {
        const li = document.createElement('li');
        li.textContent = curiosidad;
        listaCuriosidades.appendChild(li);
    });

    const gridEstadisticas = document.getElementById('modal-estadisticas');
    gridEstadisticas.innerHTML = '';
    datos.estadisticas.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        gridEstadisticas.appendChild(card);
    });

    const listaPartidos = document.getElementById('modal-partidos');
    listaPartidos.innerHTML = '';
    datos.partidos.forEach(partido => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${partido.rival}</strong>
            <span>📅 ${partido.fecha}</span>
            <span>🏟️ ${partido.estadio}</span>
        `;
        listaPartidos.appendChild(li);
    });

    modal.classList.add('activo');
}

function cerrarModal() {
    document.getElementById('modal-equipo').classList.remove('activo');
}

window.onclick = function (event) {
    const modal = document.getElementById('modal-equipo');
    if (event.target === modal) {
        cerrarModal();
    }
}