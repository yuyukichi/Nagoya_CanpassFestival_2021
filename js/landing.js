function openDescription(target) {
    let ii;
    if(document.querySelector('.textbox__textbox#'+target).classList.length !== 2) {
        for(ii= 0; ii < document.querySelector('#content_list').querySelectorAll('i').length; ii++) {
            document.querySelector('#content_list').querySelectorAll('.list__item')[ii].classList.remove('-open');
            document.querySelectorAll('.textbox__textbox')[ii].classList.remove('-open');
        }
        if(document.querySelector('#content_list').querySelector('.list__item#'+target).classList.length !== 2){
            document.querySelector('#content_list').querySelector('.list__item#'+target).classList.add('-open');
            document.querySelector('.textbox__textbox#'+target).classList.add('-open');
        }
        document.querySelector('.textbox__text').classList.add('-hide');
    } else {
        for(ii= 0; ii < document.querySelector('#content_list').querySelectorAll('i').length; ii++) {
            document.querySelector('#content_list').querySelectorAll('.list__item')[ii].classList.remove('-open');
            document.querySelectorAll('.textbox__textbox')[ii].classList.remove('-open');
            document.querySelector('.textbox__text').classList.remove('-hide');
        }
    }
}