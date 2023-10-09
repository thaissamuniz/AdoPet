function checkLogin(rote) {
    if (!localStorage.getItem("token")) {
        window.location = '../../login.html';
    } else {
        window.location = rote;
    }
}

export const utils = {
    checkLogin
}