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

  // Smoth Scroll
  var sections = $('.nav-sections');
  var nav = $('.header-nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height - 100;
      var bottom = top + $(this).outerHeight() - 350;

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.nav-link').removeClass('active');
        nav.find('.nav-link[href="#'+$(this).attr('id')+'"]').addClass('active');
      } else if (cur_pos < 700) {
        nav.find('.nav-link').removeClass('active');
      }
    });
  });

  $('a').on('click', function () {
    var $el = $(this);
    var id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 700);

    return false;
  });
});
