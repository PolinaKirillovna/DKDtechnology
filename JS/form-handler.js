function newElement() {
    let tr = document.createElement("tr");

    let service = document.getElementById("myService").value;
    let marketSegment = document.getElementById("myMarketSegment").value;
    let deadline = document.getElementById("myDeadline").value;
    let orderVolume = document.getElementById("myOrderVolume").value;

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
    let closebtns = document.getElementsByClassName("close");
    for (let i = 0; i < closebtns.length; i++) {
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