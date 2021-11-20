$('.gnav__link').hover(function () {
    $(this).css('text-shadow', '0px 0px 4px #9cfffa');
    $(this).css('transition', 'text-shadow 300ms');
}, function () {
    $(this).css('text-shadow', '0px 0px 4px #9cfffa00');
    $(this).css('transition', 'text-shadow 300ms');
});
$(function(){
    document.querySelector('.gnav__line').style.width = `${document.querySelector('.gnav__item').clientWidth}px`;
});