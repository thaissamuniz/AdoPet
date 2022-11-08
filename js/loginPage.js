
const form = document.querySelector('.main__form');
const password = document.querySelector('.password');

import { apps } from "./index.js";

/// const profileListEmail = (email) => {
///     return fetch(`http://localhost:3000/profiles?email=${email}`)
///         .then(response => {
///             return response.json()
///         })
/// }



window.addEventListener('load', () => {
    if (localStorage.getItem('user')) {
        const userString = localStorage.getItem('user')
        const user = JSON.parse(userString)
        location.href = '../home.html'
    } else {
        
    }
})





// profileListEmail(email).then(data => {
//     data.find(mail => {
//         if (mail === data.email) {
//             location.href = '../home.html'
//         } else {
//             location.href = '../login.html'
//         }
//     })

// })


// const userString = localStorage.getItem('user')

// if (userString) {
//     const user = JSON.parse(userString)
//     if (user.email) {

//         // consultar no servidor por esse email /profiles?email=${email}

//         // e validar se existe

//         //caso exista redirecionar para a página home


//         //caso não exista, limpar o valor na chave do usuário
//     }

// }

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


                window.location.href = '../home.html'
            } else {
                let divMsg = document.createElement('div');
                divMsg.innerHTML = 'email ou senha inválidos'
                form.appendChild(divMsg);
            }


        });

    })



    if (!apps.validateEmail(email.value) || !apps.validateData(password.value)) {
        console.log('formato de email, senha ou nome invalidos')
    }


})

