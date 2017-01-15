var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var xX = document.getElementsByClassName("myDescriptions");
  var dots = document.getElementsByClassName("buttonSlideSShowButtons");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
     xX[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" redSelectedButton", "");
  }
  x[slideIndex-1].style.display = "block";  
  xX[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " redSelectedButton";
}