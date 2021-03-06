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

  // Tab
  class Tab {
    constructor(el) {
      this.el = el
    }

    init() {
      const $panes = $(this.el).find('.tab__pane')
      const $links = $(this.el).find('.tab__nav a')

      $links.each(function(i) {

        $(this).on('click', function() {
          const target = $(this).attr('href')

          // Remove .active from all li
          $links
            .parent('li')
            .removeClass('active')

          // Add .active into current selected
          $(this)
            .parent('li')
            .addClass('active')

          // Remove .active from all panes
          $panes.removeClass('active')

          // Add .active to selected pane
          $(target).addClass('active')

          return false
        })
      })
    }
  }

  const tab = new Tab('#tab')
  const tabBg = new Tab('#tabBg')
  tab.init()
  tabBg.init()

  // Text Editor
  if (window.tinyMCE) {
    tinymce.init({
      selector: '#direction',
      height: 250,
      content_style: 'body {font-size: 16px !important; font-family: Raleway,sans-serif !important;}'
    })
  }

})(jQuery)
