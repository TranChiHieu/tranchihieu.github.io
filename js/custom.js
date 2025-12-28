
(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  // CUSTOM LINK
  $('.custom-link').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);



// client scroll
const scrollBox = document.getElementById('clientsScroll');
const scrollAmount = 300;

document.querySelector('.clients-arrow.left')
  .onclick = () => scrollBox.scrollLeft -= scrollAmount;

document.querySelector('.clients-arrow.right')
  .onclick = () => scrollBox.scrollLeft += scrollAmount;



//project scroll
const projScroll = document.getElementById('projectsScroll');
const projStep = document.querySelector('.project-item-wrapper').offsetWidth + 20;

document.querySelector('.projects-arrow.left').onclick = () => {
  projScroll.scrollBy({ left: -projStep, behavior: 'smooth' });
};

document.querySelector('.projects-arrow.right').onclick = () => {
  projScroll.scrollBy({ left: projStep, behavior: 'smooth' });
};


//project popup
$('.project-popup').magnificPopup({
  type: 'inline',
  midClick: true,
  closeBtnInside: true
});

function calculateYears(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();

  // nếu chưa tới ngày kỷ niệm trong năm hiện tại thì trừ 1
  const hasPassedAnniversary =
    end.getMonth() > start.getMonth() ||
    (end.getMonth() === start.getMonth() && end.getDate() >= start.getDate());

  if (!hasPassedAnniversary) {
    years--;
  }

  if (!endDate) {
    return `${years} year +`;
  }

  return `${years} year`;
}

document.getElementById('bitis-duration').textContent =
  calculateYears('2019-09-19', '2023-09-21');

document.getElementById('hsvg-duration').textContent =
  calculateYears('2023-10-01');



