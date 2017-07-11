$(function() {
  $('.tab li:nth-child(1)').addClass('current');
  $('.tab li').click(function() {
    var num = $(this).parent().children('li').index(this);
    $(this).parent('.tab').each(function(){
      $('>li',this).removeClass('current').eq(num).addClass('current');
    });
    $(this).parent().next().children('.content').hide().eq(num).show();
  }).first().click();
});