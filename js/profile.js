import { apps } from "./index.js";

const user = JSON.parse(localStorage.user);
const userID = user.id;
const userEmail = user.email;
const userPass = user.password;


let formEl = document.querySelector('.forms');
let profImgEl = document.querySelector('#prof__pic');
console.log(profImgEl.attributes.src.value);
let profPic = profImgEl.attributes.src.value;

let nameEl = document.querySelector('.name');
let telEl = document.querySelector('.tel');
let localEl = document.querySelector('.local');
let aboutEl = document.getElementById('message');
let idEl = document.querySelector('.id');


const profileDetail = (userID) => {
    return fetch(`http://localhost:3000/profiles/${userID}`)
        .then(response => {
            return response.json()
        });
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

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function (e) {
            document.getElementById("prof__pic").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("prof").addEventListener("change", readImage, false);


formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    apps.update(userEmail, nameEl.value, userPass, telEl.value, localEl.value, aboutEl.value, userID).then(() => {
        console.log('ok');
    })
});




