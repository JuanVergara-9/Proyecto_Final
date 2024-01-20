document.addEventListener('DOMContentLoaded', function () {
    const $btnSignIn = document.querySelector('.sign-in-btn'),
        $btnSignUp = document.querySelector('.sign-up-btn'),
        $signUp = document.querySelector('.sign-up'),
        $signIn = document.querySelector('.sign-in'),
        $loginForm = document.getElementById('loginForm'),
        $signupForm = document.getElementById('signupForm');

    document.addEventListener('click', e => {
        if (e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active');
        }
    });

    const $loginButton = document.getElementById('loginButton');
    if ($loginButton) {
        $loginButton.addEventListener('click', function () {
            const username = $loginForm.querySelector('#loginUsername').value;
            const password = $loginForm.querySelector('#loginPassword').value;

            console.log('Iniciar Sesión - Usuario:', username, 'Contraseña:', password);


            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        });
    }

    const $signupButton = document.getElementById('signupButton');
    if ($signupButton) {
        $signupButton.addEventListener('click', function () {
            const name = $signupForm.querySelector('#signupName').value;
            const email = $signupForm.querySelector('#signupEmail').value;
            const password = $signupForm.querySelector('#signupPassword').value;

            console.log('Registro - Nombre:', name, 'Email:', email, 'Contraseña:', password);

            // Almacena
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        });
    }
});
