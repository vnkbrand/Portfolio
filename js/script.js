//This code will execute when the document is ready
$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 4500,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Technical Project Manager.", "Product Manager.", "Agile Practitioner.", "Web Developer."],
    typeSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    smartBackspace:true,
    backDelay: 1000,
    startDelay: 500
  });

});