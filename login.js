const loginForm = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Por favor, insira um e-mail válido.');
        emailInput.focus();
        return;
    }

    if (passwordValue.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        passwordInput.focus();
        return;
    }

    window.location.href = "helpy.html";
});
