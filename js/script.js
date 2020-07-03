//fixed menu
$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();
    if ($scrollamount > 500) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }

//    if ($scrollamount > 1000) {
//        $(".btop").fadeIn();
//    } else {
//        $(".btop").fadeOut();
//    }
    
        if ($scrollamount > 1000) {
        $(".btop").css("visibility","visible");
    } else {
        $(".btop").css("visibility","hidden");
    }
})

//back to top button
$(".btop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1500)
})


//counter up part
$('.count').counterUp({
    delay: 10,
    time: 1000
});

//banner part slider
$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
      responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots:true,
          arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false,
          dots:true,
      }
    }
  ]
});

//portfolio part venobox
$('.venobox').venobox();

//service part slider
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    autoplay: true,
    centerMode: true,
    centerPadding: true,
    prevArrow: '<i class="fa fa-chevron-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down next" aria-hidden="true"></i>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:true,
      }
    }
  ]
});

//testimonial slider part
$('#testimonial-part .left').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: '0',
        autoplay: true,
    asNavFor: '#testimonial-part .right-slider',
    prevArrow: '<i class="fa fa-chevron-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down next" aria-hidden="true"></i>',
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
          vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
          arrows:true,
          vertical:false,
      }
    }
  ]
});

//testimonial slider part
$('#testimonial-part .right-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#testimonial-part .left',
});

//sponsor slider part
$('.sponsor-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
