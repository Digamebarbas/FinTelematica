document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Gracias por contactarnos, ${nombre}! Hemos recibido tu mensaje.`);

    document.getElementById('contact-form').reset();
});

