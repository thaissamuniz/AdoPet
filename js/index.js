async function getAnimals() {
    try {
        const response = await fetch('http://localhost:3000/pets');
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error);
    }
}

async function login(email, password) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        const response = await fetch('http://localhost:3000/login/user', requestOptions);
        return response;
    } catch (error) {

    }
}

async function getUser(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const responseJson = await response.json();
    return responseJson;
}

async function updateUser(id, name, tel, local, about) {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                tel: tel,
                city: local,
                about: about
            })
        }

        const response = await fetch(`http://localhost:3000/users/${id}`, requestOptions);
        return response;
    } catch (error) {
        console.error(error);
    }
}

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
    if (data === "" || data === undefined || data === null || data.length < 6) {
        return false
    }
    return true;
}

function redirectPage() {
    location.href = 'home.html'
}



export const apps = {
    validateData,
    validateEmail,
    redirectPage,
    profilesList,
    createProfile,
    //profileDetail,
    update,
    getAnimals,
    login,
    getUser,
    updateUser
}
