const deftxt = document.querySelector('.textbox__textbox#default').innerHTML;
$('.gnav__link').hover(function () {
    $(this).css('text-shadow', '0px 0px 4px #9cfffa');
}, function () {
    $(this).css('text-shadow', '0px 0px 4px #9cfffa00');
    $(this).css('transition', 'text-shadow 300ms');
});
function openDescription(target) {
    let ii;
    if(document.querySelector('.list__item#'+target).classList.length !== 2) {
            document.querySelector('table').querySelector('.list__item.-open').classList.remove('-open');
            document.querySelector('.textbox__text').innerHTML = deftxt;
        if(document.querySelector('table').querySelector('.list__item#'+target).classList.length !== 2){
            document.querySelector('table').querySelector('.list__item#'+target).classList.add('-open');
            document.querySelector('.textbox__text').innerHTML = document.querySelector('.textbox__textbox#'+target).innerHTML;
        }
        // document.querySelector('.textbox__text').classList.add('-hide');
    } else {
            document.querySelector('table').querySelector('.list__item.-open').classList.remove('-open');
            document.querySelector('#default').classList.add('-open');
            document.querySelector('.textbox__text').innerHTML = deftxt;
    }
}