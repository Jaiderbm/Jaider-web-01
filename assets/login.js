document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    let users = JSON.parse(localStorage.getItem('users')) || [];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert('Sesión iniciada con éxito');
            // Redirigir al panel de administración
            window.location.href = 'admin.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const lastName = document.getElementById('registerLastName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const isAdmin = document.getElementById('isAdmin').value === 'true';

        if (users.some(u => u.email === email)) {
            alert('Este correo electrónico ya está registrado');
        } else {
            users.push({ name, lastName, email, password, isAdmin });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso. Ahora puedes iniciar sesión');
            registerForm.reset();
            document.getElementById('pills-login-tab').click();
        }
    });
});