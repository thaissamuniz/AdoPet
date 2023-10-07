import { apps } from "../index.js";

const profile = document.querySelector('.header__a--user');
const cards = document.createElement('div');
cards.classList.add('cards');

profile.addEventListener('click', () => {
    if (!localStorage.getItem("token")) {
        window.location = '../../login.html';
    } else {
        window.location = '../../profile.html';
    }
});

function newCard(name, age, size, description, city, state) {
    const main = document.querySelector('.main');
    const article = document.createElement('article');
    article.classList.add('card');

    const template =
        `
    <img src="../../../assets/img/Imagem Dunga.svg" alt="Foto do bichinho" class="card__img">
    <div class="card__details">
        <h3 class="card__name"> ${name} </h3>
        <p class="card__age details">${age}</p>
        <p class="card__size details">${size}</p>
        <p class="card__descrip details">${description}</p>
        <p class="card__location details">${city} - ${state}</p>
        <a href="message.html" class="card__msg"><span><img src="assets/img/icons/ícone mensagem.svg"
                    alt="icone fale com o responsavel" class="card__img--msg"></span>Falar com
            responsável</a>
    </div>`

    article.innerHTML = template;

    cards.appendChild(article);
    main.appendChild(cards);

    return cards;
}

async function createCards() {
    let animais = await apps.getAnimals();

    animais.forEach(animal => {
        newCard(animal.name, animal.age, animal.size, animal.details, animal.city, animal.state);
    });
}

createCards();