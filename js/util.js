const checkLogin = () => {
    window.addEventListener('load', () => {
        if (localStorage.getItem('user')) {
            const userString = localStorage.getItem('user')
            const user = JSON.parse(userString);
            location.href = '../home.html'
        }
    });
}

checkLogin();