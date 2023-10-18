bulmaCarousel.attach('#slider', {
  slidesToScroll: 1,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
}

//SCRIPTS PARA OFERTAS
$(document).ready(function () {
  // Maneja el clic en los elementos del menú
  $(".menu-a").click(function () {
    // Cierra el navbar al hacer clic en un elemento del menú
    $(".navbar-collapse").collapse("hide");
  });
});

function mostrarModal1() {
  var modal = document.getElementById("modal1");
  modal.classList.add("mostrar");
}

function cerrarModal1() {
  var modal = document.getElementById("modal1");
  modal.classList.remove("mostrar");
}

function mostrarModal2() {
  var modal = document.getElementById("modal2");
  modal.classList.add("mostrar");
}

function cerrarModal2() {
  var modal = document.getElementById("modal2");
  modal.classList.remove("mostrar");
}   

function mostrarModal3() {
  var modal = document.getElementById("modal3");
  modal.classList.add("mostrar");
}

function cerrarModal3() {
  var modal = document.getElementById("modal3");
  modal.classList.remove("mostrar");
}   