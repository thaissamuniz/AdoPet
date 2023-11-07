import { apps } from "../js/index.js";
const url = new URL(window.location);
const id = url.searchParams.get('id');
const idAdmin = localStorage.getItem('id');
const states = ["AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO"
];

petName.addEventListener('focusout', () => {
    if (petName.value.length < 3) {
        petNameError.innerHTML = 'o nome é obrigatório e deve conter ao menos 3 letras.';
        return false;
    } else {
        petNameError.innerHTML = '';
    }
});
petAge.addEventListener('focusout', () => {
    if (petAge.value == '') {
        petAgeError.innerHTML = 'a idade do bichinho é obrigatória';
    } else {
        petAgeError.innerHTML = '';
    }
});
petSizeOptions.addEventListener('focusout', () => {
    if (petSizeOptions.value == '') {
        petSizeError.innerHTML = 'selecione o tamanho.'
    } else {
        petSizeError.innerHTML = '';
    }
})
petCity.addEventListener('focusout', () => {
    if (petCity.value.length < 3) {
        petCityError.innerHTML = 'escreva uma cidade válida.';
    } else {
        petCityError.innerHTML = '';
    }
});
petAbout.addEventListener('focusout', () => {
    if (petAbout.value.length < 3) {
        petAboutError.innerHTML = 'diga algo legal sobre o bichinho.';
    } else {
        petAboutError.innerHTML = '';
    }
});

statesSelect.addEventListener('focusout', () => {
    if (statesSelect.value == "") {
        petStateError.innerHTML = 'selecione o estado.';
        return false;
    } else {
        petStateError.innerHTML = '';
    }
});


states.forEach(state => {
    const option = `<option value ="${state}">${state}</option>`
    statesSelect.innerHTML += option;
});

async function getAnimalById() {
    let animal = await apps.getAnimalById(id);

    petImage.src = animal.image;
    petName.value = animal.name;
    petAge.value = animal.age;
    petSizeOptions.value = animal.size;
    petCity.value = animal.city;
    statesSelect.value = animal.state;
    petAbout.value = animal.details;
}

async function updateAnimal() {
    await apps.updateAnimal(id, petImage.src, petName.value, petAge.value, petSizeOptions.value, petCity.value, statesSelect.value, petAbout.value);
}

async function createAnimal() {
    return await apps.createAnimal(petImage.src, petName.value, petAge.value, petSizeOptions.value, petCity.value, statesSelect.value, petAbout.value, idAdmin);

}

if (id) {
    getAnimalById();
    petForm.addEventListener('submit', async e => {
        e.preventDefault();
        await updateAnimal();
    });
} else {
    petForm.addEventListener('submit', async e => {
        e.preventDefault();
        console.log(petName.value, petAge.value, petSizeOptions.value, petCity.value, statesSelect.value, petAbout.value, idAdmin);
        const response = await createAnimal();
        if (response.status == 201) {
            alert('animal cadastrado com sucesso.');
        } else {
            console.log(response)
            console.log(response.status)
            alert('erro ao cadastrar animal. todos os campos são obrigatórios.');
        }
    });
}

pets.addEventListener('click', () => {
    if (petsGalery.style.maxHeight) {
        petsGalery.style.maxHeight = null;
    } else {
        petsGalery.style.maxHeight = petsGalery.scrollHeight + "px";
    }
})

petsGalery.addEventListener('click', (e) => {
    let clicked = e.target;
    petImage.src = clicked.src;
});