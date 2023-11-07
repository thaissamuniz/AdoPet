import { apps } from "../index.js";
import { utils } from "../utils.js";

let editClass;
const profile = document.querySelector('.header__a--user');
const cards = document.createElement('div');
cards.classList.add('cards');
cards.classList.add('fade-in');

profile.addEventListener('click', () => {
    utils.checkLogin('../../profile.html');
});

messageBox.addEventListener('click', () => {
    utils.checkLogin('../../message.html');
});


function newCard(image, name, age, size, description, city, state, id) {
    const role = localStorage.getItem("role");
    editClass = role == "admin" ? "card__edit--admin" : "card__edit";
    const main = document.querySelector('.main');
    const article = document.createElement('article');
    article.classList.add('card');

    const template =
        `
          <div class="card__contents">
            <img src="${image}" alt="Foto do bichinho" class="card__img">
            <div class="card__details">
                <div>
                    <a class="${editClass}" id="edit" href="editPage.html?id=${id}"></a>
                </div>
                <h3 class="card__name"> ${name} </h3>
                <p class="card__age details">${age}</p>
                <p class="card__size details">${size}</p>
                <p class="card__descrip details">${description}</p>
                <p class="card__location details">${city} - ${state}</p>
                <a href="message.html" class="card__msg"><span><img src="assets/img/icons/ícone mensagem.svg"
                            alt="icone fale com o responsavel" class="card__img--msg"></span>Falar com
                    responsável</a>
            </div>
          </div>
        `



    article.innerHTML = template;

    cards.appendChild(article);
    main.appendChild(cards);

    return cards;
}
async function getAnimals(orderNumber) {
    return await apps.getAnimals(orderNumber);
}

async function createCards(ord) {
    let animais = await getAnimals(ord);
    animais.forEach(animal => {
        newCard(animal.image, animal.name, animal.age, animal.size, animal.details, animal.city, animal.state, animal._id);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => skeletonCards.style.display = 'none', 5)
    setTimeout(() => createCards(1), 5)
});

orderPets.addEventListener('change', () => {
    let order = Number(orderPets.value);
    cards.innerHTML = '';
    createCards(order);
});

const profilePic = localStorage.getItem('image');
if (profilePic) {
    userPicTop.src = profilePic;
}