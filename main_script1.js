

function menuOpen() {
    document.getElementById("mySidebar").style.width = "250px";
}
function menuClose() {
    document.getElementById("mySidebar").style.width = "0px";
}


window.onscroll = function() {myFunction()};

function myFunction() {
     if(document.body.scrollTop > 1000) {
         document.getElementById("btn1").style.display = "block";
     } else {
     	 document.getElementById("btn1").style.display = "none"; 
     }
}
function topnav() {
     document.body.scrollTop = 0;
}


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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
