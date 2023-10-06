import { apps } from "./index.js";

const form = document.querySelector('.main__form');

const emailInput = document.querySelector('.email');
const nameInput = document.querySelector('.name');
const passwordInput = document.querySelector('.password');
const confPassInput = document.querySelector('.confirmPass');
const accountType = document.querySelector('#accountType');

const emailError = document.querySelector('.email__error');
const nameError = document.querySelector('.name__error');
const passError = document.querySelector('.password__error');
const confirmPassError = document.querySelector('.confirmPassword__error');
const accountTypeError = document.querySelector('.accountType__error');

emailInput.addEventListener('focusout', () => {
    if (!apps.validateEmail(emailInput.value)) {
        emailError.innerHTML = 'insira um email válido.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

nameInput.addEventListener('focusout', () => {
    if (nameInput.value.length < 3) {
        nameError.innerHTML = 'O nome deve ter pelo menos 3 letras.';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
});

passwordInput.addEventListener('focusout', () => {
    if (passwordInput.value.length < 6) {
        passError.innerHTML = 'A senha deve conter ao menos 6 caracteres.';
        passError.style.display = 'block';
    } else {
        passError.style.display = 'none';
    }
});

confPassInput.addEventListener('focusout', () => {
    if (confPassInput.value !== passwordInput.value) {
        confirmPassError.innerHTML = 'As duas senhas devem ser iguais.';
        confirmPassError.style.display = 'block';
    } else {
        confirmPassError.style.display = 'none';
    }
});
let role = "";

accountType.addEventListener('focusout', () => {
    if (accountType.value == "") {
        accountTypeError.innerHTML = 'selecione seu tipo de conta.';
        accountTypeError.style.display = 'block';
    } else {
        accountTypeError.style.display = 'none';
    }
    role = accountType.value == "abrigo" ? "admin" : "user";
});


form.addEventListener('submit', async e => {
    e.preventDefault();
    if (nameInput.value.length < 3 || (!apps.validateEmail(emailInput.value) || !apps.validateData(passwordInput.value)) || (passwordInput.value != confPassInput.value)) {
        return
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            accountType: accountType.value,
            role: role,
        })
    }
    const response = await fetch('http://localhost:3000/users', requestOptions);
    if (response.status == 401) {
        alert("email já cadastrato. por favor, informe um novo email.");
    } else {
        alert("cadastro realizado com sucesso! vá até a pagina de login e informe suas credenciais.");
    }
});