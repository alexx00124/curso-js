document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mensajeDiv = document.getElementById("mensaje");

    if (nombre !== "") {
        mensajeDiv.textContent = `¡Bienvenido, ${nombre}!`;
        mensajeDiv.classList.add("visible");
        document.getElementById("nombre").value = '';
    } else {
        mensajeDiv.textContent = 'Por favor, escribe tu nombre.';
        mensajeDiv.classList.add("visible");
    }
});