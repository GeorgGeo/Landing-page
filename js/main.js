$(function() {
  // Slick-slaider
  $(document).ready(function(){
    $('.carousel').slick({
      // setting-name: setting-value
      // arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./image/left.svg"  alt="Left Arrow">',
      nextArrow: '<img src="./image/right.svg" alt="Right Arrow">',
      appendArrows: $('.content'),
      variableWidth: true//Чтобы установить собственную ширину
    });
    // testimonials
    $('.test').slick({
      // setting-name: setting-value
      // arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img src="./image/left.svg"  alt="Left Arrow">',
      nextArrow: '<img src="./image/right.svg" alt="Right Arrow">',
      appendArrows: $('.cont'),
    });
    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

});
// plugin jQuery
(function($) {
  // кнопка "наверх"
  var btn = $('.scroll-to-top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '500');
   });

  //  menu-gamburger
  $('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('.nav').toggleClass('show');
  });

  if ( $(window).width() < 768 ) {
    $('.nav .row').click(function(e) {
      e.preventDefault();
      $('.nav').toggleClass('show');
    });
  };

  // плавная прокрутка
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 3000);
    return false;
  });

  // Popup-окно
  $('a.modal-btn').click(function (e) {
    e.preventDefault;
    var destinationPopup = $(this).attr("href");
    $(destinationPopup).addClass('show');

    // close popup-window
    $(destinationPopup + ' .popup-body__close').click(function () {
      $(destinationPopup).removeClass('show');
    });

    $(destinationPopup + ' .popup__overlay').click(function () {
      $(destinationPopup).removeClass('show');
    });
  });

  // 3D-эффекты

})(jQuery);

