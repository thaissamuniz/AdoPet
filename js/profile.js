import { apps } from "./index.js";

let name = document.querySelector('.name');
let tel = document.querySelector('.tel');
let local = document.querySelector('.local');
let about = document.getElementById('message');
let form = document.querySelector('.forms');


const userName = localStorage.getItem("name");
const userTel = localStorage.getItem("tel");
const userCity = localStorage.getItem("city");
const userAbout = localStorage.getItem("about");
const userId = localStorage.getItem("id");

function setUserInfo() {
    if (userName) {
        name.value = userName;
    }
    if (userTel) {
        tel.value = userTel;
    }
    if (userCity) {
        local.value = userCity;
    }
    if (userAbout) {
        about.value = userAbout;
    }
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const response = await apps.updateUser(userId, name.value, tel.value, local.value, about.value);

    if (response.status == 200) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("tel", tel.value);
        localStorage.setItem("city", local.value);
        localStorage.setItem("about", about.value);
        alert('dados atualizados com sucesso!');
    } else {
        alert('erro ao atualizar os dados.');
    }
});

setUserInfo();