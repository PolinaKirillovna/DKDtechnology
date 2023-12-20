
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Подсветка активного пункта меню
        var menuItems = document.querySelectorAll('nav ul li a');
        var currentLocation = document.location.href;

        menuItems.forEach(function(item) {
            if (currentLocation.includes(item.getAttribute('href'))) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Вывод статистики загрузки
        var footer = document.querySelector('footer');
        if (window.performance) {
            var timeSincePageLoad = Math.round(Date.now() - performance.timing.navigationStart);
            var p = document.createElement('p');
            p.innerHTML = 'Страница загружена за ' + timeSincePageLoad + ' мс.';
            footer.appendChild(p);
        }
    });
})();
