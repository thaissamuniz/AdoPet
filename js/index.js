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

async function createUser(name, email, password, accountType, role) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            accountType: accountType,
            role: role,
        })
    }
    const response = await fetch('http://localhost:3000/users', requestOptions);
    return response;
}


export const apps = {
    getAnimals,
    login,
    getUser,
    updateUser,
    createUser
}
