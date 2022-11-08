
// const emailInput = document.querySelector('.email');
const form = document.querySelector('.main__form');
// const passwordInput = document.querySelector('.password');
// const confPass = document.querySelector('.confirmPass');
// const inputName = document.querySelector('.name');
import { apps } from "./index.js";

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const emailInput = document.querySelector('.email');
    const inputName = document.querySelector('.name');
    const passwordInput = document.querySelector('.password');
    const confPass = document.querySelector('.confirmPass');

    
    if (!apps.validateEmail(emailInput.value) || !apps.validateData(passwordInput.value) || !apps.validateData(inputName.value)) {
        console.log('formato de email, senha ou nome invalidos')
    } else {
        console.log('tudo certo')
    }
    
    if (passwordInput.value != confPass.value) {
        console.log('as senhas devem ser iguais');
    } else {
        
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'cadastro feito com sucesso';
        form.appendChild(newDiv);
    }
    
    
    apps.createProfile(emailInput.value, inputName.value, passwordInput.value, confPass.value, '', '', '').then(() => {
        window.location.href = '../login.html'
    });

    emailInput.value = '';
    passwordInput.value = '';
    inputName.value = '';
    confPass.value = '';


})




