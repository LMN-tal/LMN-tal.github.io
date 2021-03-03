$('#carousel-banner').on('slide.bs.carousel', function (e) {
  $('.videoContainer__video')[e.from].contentWindow.postMessage(
    '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
    '*'
  );
  $('.videoContainer__video')[e.to].contentWindow.postMessage(
    '{"event":"command","func":"' + 'playVideo' + '","args":""}',
    '*'
  );
});
var lastId,
  topMenu = $('#topmenu'),
  topMenuHeight = $(topMenu).outerHeight() + 40,
  menuItems = $(topMenu).find('a'),
  scrollItems = $(menuItems).map(function () {
    var item = $($(this).attr('href'));
    if (item.length) {
      return item;
    }
  });
menuItems.click(function (e) {
  var href = $(this).attr('href'),
    offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate(
    {
      scrollTop: offsetTop,
    },
    300
  );
  e.preventDefault();
});


$(window).scroll(function () {
  var fromTop = $(this).scrollTop() + topMenuHeight + 60;
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : '';
  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent()
      .removeClass('active')
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass('active');
  }
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  