import { apps } from "./index.js";

const form = document.querySelector('.main__form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const emailInput = document.querySelector('.email');
    const inputName = document.querySelector('.name');
    const passwordInput = document.querySelector('.password');
    const confPass = document.querySelector('.confirmPass');


    if ((!apps.validateEmail(emailInput.value) || !apps.validateData(passwordInput.value)) || (passwordInput.value != confPass.value)) {
        console.log('formato de email, senha ou nome invalidos');

        if (!apps.validateEmail(emailInput.value)) {
            console.log('insira um formato de email valido');
        }
        if (passwordInput.value != confPass.value) {
            console.log('as senhas devem ser iguais');
        }

        if (inputName.value == "") {
            console.log('Nome inválido');
        }

        if (!apps.validateEmail(passwordInput.value)) {
            console.log('a senha deve conter no minimo 8 caracteres');
        }
    } else {
        apps.createProfile(emailInput.value, inputName.value, passwordInput.value, '', '', '').then(() => {
            window.location.href = '../login.html'
        });

        console.log('tudo certo');
    }

    // if (passwordInput.value != confPass.value) {
    //     console.log('as senhas devem ser iguais');
    // } else {

    //     const newDiv = document.createElement('div');
    //     newDiv.innerHTML = 'cadastro feito com sucesso';
    //     form.appendChild(newDiv);
    // }



    emailInput.value = '';
    passwordInput.value = '';
    inputName.value = '';
    confPass.value = '';


});