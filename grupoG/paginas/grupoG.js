// Abre el modal agregando la clase activa
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('activo');
    }
}

// Cierra el modal removiendo la clase activa
function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('activo');
    }
}

// Permite cerrar el modal haciendo clic afuera en la zona oscura
function cerrarModalExterno(event, idModal) {
    const modal = document.getElementById(idModal);
    if (event.target === modal) {
        cerrarModal(idModal);
    }
}