// Lógica del formulario con AJAX para enviar datos sin recargar la página
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario

    var formData = new FormData(this);

    fetch('procesar_formulario.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Mostrar mensaje de éxito
            document.getElementById('responseMessage').classList.remove('hidden');
            document.getElementById('contactForm').reset(); // Limpiar formulario
        } else {
            // Aquí puedes manejar errores si es necesario
            alert('Hubo un error al enviar el formulario.');
        }
    })
    .catch(error => {
        // Manejar errores de la red
        alert('Hubo un problema con la solicitud.');
    });
});






