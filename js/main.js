$('.gnav__link').hover(function () {
    $(this).css('text-shadow', '0px 0px 20px #38b2ff');
}, function () {
    $(this).css('text-shadow', 'none');
});

$('.worknav__link').hover(function () {
    $(this).css('text-shadow', '0px 0px 20px #38b2ff');
}, function () {
    $(this).css('text-shadow', 'none');
});

$(function(){
    setTimeout(() => {
        $('.opening').fadeOut();
    }, 3000);
});