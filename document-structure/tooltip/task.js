
const elementsHasTooltip = document.querySelectorAll('a.has-tooltip');

for (const elementHasTooltip of elementsHasTooltip) {
    elementHasTooltip.addEventListener('click', showTooltip);
}

function showTooltip(event) {
    event.preventDefault();
    const elementDivTooltip = document.createElement('div');
    elementDivTooltip.classList.add('tooltip', 'tooltip_active');
    elementDivTooltip.innerText = this.title;
    this.insertAdjacentElement('afterEnd', elementDivTooltip);

}

