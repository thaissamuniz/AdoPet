import { apps } from "./index.js";

const form = document.querySelector('.main__form');
const emailInput = document.querySelector('.email');

emailInput.addEventListener('focusout', () => {
    let divMessage = document.querySelector('.main__error--msg');
    if (!apps.validateEmail(emailInput.value)) {
        divMessage.innerHTML = 'formato de email inválido';
        divMessage.style.display = 'block';
    } else {
        divMessage.style.display = 'none';
    }
});

form.addEventListener('submit', async e => {
    e.preventDefault();

    const password = document.querySelector('.password');
    const div = document.querySelector('.main__login--msg');

    const userEmail = emailInput.value;
    const userPassword = password.value;

    const response = await apps.login(userEmail, userPassword);

    if (response.status !== 200) {
        div.innerHTML = 'email ou senha inválidos.';
        div.style.display = 'block';
    } else {
        const responseText = await response.text();
        localStorage.setItem("token", responseText.slice(9));
        div.style.display = 'none';
        location.href = '../home.html';
    }
});