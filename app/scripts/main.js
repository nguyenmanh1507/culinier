// eslint
(function($) {

  if ($(window).slick) {

    const el = $('#carousel')
    const prevArrow = '<button type="button"><i class="fa fa-chevron-left"></i></button>'
    const nextArrow = '<button type="button"><i class="fa fa-chevron-right"></i></button>'

    el.slick({
      dots: true,
      mobileFirst: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow
    });
    
  }

})(jQuery)
