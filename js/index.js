

const profilesList = () => {
    return fetch(`http://localhost:3000/profiles`)
        .then(response => {
            return response.json()
        })
}


const createProfile = (email, name, password, telefone, cidade, sobre) => {
    return fetch(`http://localhost:3000/profiles`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password,
            telefone: telefone,
            cidade: cidade,
            sobre: sobre
        })
    }).then(response => {
        return response.body
    })
}

// const profileDetail = (id) => {
//     return fetch(`http://localhost:3000/profiles/${id}`)
//         .then(response => {
//             return response.json()
//         })
// }

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
            about: about
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
    if (data === "" || data === undefined || data === null || data.length != 8) {
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
    update
}
