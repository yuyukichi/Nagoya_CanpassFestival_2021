$('.gnav__link').hover(function () {
    $(this).css('text-shadow', '0px 0px 4px #9cfffa');
}, function () {
    $(this).css('text-shadow', 'none');
});

$(function(){
    setTimeout(() => {
        $('.opening').fadeOut();
    }, 3000);
});