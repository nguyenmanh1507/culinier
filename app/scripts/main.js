// eslint
(function($) {

  if ($(window).slick) {

    const carousel = $('#carousel')
    const prevArrow = '<button type="button"><i class="fa fa-chevron-left"></i></button>'
    const nextArrow = '<button type="button"><i class="fa fa-chevron-right"></i></button>'

    const carouselFor = $('#carouselFor')
    const carouselNav = $('#carouselNav')

    const postGallery = $('#postGallery')

    carousel.slick({
      dots: true,
      mobileFirst: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow
    })

    carouselFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.carousel-nav'
    })

    carouselNav.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.carousel-for',
      focusOnSelect: true
    })

    postGallery.slick({
      prevArrow: prevArrow,
      nextArrow: nextArrow
    })

  }

})(jQuery)
