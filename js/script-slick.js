
	$(document).ready(function(){
		$(".slick-track").css("max-width", $(window).width());

	  $('.slider__slick').slick({
		  infinite: false,
		  speed: 1000,
			cssEase: 'linear',
			autoplaySpeed: 3000,
		  fade: true,
			autoplay: true,
			// mobileFirst: true,
			dots: true,
			prevArrow: '.slider__slick-navigation-prev',
			nextArrow: '.slider__slick-navigation-next'
		});
//category
		$('.slider__scroll-category').slick({
			// prevArrow: '.slider__slick-navigation-prev',
			// nextArrow: '.slider__slick-navigation-next',
			autoplay: true,
			autoplaySpeed: 3500,
		  slidesToShow: 7,
		  slidesToScroll: 1,
			mobileFirst: true,
			responsive: [
		{
      breakpoint: 1920,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      }
    },
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1
			}
		},

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
		{
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
			{
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
		});

		$('.deal__slide').slick({
			autoplay: true,
			autoplaySpeed: 3500,
			arrows: false,
			dots: true,
		  slidesToShow: 3,
		  slidesToScroll: 2,
			mobileFirst: true,
			responsive: [
		{
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		},

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
		{
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
		{
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
			{
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
		});


	});
