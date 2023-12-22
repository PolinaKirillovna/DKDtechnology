function newElement() {
    var tr = document.createElement("tr");

    var service = document.getElementById("myService").value;
    var marketSegment = document.getElementById("myMarketSegment").value;
    var deadline = document.getElementById("myDeadline").value;
    var orderVolume = document.getElementById("myOrderVolume").value;

    if (service === '' || marketSegment === '' || deadline === '' || orderVolume === '') {
        alert("You must fill out all fields!");
    } else {
        tr.innerHTML = '<td>' + service + '</td><td>' + marketSegment + '</td><td>' + deadline + '</td><td>' + orderVolume + '</td><td><span class="close">\u00D7</span></td>';
        document.getElementById("myTable").appendChild(tr);

        // Save to localStorage
        localStorage.setItem('myTable', document.getElementById("myTable").innerHTML);
    }

    document.getElementById("myService").value = '';
    document.getElementById("myMarketSegment").value = '';
    document.getElementById("myDeadline").value = '';
    document.getElementById("myOrderVolume").value = '';

    addCloseEvent();
}

function addCloseEvent() {
    var closebtns = document.getElementsByClassName("close");
    for (var i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
            this.parentElement.parentElement.style.display = 'none';
            // Save to localStorage
            localStorage.setItem('myTable', document.getElementById("myTable").innerHTML);
        });
    }
}

// Load from localStorage
window.onload = function() {
    if(localStorage.getItem('myTable')) {
        document.getElementById("myTable").innerHTML = localStorage.getItem('myTable');
        addCloseEvent();
    }
}
