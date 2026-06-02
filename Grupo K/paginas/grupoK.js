let datosGrupoK = [
    { posicion: 1, pais: "Colombia", confederacion: "CONMEBOL", dt: "Néstor Lorenzo", capitan: "James Rodríguez", pj: 0, g: 0, e: 0, p: 0, pts: 0 },
    { posicion: 2, pais: "Portugal", confederacion: "UEFA", dt: "Roberto Martínez", capitan: "Cristiano Ronaldo", pj: 0, g: 0, e: 0, p: 0, pts: 0 },
    { posicion: 3, pais: "RD Congo", confederacion: "CAF", dt: "Sébastien Desabre", capitan: "Chancel Mbemba", pj: 0, g: 0, e: 0, p: 0, pts: 0 },
    { posicion: 4, pais: "Uzbekistán", confederacion: "AFC", dt: "Srečko Katanec", capitan: "Eldor Shomurodov", pj: 0, g: 0, e: 0, p: 0, pts: 0 }
];

function inicializarPagina() {
    construirTabla();
    construirTarjetasEquipos();
    setTimeout(ajustarIndicadorInicial, 100);
}

function construirTabla() {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let contenidoHTML = "";

    for (let i = 0; i < datosGrupoK.length; i++) {
        let equipo = datosGrupoK[i];
        contenidoHTML += "<tr>";
        contenidoHTML += "<td>" + equipo.posicion + "</td>";
        contenidoHTML += "<td>" + equipo.pais + "</td>";
        contenidoHTML += "<td>" + equipo.pj + "</td>";
        contenidoHTML += "<td>" + equipo.g + "</td>";
        contenidoHTML += "<td>" + equipo.e + "</td>";
        contenidoHTML += "<td>" + equipo.p + "</td>";
        contenidoHTML += "<td>" + equipo.pts + "</td>";
        contenidoHTML += "</tr>";
    }

    cuerpoTabla.innerHTML = contenidoHTML;
}

function construirTarjetasEquipos() {
    let contenedor = document.getElementById("contenedorEquipos");
    let contenidoHTML = "";

    for (let i = 0; i < datosGrupoK.length; i++) {
        let equipo = datosGrupoK[i];
        contenidoHTML += "<div class='tarjeta-equipo'>";
        contenidoHTML += "<h3 class='nombre-pais'>" + equipo.pais + "</h3>";
        contenidoHTML += "<span class='confederacion'>" + equipo.confederacion + "</span>";
        contenidoHTML += "<div class='datos-equipo'>";
        contenidoHTML += "<p>Director Técnico: <strong>" + equipo.dt + "</strong></p>";
        contenidoHTML += "<p>Capitán: <strong>" + equipo.capitan + "</strong></p>";
        contenidoHTML += "</div>";
        contenidoHTML += "</div>";
    }

    contenedor.innerHTML = contenidoHTML;
}

function ajustarIndicadorInicial() {
    let botonActivo = document.querySelector(".nav-item.activo");
    if (botonActivo) {
        moverIndicador(botonActivo);
    }
}

function moverIndicador(boton) {
    let indicadorNeon = document.getElementById("indicadorNeon");
    indicadorNeon.style.width = boton.offsetWidth + "px";
    indicadorNeon.style.left = boton.offsetLeft + "px";
}

function cambiarPantalla(botonPresionado) {
    let botonesMenu = document.getElementsByClassName("nav-item");
    for (let i = 0; i < botonesMenu.length; i++) {
        botonesMenu[i].classList.remove("activo");
    }

    botonPresionado.classList.add("activo");
    moverIndicador(botonPresionado);

    let pantallas = document.getElementsByClassName("seccion-pantalla");
    for (let i = 0; i < pantallas.length; i++) {
        pantallas[i].classList.remove("activa");
    }

    let idDestino = botonPresionado.getAttribute("data-target");
    document.getElementById(idDestino).classList.add("activa");
}

window.onload = inicializarPagina;