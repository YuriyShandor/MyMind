$(document).ready(function() {
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // Price Counter
  var priceCounterStart = 0;
  $(window).scroll(function() {
    var oTop = $('.pricing-block').offset().top - window.innerHeight;
    if (priceCounterStart == 0 && $(window).scrollTop() > oTop) {
      $('.price-value').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      priceCounterStart = 1;
    }
  });
});
