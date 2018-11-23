//On Load Function

$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
});

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

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {

      $("#filters .current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");

        $(".items").isotope({
          filter: selector,
          animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
          }
        });

        return false;

    });

    // Scroll Transition to Section
    $("#navigation li a").click(function(e) {
      e.preventDefault();

      var targetElement = $(this).attr("href");
      var targetPosition = $(targetElement).offset().top;
      $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    });

    // Add class to NavBar when at top of browser to fix it
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

      function stickyNavigation() {

        var body = $("body");
        
        if($(window).scrollTop() >= navTop) {
          body.css("padding-top", nav.outerHeight() + "px");
          body.addClass("fixedNav");
        } else {
          body.css("padding-top", 0);
          body.removeClass("fixedNav");
        }
      }
});