//Get the button:
mybutton = document.getElementById("myBtn");
location.hash = '#about';
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

// $(document).ready(function ()){
//   $('.menu').on('click', function()){
//     $(this).toggleClass('open');
//     $('.top-nav-baru').toggleClass('open')
//   }
// }


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function slide() {
  location.hash = '#about';
  window.scrollTo(0, 720);
}

//
// $(document).ready(function () {
//   $('.menu').on('click', function(){
//     $(this).toggleClass('open');
//     $('.top-nav').toggleClass('open');
//   });
