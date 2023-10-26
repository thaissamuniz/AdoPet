import { apps } from "../js/index.js";
const url = new URL(window.location);
const id = url.searchParams.get('id');

async function getAnimalById() {
    let animal = await apps.getAnimalById(id);

    petName.value = animal.name;
    petAge.value = animal.age;
    petSize.value = animal.size;
    petCity.value = animal.city;
    petState.value = animal.state;
    petAbout.value = animal.details;
}
getAnimalById();

async function updateAnimal() {
    await apps.updateAnimal(id, petName.value, petAge.value, petSize.value, petCity.value, petState.value, petAbout.value);
}

petForm.addEventListener('submit', e => {
    e.preventDefault();

    updateAnimal();
});