$('.reviews__content').slick({
  arrows: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});