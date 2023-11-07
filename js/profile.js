import { apps } from "./index.js";

const role = localStorage.getItem("role");
role == "admin" ? createPet.style.display = "flex" : createPet.style.display = "none";

let name = document.querySelector('.name');
let tel = document.querySelector('.tel');
let local = document.querySelector('.local');
let about = document.getElementById('message');
let form = document.querySelector('.forms');
let image;
let galeria = document.querySelector('.user__galery--hidden');

const userName = localStorage.getItem("name");
const userTel = localStorage.getItem("tel");
const userCity = localStorage.getItem("city");
const userAbout = localStorage.getItem("about");
const userId = localStorage.getItem("id");
const userPicture = localStorage.getItem("image");

logout.addEventListener('click', () => {
    localStorage.clear();
});

function setUserInfo() {
    if (userPicture) {
        prof__pic.src = userPicture;
        userPicTop.src = userPicture;
    }
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

    if (name.value == '') {
        profileWarnFail.style.display = 'block';
        overlay.style.display = 'block';
        return
    }

    image == undefined ? image = userPicture : image = image;
    const response = await apps.updateUser(userId, image, name.value, tel.value, local.value, about.value);

    if (response.status == 200) {
        localStorage.setItem("image", image);
        localStorage.setItem("name", name.value);
        localStorage.setItem("tel", tel.value);
        localStorage.setItem("city", local.value);
        localStorage.setItem("about", about.value);
        profileWarnSuccess.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        profileWarnFail.style.display = 'block';
        overlay.style.display = 'block';
    }
});

setUserInfo();

prof__pic.addEventListener('click', () => {
    if (userGalery.style.maxHeight) {
        userGalery.style.maxHeight = null;
    } else {
        userGalery.style.maxHeight = userGalery.scrollHeight + "px";
    }
});

galeria.addEventListener('click', (e) => {
    let alvo = e.target;
    prof__pic.src = alvo.src;
    image = alvo.src
});

profileWarnBtnSuccess.addEventListener('click', () => {
    profileWarnSuccess.style.display = 'none';
    overlay.style.display = 'none';
    window.location.reload();
});
profileWarnBtnFail.addEventListener('click', () => {
    profileWarnFail.style.display = 'none';
    overlay.style.display = 'none';
});
