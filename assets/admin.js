document.addEventListener('DOMContentLoaded', function() {
    const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const tableBody = document.getElementById('contactMessages');

    function loadMessages() {
        tableBody.innerHTML = '';
        contactMessages.forEach((message, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${message.nombre}</td>
                <td>${message.apellido}</td>
                <td>${message.correo}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteMessage(${index})">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.deleteMessage = function(index) {
        contactMessages.splice(index, 1);
        localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
        loadMessages();
    }

    loadMessages();

    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Implementar lógica de cierre de sesión aquí
        window.location.href = 'index.html';
    });
});