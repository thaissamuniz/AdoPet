const animalsList = () => {
    return fetch('http://localhost:3000/animals')
        .then(response => {
            return response.json()
        })
}

const cards = document.createElement('div');
cards.classList.add('cards');

function newCard(image, name, age, size, description, local) {
    const main = document.querySelector('.main');
    const article = document.createElement('article');
    article.classList.add('card');

    const template =
        `
    <img src="${image}" alt="Foto do bichinho" class="card__img">
    <div class="card__details">
        <h3 class="card__name"> ${name} </h3>
        <p class="card__age details">${age}</p>
        <p class="card__size details">${size}</p>
        <p class="card__descrip details">${description}</p>
        <p class="card__location details">${local}</p>
        <a href="message.html" class="card__msg"><span><img src="assets/img/icons/ícone mensagem.svg"
                    alt="icone fale com o responsavel" class="card__img--msg"></span>Falar com
            responsável</a>
    </div>`

    article.innerHTML = template;

    cards.appendChild(article);
    main.appendChild(cards);

    return cards;
}

animalsList().then(data => data.forEach(card => newCard(card.image, card.name, card.age, card.size, card.description, card.local)))