import { apps } from "./index.js";

const form = document.querySelector('.main__form');
const password = document.querySelector('.password');
const btn = document.getElementById('btn');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const email = document.querySelector('.email');

    apps.profilesList().then(profiles => {

        profiles.find(profile => {

            if (profile.email === email.value && profile.password === password.value) {

                //delete profile.password
                delete profile.cidade
                delete profile.telefone
                delete profile.sobre

                const profileString = JSON.stringify(profile)
                localStorage.setItem('user', profileString)


                window.location.href = '../home.html';

            }

        });

    });


    if (!apps.validateEmail(email.value) || !apps.validateData(password.value)) {
        console.log('formato de email, senha ou nome invalidos');
        let divMsg = document.createElement('div');
        divMsg.style.marginBottom = '100px';
        divMsg.style.color = 'red';
        divMsg.innerHTML = 'email ou senha inválidos';
        btn.style.marginBottom = '130px';
        form.appendChild(divMsg);

    }

});

