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

	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        },
        1118:{
            items:5
        }
    }
});


  //Action of Piechart when viewing it
  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  
  $(window).scroll(function() {

    if(window.pageYOffset > skillsTopOffset - $(window).height() + 300) {

      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 6,
        size: 152,
        animate: ({duration: 2000, enabled: true}),
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }

    });

    }


    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 300) {

      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
  
        element.countup(endVal);
      })

      countUpFinished = true;
  
    }

  });

});