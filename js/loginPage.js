import { apps } from "./index.js";
import { utils } from "./utils.js";

const form = document.querySelector('.main__form');
const emailInput = document.querySelector('.email');

passwordHidden.addEventListener('click', () => {
    password.type == 'password' ? password.type = 'text' : password.type = 'password';
    passwordHidden.classList.toggle('pass__open');
});

emailInput.addEventListener('focusout', () => {
    let divMessage = document.querySelector('.main__error--msg');
    if (!utils.validateEmail(emailInput.value)) {
        divMessage.innerHTML = 'formato de email inválido';
        divMessage.style.display = 'block';
    } else {
        divMessage.style.display = 'none';
    }
});

btn.addEventListener('click', () => {
    loading.style.display = 'block';
});

form.addEventListener('submit', async e => {
    e.preventDefault();

    const password = document.querySelector('#password');
    const div = document.querySelector('.main__login--msg');

    const userEmail = emailInput.value;
    const userPassword = password.value;

    const response = await apps.login(userEmail, userPassword);

    if (response.status !== 200) {
        div.innerHTML = 'email ou senha inválidos.';
        div.style.display = 'block';
        loading.style.display = 'none';
    } else {
        const responseText = await response.text();
        const responseJson = JSON.parse(responseText);

        for (const key in responseJson) {
            if (responseJson.hasOwnProperty.call(responseJson, key)) {
                const element = responseJson[key];
                localStorage.setItem(`${key}`, element);
            }
        }

        div.style.display = 'none';
        location.href = '../home.html';
    }
});