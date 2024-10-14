!function ($) {
  "use strict";
  $(document).ready(function () {

  //   $('.kt-blocks-accordion-header').on('click', function() {
  //     // Get the current accordion that is clicked
  //     var clickedAccordion = $(this);

  //     // Get all active panels
  //     var activePanels = $('.kt-accordion-panel-active');

  //     // If there is only one active panel and the user tries to close it, prevent closing
  //     if (activePanels.length === 1 && clickedAccordion.next('.kt-accordion-panel').hasClass('kt-accordion-panel-active')) {
  //         return false; // Prevent closing the last open accordion
  //     }

  //     // Allow the accordion toggle if there are more than one active or it's not closing the last one
  // });

    // $('.industries-grid').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   infinite: false,
    //   dots: true,
    //   arrows: false,
    //   autoplay:true,
    //   autoplaySpeed:3000,
    //   focusOnSelect: true,
    //   responsive: [
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 1
    //       },
    //     },
    //   ],
    // });


  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.kt-blocks-accordion-header');
    
    // Add click event listener to each accordion header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get currently active accordions
            const activePanels = document.querySelectorAll('.kt-accordion-panel-active');

            // If there is only one active accordion, prevent it from closing
            if (activePanels.length === 1 && header.classList.contains('kt-accordion-panel-active')) {
                return; // Do nothing if it's the last open accordion
            }

            // Toggle the accordion normally if there are multiple open accordions
        });
    });
});



  
}.call(window, window.jQuery);