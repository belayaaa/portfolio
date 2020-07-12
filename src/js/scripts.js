$(function() {
  "use strict";

 // Menu nav toggle 
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



 // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });



  // Porfolio isotope and filter
  var filter = $("[data-filter]");

    filter.on("click", function() {
  // $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });




  // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox({
      'share': false
    });



  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });



  // Owl Carousel
	 $(".testimonials-carousel").owlCarousel({
	    autoplay: true,
	    dots: true,
	    loop: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      768: {
	        items: 2
	      },
	      900: {
	        items: 3
	      }
	    }
	  });



	    // jQuery counterUp
	    // $('.num').counterUp({
	    //   delay: 10,
	    //   time: 1000
	    // });
});

