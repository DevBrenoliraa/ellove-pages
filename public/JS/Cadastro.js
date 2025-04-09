const btnSignup = document.getElementById('btn-signup');
btnSignup.addEventListener('click', createAccount); 

const regexUser = /^[a-zA-Z0-9._]{4,16}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^[A-Za-z\d@$!%*?&]{6,}$/;

function createAccount(event) {

    event.preventDefault(); // Impede que a página recarregue

    const username = document.getElementById('username').value.trim(); //.trim() --> Remove os espaços em branco para não dar erro
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (!username || !email || !password || !confirmPassword) {
        alert("Por favor, preencha todos os campos!");
        return;
    }
        
    if (!regexUser.test(username)) {
        alert("Nome de usuário inválido! Use de 4 a 16 caracteres, contendo apenas letras, números, pontos ou underlines.");
        return;
    }

    if (!regexEmail.test(email)) {
        alert("Email inválido!");
        return;
    }

    if (!regexPassword.test(password)) {
        alert("Senha precisa ter no mínimo 6 caracteres (letras, números ou @$!%*?&)");
        return;
    } 

    if (confirmPassword !== password) {
        alert("As senhas não coincidem!");
        return;
    }

    alert("Conta criada com sucesso!");
}

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('toggle-password');
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function() {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    if (toggleConfirmPassword && confirmPassword) {
        toggleConfirmPassword.addEventListener('click', function() {
            const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPassword.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});