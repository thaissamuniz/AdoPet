import { apps } from "./index.js";

let name = document.querySelector('.name');
let tel = document.querySelector('.tel');
let local = document.querySelector('.local');
let about = document.getElementById('message');
let idEl = document.querySelector('.id');
let form = document.querySelector('.forms');


const userToken = localStorage.getItem("token");
const token = userToken.slice(0, (userToken.length - 1));

const getUserInfo = async () => {
    const response = await apps.getUser("651f54043f9b841ec69ce06d");
    if (response.name) {
        name.value = response.name;
    }
    if (response.tel) {
        tel.value = response.tel;
    }
    if (response.city) {
        local.value = response.city;
    }
    if (response.about) {
        about.value = response.about;
    }
}
getUserInfo();

form.addEventListener('submit', async e => {
    e.preventDefault();
    const response = await apps.updateUser('651f54043f9b841ec69ce06d', name.value, tel.value, local.value, about.value);

    if (response.status == 200) {
        alert('dados atualizados com sucesso!');
    } else {
        alert('erro ao atualizar os dados.');
    }
});
