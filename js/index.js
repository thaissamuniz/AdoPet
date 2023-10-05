const profilesList = () => {
    return fetch(`http://localhost:3000/profiles`)
        .then(response => {
            return response.json()
        })
}


const createProfile = (email, name, password, tel, local, about, id) => {
    return fetch(`http://localhost:3000/profiles`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password,
            tel: tel,
            local: local,
            about: about,
            id: id
        })
    }).then(response => {
        return response.body
    });
}

const update = (email, name, password, tel, local, about, id) => {

    return fetch(`http://localhost:3000/profiles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password,
            tel: tel,
            local: local,
            about: about,
        })
    }).then(resp => {
        return resp.json()
    })
}


function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

function validateData(data) {
    if (data === "" || data === undefined || data === null || data.length < 8) {
        return false
    }
    return true;
}

function redirectPage() {
    location.href = 'home.html'
}

async function getAnimals() {
    try {
        const response = await fetch('http://localhost:3000/pets');
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error);
    }
}


export const apps = {
    validateData,
    validateEmail,
    redirectPage,
    profilesList,
    createProfile,
    //profileDetail,
    update,
    getAnimals
}
