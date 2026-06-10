const datosEquipos = {
    mexico: {
        nombre: "MÉXICO",
        historia: 'La Selección Mexicana de Fútbol se fundó en 1923 y su historia mundialista comenzó en Uruguay 1930, donde disputó el partido inaugural frente a Francia. A pesar de ser una potencia histórica en la Concacaf (con múltiples títulos continentales), a nivel global ha enfrentado años de frustración, sumando 28 derrotas en Mundiales',
        curiosidades: 'La Selección Mexicana de Fútbol tiene una rica historia llena de datos únicos, desde haber protagonizado el partido inaugural del primer mundial de la historia hasta hitos individuales, récords de jugadores históricos y curiosidades en sus uniformes.',
        participaciones: [
            "1930 — Uruguay",
            "1950 — Brasil",
            "1954 — Suiza",
            "1958 — Suecia",
            "1962 — Chile",
            "1966 — Inglaterra",
            "1970 — México (Anfitrión)",
            "1978 — Argentina",
            "1986 — México (Anfitrión)",
            "1994 — Estados Unidos",
            "1998 — Francia",
            "2002 — Corea del Sur / Japón",
            "2006 — Alemania",
            "2010 — Sudáfrica",
            "2014 — Brasil",
            "2018 — Rusia",
            "2022 — Qatar",
            '2026 — Estados Unidos / México / Canadá'
        ],
        estadísticasPrincipales: `<table class="tabla-estadisticas">
            <tr><td>Mejor resultado</td><td>Cuartos de final</td></tr>
            <tr><td>Ranking FIFA (junio 2026)</td><td>15.º</td></tr>
        </table>`,
        partidos: [
            { rival: "vs Sudáfrica", fecha: "Jueves 11 de Junio, 2026", estadio: "Mexico City Stadium", hora: "14:00 UTC-5" },
            { rival: "vs Corea del Sur", fecha: "Jueves 18 de Junio, 2026", estadio: "Estadio Guadalajara", hora: "20:00 UTC-5" },
            { rival: "vs R. Checa", fecha: "Miércoles 24 de Junio, 2026", estadio: "Mexico City Stadium", hora: "20:00 UTC-5" }
        ]
    },
    sudáfrica: {
        nombre: "SUDÁFRICA",
        historia: 'La selección de Sudáfrica, apodada los "Bafana Bafana", tiene una historia reciente marcada por el Apartheid. Estuvieron vetados por la FIFA por más de 30 años. Tras su readmisión, ganaron la Copa Africana de Naciones en 1996 y organizaron el Mundial de 2010, siendo la única nación anfitriona eliminada en primera fase.',
        curiosidades: 'Su historia está profundamente ligada a la superación del apartheid y a la unificación de su sociedad multicultural.',
        participaciones: [
            '1998 — Francia',
            '2002 — Corea del Sur / Japón',
            '2010 — Sudáfrica (Anfitrión)',
            '2026 — Estados Unidos / México / Canadá'
        ],
        estadísticasPrincipales: `<table class="tabla-estadisticas">
            <tr><td>Mejor resultado</td><td>Fase de grupos</td></tr>
            <tr><td>Ranking FIFA (junio 2026)</td><td>55.º</td></tr>
        </table>`,
        partidos: [
            { rival: "vs México", fecha: "Jueves 11 de Junio, 2026", estadio: "Mexico City Stadium", hora: "14:00 UTC-5" },
            { rival: "vs R. Checa", fecha: "Jueves 18 de Junio, 2026", estadio: "Atlanta Stadium", hora: "11:00 UTC-5" },
            { rival: "vs Corea del Sur", fecha: "Miércoles 24 de Junio, 2026", estadio: "Estadio Monterrey", hora: "20:00 UTC-5" }
        ]
    },
    corea_del_sur: {
        nombre: "COREA DEL SUR",
        historia: 'La selección de Corea del Sur (conocida como los "Guerreros Taegeuk") pasó de encajar goleadas históricas a ser una potencia asiática con 11 clasificaciones consecutivas a la Copa del Mundo. Su momento cumbre ocurrió cuando coorganizó el torneo en 2002, eliminando a potencias y alcanzando el cuarto lugar.',
        curiosidades: 'Es la más exitosa de Asia, destacando por su histórico 4.º lugar en el Mundial 2002 además se caracterizan por una disciplina táctica y una velocidad letal.',
        participaciones: [
            '1954 — Suiza',
            '1986 — México',
            '1990 — Italia',
            '1994 — Estados Unidos',
            '1998 — Francia',
            '2002 — Corea del Sur / Japón',
            '2006 — Alemania',
            '2010 — Sudáfrica',
            '2014 — Brasil',
            '2018 — Rusia',
            '2022 — Qatar',
            '2026 — Estados Unidos / México / Canadá'
        ],
        estadísticasPrincipales: `<table class="tabla-estadisticas">
            <tr><td>Mejor resultado</td><td>Cuarto lugar</td></tr>
            <tr><td>Ranking FIFA (junio 2026)</td><td>25.º</td></tr>
        </table>`,
        partidos: [
            { rival: "vs R. Checa", fecha: "Jueves 11 de Junio, 2026", estadio: "Estadio Guadalajara", hora: "21:00 UTC-5" },
            { rival: "vs México", fecha: "Jueves 18 de Junio, 2026", estadio: "Estadio Guadalajara", hora: "20:00 UTC-5" },
            { rival: "vs Sudáfrica", fecha: "Miércoles 24 de Junio, 2026", estadio: "Estadio Monterrey", hora: "20:00 UTC-5" }
        ]
    },
    r_Checa: {
        nombre: "CHEQUIA",
        historia: 'La selección de Chequia (oficialmente República Checa) es una de las grandes potencias europeas. Heredera histórica de la antigua Checoslovaquia, conserva un legado de enorme calidad y una escuela basada en la disciplina táctica, la inteligencia y la técnica, que la ha convertido en un rival siempre temido a nivel internacional',
        curiosidades: 'Heredera de la gran escuela checoslovaca, su historia está marcada por dos subcampeonatos mundiales, la invención del penal más famoso y el regreso a la élite de la mano de Patrik Schick',
        participaciones: [
            '1934 — Italia', 
            '1938 — Francia',
            '1954 — Suiza ',
            '1958 — Suecia ',
            '1962 — Chile ',
            '1970 — México ',
            '1982 — España ',
            '1990 — Italia ',
            "2006 — Alemania",
            '2026 — Estados Unidos / México / Canadá'

        ],
        estadísticasPrincipales: `<table class="tabla-estadisticas">
            <tr><td>Mejor resultado</td><td>Subcampeonato</td></tr>
            <tr><td>Ranking FIFA (junio 2026)</td><td>44.º</td></tr>
        </table>`,
        partidos: [
            { rival: "vs Corea del Sur", fecha: "Jueves 11 de Junio, 2026", estadio: "Estadio Guadalajara", hora: "21:00 UTC-5" },
            { rival: "vs Sudáfrica", fecha: "Jueves 18 de Junio, 2026", estadio: "Atlanta Stadium", hora: "11:00 UTC-5" },
            { rival: "vs México", fecha: "Miercoles 24 de Junio, 2026", estadio: "Mexico City Stadium", hora: "20:00 UTC-5" }
        ]
    }
};

