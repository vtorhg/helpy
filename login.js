// Seleção dos elementos do formulário no HTML
const loginForm = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Escuta o evento de clique no botão de envio
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede que a página recarregue e limpe os campos

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

    // Expressão regular para validar formato padrão de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Por favor, insira um e-mail válido.');
        emailInput.focus();
        return;
    }

    // Regra de validação para tamanho mínimo da senha
    if (passwordValue.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        passwordInput.focus();
        return;
    }

    // Redireciona automaticamente o navegador para a tela de problemas (helpy.html)
    window.location.href = "helpy.html";
});
