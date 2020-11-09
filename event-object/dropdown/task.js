const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownList = dropdownValue[0].closest('.dropdown').querySelector('.dropdown__list');

dropdownValue[0].onclick = function () {
    dropdownList.classList.toggle('dropdown__list_active');
}
const dropdownItems = dropdownList.querySelectorAll('.dropdown__item');
for (let i = 0, len = dropdownItems.length; i < len; i++) {
    dropdownItems[i].onclick = clickDropdownItem;
}

function clickDropdownItem() {
    const dropdownLink = this.querySelector('.dropdown__link');
    dropdownValue[0].textContent = dropdownLink.textContent;
    dropdownList.classList.toggle('dropdown__list_active');
    return false;
}
