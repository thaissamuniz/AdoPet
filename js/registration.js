import { apps } from "./index.js";
import { utils } from "./utils.js";

const form = document.querySelector('.main__form');

const emailInput = document.querySelector('.email');
const nameInput = document.querySelector('.name');
const passwordInput = document.querySelector('.password');
const confPassInput = document.querySelector('.confirmPass');
const accountType = document.querySelector('#accountType');
const msgP = document.querySelector('.main__info--msg');

const emailError = document.querySelector('.email__error');
const nameError = document.querySelector('.name__error');
const passError = document.querySelector('.password__error');
const confirmPassError = document.querySelector('.confirmPassword__error');
const accountTypeError = document.querySelector('.accountType__error');
const msg = document.querySelector('.main__info');

emailInput.addEventListener('focusout', () => {
    if (!utils.validateEmail(emailInput.value)) {
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
    if (nameInput.value.length < 3 || (!utils.validateEmail(emailInput.value) || !utils.validateData(passwordInput.value)) || (passwordInput.value != confPassInput.value)) {
        return
    }

    const response = await apps.createUser(nameInput.value, emailInput.value, passwordInput.value, accountType.value, role);
    if (response.status == 401) {
        msgP.innerHTML = `email já cadastrado. por favor, informe um novo email.`;
        msg.style.display = 'flex';
    } else {
        msgP.innerHTML = `cadastro concluido com sucesso! <a href="login.html" class="main__info--link">clique aqui para fazer login</a>`;
        msg.style.display = 'flex';
    }
});

closeInfo.addEventListener('click', () => {
    msg.style.display = 'none';
});