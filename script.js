function showSlides(n) {
var i;
var slides = document.getElementsById(“mySlides");
var dots = document.getElementsById(“dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none"; }
