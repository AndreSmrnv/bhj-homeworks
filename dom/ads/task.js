let timer = setInterval(changeRotator, 1000);
const elementsRotatorCase = document.querySelectorAll('.rotator > span.rotator__case');
let lengthRotatorCase = elementsRotatorCase.length;
function changeRotator() {
    for (let i = 0; i < lengthRotatorCase; i++) {
        if (elementsRotatorCase[i].classList.contains('rotator__case_active')) {
            elementsRotatorCase[i].classList.toggle('rotator__case_active');
            if (i === (lengthRotatorCase - 1)) {
                elementsRotatorCase[0].classList.toggle('rotator__case_active');
            } else {
                elementsRotatorCase[++i].classList.toggle('rotator__case_active');
            }
        }
    }
    //console.log(lengthRotatorCase);
}
