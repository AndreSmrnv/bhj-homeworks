
const elementsHasTooltip = document.querySelectorAll('a.has-tooltip');

for (const elementHasTooltip of elementsHasTooltip) {
    elementHasTooltip.addEventListener('click', showTooltip);
    elementHasTooltip.addEventListener('mouseout', () => { hideTooltips(); });
}

function showTooltip(event) {
    event.preventDefault();

    const elementNext = this.nextElementSibling;
    if (Boolean(elementNext) && elementNext.classList.contains('tooltip')) {
        elementNext.classList.toggle('tooltip_active');
    } else {
        const elementDivTooltip = document.createElement('div');
        elementDivTooltip.classList.add('tooltip', 'tooltip_active');
        elementDivTooltip.innerText = this.title;
        elementDivTooltip.dataset.position = 'right';
        let coords = this.getBoundingClientRect();
        elementDivTooltip.style.left = coords.left + "px";
        this.insertAdjacentElement('afterEnd', elementDivTooltip);
    }


}
function hideTooltips() {
    const elementsActiveTooltip = document.querySelectorAll('.tooltip_active');
    for (const elementActiveTooltip of elementsActiveTooltip) {
        elementActiveTooltip.classList.toggle('tooltip_active');
    }
}

