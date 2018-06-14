$(function () {
  $('.thumbnail').on('click', function(event) {
    $('.hero img').attr({'src': $(this).find('img').attr('src'), 'alt': $(this).find('img').attr('alt')});
  });
});