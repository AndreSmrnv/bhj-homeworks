
window.addEventListener('scroll', checkPositionReveal);
checkPositionReveal();

function checkPositionReveal() {
    const blocksReveal = document.querySelectorAll('div.reveal');
    for (let i = 0, len = blocksReveal.length; i < len; i++) {
        if (isInViewport(blocksReveal[i])) {
            blocksReveal[i].classList.add('reveal_active');
        } else {
            blocksReveal[i].classList.remove('reveal_active');
        }
    }
}

function isInViewport(element) {
    let coordsElement = element.getBoundingClientRect();
    let viewportHeight = window.innerHeight;
    let topVisible = (coordsElement.top > 0 && coordsElement.top < viewportHeight);
    let bottomVisible = (coordsElement.bottom < viewportHeight && coordsElement.bottom > 0);
    return topVisible || bottomVisible;
}