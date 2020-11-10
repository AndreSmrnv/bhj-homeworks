
const tabsElem = document.querySelectorAll('.tab__navigation > div.tab');
const tabsElemContent = document.querySelectorAll('.tab__contents > div.tab__content');
const arrTabsElem = Array.from(tabsElem);

for (let i = 0; i < tabsElem.length; i++) {
    tabsElem[i].addEventListener('click', function (e) {
        clearActive();
        let indexTab = arrTabsElem.indexOf(e.target);
        tabsElemContent[indexTab].classList.toggle('tab__content_active');
        this.classList.toggle('tab_active');
    });
}
function clearActive() {
    for (let i = 0; i < tabsElem.length; i++) {
        tabsElem[i].classList.remove('tab_active');
    }
    for (let i = 0; i < tabsElemContent.length; i++) {
        tabsElemContent[i].classList.remove('tab__content_active');
    }

}