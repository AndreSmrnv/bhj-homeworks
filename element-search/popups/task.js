
const elemModalMain = document.getElementById("modal_main");
const elemModalSuccess = document.getElementById("modal_success");
elemModalMain.className = 'modal modal_active';
const elemModalMainClose = elemModalMain.querySelector('.modal__close');
elemModalMainClose.onclick = function () {
    elemModalMain.className = 'modal';
}
const elemModalMainOk = elemModalMain.querySelector('.show-success');
elemModalMainOk.onclick = function () {
    elemModalMain.className = 'modal';
    elemModalSuccess.className = 'modal modal_active';
}
const elemModalSuccessClose = elemModalSuccess.querySelector('.modal__close');
elemModalSuccessClose.onclick = function () {
    elemModalSuccess.className = 'modal';
}
const elemModalSuccessOk = elemModalSuccess.querySelector('.btn_success');
elemModalSuccessOk.onclick = function () {
    elemModalSuccess.className = 'modal';

}
