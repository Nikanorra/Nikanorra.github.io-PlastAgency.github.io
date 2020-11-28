
	$(document).ready(function(){
	  $('.slider__slick').slick({
		  infinite: true,
		  speed: 1000,
			cssEase: 'linear',
			autoplaySpeed: 5000,
		  fade: true,
			autoplay: true,
			mobileFirst: true,
			dots: true,
			prevArrow: '.slider__slick-navigation-prev',
			nextArrow: '.slider__slick-navigation-next'
		});
//category
		$('.slider__scroll-category').slick({
			// prevArrow: '.slider__slick-navigation-prev',
			// nextArrow: '.slider__slick-navigation-next',
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
        slidesToShow: 7,
        slidesToScroll: 1
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

		$('.deal__slide').slick({
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
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
		});


	});
