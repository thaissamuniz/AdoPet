function checkLogin(rote) {
    if (!localStorage.getItem("token")) {
        window.location.href = '../../login.html';
    } else {
        window.location.href = rote;
    }
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

export const utils = {
    checkLogin,
    validateEmail,
    validateData,
    redirectPage,
}