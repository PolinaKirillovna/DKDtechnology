(function() {
    document.addEventListener('DOMContentLoaded', function() {

        var menuItems = document.querySelectorAll('nav ul li a');
        var currentLocation = document.location.href;

        menuItems.forEach(function(item) {
            if (currentLocation.includes(item.getAttribute('href'))) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });


        var footer = document.querySelector('footer');
        if (window.performance) {
            var timeSincePageLoad = Math.round(Date.now() - performance.timing.navigationStart);
            var p = document.createElement('p');
            p.innerHTML = 'Страница загружена за ' + timeSincePageLoad + ' мс.';
            footer.appendChild(p);
        }
    });
})();