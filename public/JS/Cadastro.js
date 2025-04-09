const btnSignup = document.getElementById('btn-signup');
btnSignup.addEventListener('click', createAccount);

const regexUser = /^[a-zA-Z0-9._]{4,16}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function createAccount() {

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (!username || !email || !password || !confirmPassword) {
        alert("Por favor, preencha todos os campos!")
        return
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
        alert("Senha inválida! Ela deve conter pelo menos 8 caracteres, incluindo:\n- Uma letra minúscula\n- Uma letra maiúscula\n- Um número\n- Um caractere especial (@, $, !, %, *, ?, &)");
        return;
    }

    if (confirmPassword !== password) {
        alert("As senhas não coincidem!");
        return;
    }

    alert("Conta criada com sucesso!");
}
