document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const correo = document.getElementById('correo').value;
      
      // Guardar el mensaje en el almacenamiento local
      const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
      contactMessages.push({ nombre, apellido, correo });
      localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
      
      // Mostrar un mensaje de éxito
      alert('¡Mensaje enviado con éxito!');
      
      // Reiniciar el formulario
      contactForm.reset();
  });
});