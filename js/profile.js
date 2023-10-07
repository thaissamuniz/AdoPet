import { apps } from "./index.js";

let nameEl = document.querySelector('.name');
let telEl = document.querySelector('.tel');
let localEl = document.querySelector('.local');
let aboutEl = document.getElementById('message');
let idEl = document.querySelector('.id');
let form = document.querySelector('.forms');


const userToken = localStorage.getItem("token");
const token = userToken.slice(0, (userToken.length - 1));

const getUserInfo = async () => {
    const res = await fetch(`http://localhost:3000/users/${"651f54043f9b841ec69ce06d"}`);
    const resJson = await res.json();
    console.log(resJson);

    if (resJson.name) {
        nameEl.value = resJson.name;
    }
    if (resJson.tel) {
        telEl.value = resJson.tel;
    }
    if (resJson.city) {
        localEl.value = resJson.city;
    }
    if (resJson.about) {
        aboutEl.value = resJson.about;
    }
}
getUserInfo();

form.addEventListener('submit', async e => {
    e.preventDefault();
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nameEl.value,
            tel: telEl.value,
            city: localEl.value,
            about: aboutEl.value
        })
    }

    const res = await fetch(`http://localhost:3000/users/${"651f54043f9b841ec69ce06d"}`, requestOptions);
    if (res.status == 200) {
        alert('dados atualizados com sucesso!');
    } else {
        alert('erro ao atualizar os dados.');
    }
});
