document.getElementById('reservaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
  
    // Validación simple
    const nombre = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
  
    if (!nombre || !email) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    // Simulación de envío con AJAX
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        checkin: document.getElementById('inputCheckIn').value,
        checkout: document.getElementById('inputCheckOut').value,
        genero: document.querySelector('input[name="Genero"]:checked')?.value,
        turismo: Array.from(document.querySelectorAll('input[name="Turismo"]:checked')).map(
          (checkbox) => checkbox.value
        ),
        comentarios: document.getElementById('inputComments').value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById('mensajeExito').classList.remove('d-none');
          document.getElementById('reservaForm').reset(); // Limpia el formulario
        } else {
          alert('Hubo un problema al enviar la reserva. Inténtelo de nuevo.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error de conexión. Inténtelo más tarde.');
      });
  });
  