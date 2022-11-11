// the first slide is to be shown once the page loads
let slideIndex = 1;
showSlides(slideIndex);

// this function is used to handle the scrolling of the previous and next buttons
function plusSlides(indexNum) {
showSlides(slideIndex += indexNum);
}

// this function is used to handle the indicators below the image
function currentSlide(indexNum) {
showSlides(slideIndex = indexNum);
}

// the function that handles the sliding
function showSlides(indexNum) {
    
    // get the slides(images) and dots from the DOM
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    
    // move the slide back to the first image once we get to the end of the slideshow
    if(indexNum > slides.length) {
        slideIndex = 1
    }
    // move the slide back to the last image once we get to the first image using the previous button
    else if(indexNum < 1) {
        slideIndex = slides.length
    }

    // hide all the images by default
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove the active class from all the indicators by default
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // show the image of the current slide we clicked on either using the next or previous button or the indicator below the image
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
