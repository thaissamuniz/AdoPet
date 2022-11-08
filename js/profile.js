import { apps } from "./index.js";

// const getUrl = new URL(window.location);
// const id = getUrl.searchParams.get('id');

const user = JSON.parse(localStorage.user);
const userID = user.id;
const userEmail = user.email;
const userPass = user.password;

console.log(userPass);


console.log(userEmail);
console.log(userID);

let formEl = document.querySelector('.forms');
let nameEl = document.querySelector('.name');
let telEl = document.querySelector('.tel');
let localEl = document.querySelector('.local');
let aboutEl = document.getElementById('message');
let idEl = document.querySelector('.id');


const profileDetail = (userID) => {
    return fetch(`http://localhost:3000/profiles/${userID}`)
        .then(response => {
            return response.json()
        })
}


profileDetail(userID).then(data => {
    nameEl.value = data.name;

    if (data.tel) {
        telEl.value = data.tel;
    } else {
        telEl.placeholder = 'digite um número para contato';
    }


    if (data.local) {
        localEl.value = data.local;
    } else {
        localEl.placeholder = 'digite aqui sua cidade';
    }

    if (data.about) {
        aboutEl.value = data.about;
    } else {
        aboutEl.placeholder = 'diga algo legal sobre você'
    }

    idEl.value = data.id;
});


// apps.profilesList().then(data => {

//     //const profile = data[0];
//     // nameEl.value = profile.name

//     if (data.tel) {
//         telEl.value = data.tel;
//     }
//     if (data.local) {
//         localEl.value = data.local
//     }
//     if (data.about) {
//         aboutEl.value = data.about

//     }
//     idEl.value = data.id
// })


formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    apps.update(userEmail, nameEl.value, userPass, telEl.value, localEl.value, aboutEl.value, userID).then(() => {
        console.log('ok');
    })
})


