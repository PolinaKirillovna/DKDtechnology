document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginBtn');
    var logoutBtn = document.getElementById('logoutBtn');
    var content = document.getElementById('content');
    var loginText = document.getElementById('loginText');

    var loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        content.style.display = 'block';
        loginText.style.display = 'none';
    }

    loginBtn.addEventListener('click', function() {
        var username = prompt('Введите логин:');
        var password = prompt('Введите пароль:');

        if (username === 'admin' && password === '123') {
            localStorage.setItem('loggedIn', true);
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            content.style.display = 'block';
            loginText.style.display = 'none';
        } else {
            alert('Неверные данные!');
        }
    });

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        content.style.display = 'none';
        loginText.style.display = 'block';
    });
});
