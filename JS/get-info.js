document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('userForm');
    var loader = document.getElementById('loader');
    var userInfo = document.getElementById('userInfo');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var userId = document.getElementById('userId').value;

        loader.style.display = 'block';
        userInfo.innerHTML = '';

        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Ошибка сети');
                }
            })
            .then(function(user) {
                loader.style.display = 'none';
                userInfo.innerHTML =
                    'ID: ' + user.id + '<br>' +
                    'Имя: ' + user.name + '<br>' +
                    'Псевдоним: ' + user.username + '<br>' +
                    'Email: ' + user.email + '<br>' +
                    'Телефон: ' + user.phone + '<br>' +
                    'Веб-сайт: ' + user.website;
            })
            .catch(function(error) {
                loader.style.display = 'none';
                userInfo.innerHTML = '⚠ Что-то пошло не так: ' + error.message;
            });
    });
});
