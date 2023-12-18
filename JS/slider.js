let slideIndex = 0;
let timer = null;

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if(n == undefined) { // Only increase slideIndex if n is not defined
        slideIndex++;
    }

    if (slideIndex > slides.length) {slideIndex = 1}
    else if (slideIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    timer = setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Start the slideshow immediately when the page loads
window.onload = showSlides;
