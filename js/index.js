const URL = "https://adopet-api-y6tv.onrender.com";

async function getAnimals(order) {
    try {
        const response = await fetch(URL + `/pets?order=${order}`);
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error);
    }
}

async function updateAnimal(id, image, name, age, size, city, state, details) {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                image: image,
                name: name,
                age: age,
                size: size,
                city: city,
                state: state,
                details: details
            })
        }

        const response = await fetch(URL + `/pets/${id}`, requestOptions);
        return response;

    } catch (error) {
        console.error(error);
    }
}

async function getAnimalById(id) {
    try {
        const response = await fetch(URL + `/pets/${id}`);
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error);
    }
}

async function createAnimal(image, name, age, size, city, state, details, shelter) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            image: image,
            name: name,
            age: age,
            size: size,
            city: city,
            state: state,
            details: details,
            shelter: shelter
        })
    }

    const response = await fetch(URL + '/pets', requestOptions);
    return response;
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
        const response = await fetch(URL+'/login/user', requestOptions);
        return response;
    } catch (error) {

    }
}

async function getUser(id) {
    const response = await fetch(URL+`/users/${id}`);
    const responseJson = await response.json();
    return responseJson;
}

async function updateUser(id, picture, name, tel, local, about) {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                picture: picture,
                name: name,
                tel: tel,
                city: local,
                about: about
            })
        }

        const response = await fetch(URL+`/users/${id}`, requestOptions);
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
    const response = await fetch(URL+'/users', requestOptions);
    return response;
}


export const apps = {
    getAnimals,
    getAnimalById,
    updateAnimal,
    createAnimal,
    login,
    getUser,
    updateUser,
    createUser
}
