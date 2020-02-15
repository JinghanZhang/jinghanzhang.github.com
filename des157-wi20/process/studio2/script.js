
var slideIndex = 0;
showSlides();

function showSlides() {
    
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } 

slides[slideIndex-1].style.display = "block"; 
setTimeout(showSlides, 3000);
}

function display_image() {
var recipe = document.getElementById("recipe");
recipe.style.display = null;
}

function display_image2() {
var nooo = document.getElementById("noimg");
nooo.style.display = null;
}

function popupfunction() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}