const msg = document.querySelector('.header__a--msg');

msg.addEventListener('click', () => {
    if (!localStorage.getItem("token")) {
        window.location.href = '../../login.html';
    }
});