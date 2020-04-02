function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

const slick = () => {
  const params = {
    dots: true,
    arrows: false,
    waitForAnimate: false,
    speed: 228,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // adaptiveHeight: true,
    // fade: true,
    // variableWidth: true,
  };
  $('.reviews__slider').slick(params);
};

$(document).ready(function() {
  ibg();
  slick();
});