function construirEstadisticas(datos) {
    let html = '';

    // Acordeón de participaciones (solo si hay datos)
    if (datos.participaciones && datos.participaciones.length > 0) {
        html += `
        <div class="acordeon-participaciones">
            <button class="acordeon-btn" onclick="toggleAcordeon(this)" aria-expanded="false">
                <span class="acordeon-label">
                    🏆 Participaciones mundiales
                    <span class="acordeon-count">${datos.participaciones.length}</span>
                </span>
                <span class="acordeon-flecha">&#8964;</span>
            </button>
            <div class="acordeon-panel" aria-hidden="true">
                <ul class="lista-participaciones">
                    ${datos.participaciones.map((p, i) => `<li><span class="num-edicion">${i + 1}</span>${p}</li>`).join('')}
                </ul>
            </div>
        </div>`;
    }

    // Tabla de otras estadísticas
    if (datos.estadísticasPrincipales && datos.estadísticasPrincipales !== '..' && datos.estadísticasPrincipales !== '') {
        html += datos.estadísticasPrincipales;
    }

    return html || '<p>Sin datos disponibles.</p>';
}

function toggleAcordeon(btn) {
    const panel = btn.nextElementSibling;
    const flecha = btn.querySelector('.acordeon-flecha');
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !expanded);
    panel.setAttribute('aria-hidden', expanded);
    btn.classList.toggle('abierto', !expanded);
    panel.classList.toggle('abierto', !expanded);
}

function abrirModal(equipoId) {
    const modal = document.getElementById('modal-equipo');
    const titulo = document.getElementById('modal-titulo');
    const historia = document.getElementById('modal-historia');
    const curiosidades = document.getElementById('modal-curiosidades');
    const estadísticasPrincipales = document.getElementById('modal-estadísticasPrincipales');
    const listaPartidos = document.getElementById('modal-partidos');
    const datos = datosEquipos[equipoId];

    titulo.textContent = datos.nombre;
    historia.textContent = datos.historia;
    curiosidades.textContent = datos.curiosidades;
    estadísticasPrincipales.innerHTML = construirEstadisticas(datos);
    listaPartidos.innerHTML = '';

    datos.partidos.forEach(partido => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${partido.rival}</strong><span>📅 Fecha: ${partido.fecha}</span><span>🏟️ Sede: ${partido.estadio}</span><span>⏱️ Hora: ${partido.hora}</span>`;
        listaPartidos.appendChild(li);
    });

    modal.classList.add('activo');
}

function cerrarModal() {
    document.getElementById('modal-equipo').classList.remove('activo');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-equipo');
    if (event.target === modal) cerrarModal();
}