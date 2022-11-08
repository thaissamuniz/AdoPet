import { validateData } from "./index.js";

const form = document.querySelector('.forms');
const name = document.querySelector('.name');
const tel = document.querySelector('.tel');
const button = document.querySelector('.button');
const animalName = document.querySelector('.animalName');
const txtMsg = document.querySelector('.forms__txt');

form.addEventListener('submit', (e) => {
    e.preventDefault(e);

    if (validateData(name.value) || validateData(tel.value) || validateData(animalName.value) || validateData(txtMsg.value)) {
        let p = document.createElement('p');
        p.innerHTML = 'todos os dados sao obrigatorios';
        form.appendChild(p);
    } else {
        console.log('ok');
        name.value = '';
        tel.value = '';
        animalName.value = '';
        txtMsg.value = '';
    }
})

/*button.addEventListener('submit', (evt)=> {
    evt.preventDefault(evt);

    if (name.value == "" || tel.value == "" || animalName.value == "" || txtMsg.value == "") {
        let p = document.createElement('p');
        p.innerHTML = 'todos os dados sao obrigatorios';
        form.appendChild(p);

    }
})*/
