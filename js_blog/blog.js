// Slider Script
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Show current slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Wait 3 seconds before next slide
    setTimeout(showSlides, 3000);
}

// Start the slider when page loads
document.addEventListener("DOMContentLoaded", showSlides);
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
