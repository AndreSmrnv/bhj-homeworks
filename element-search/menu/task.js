
function openSubMenu() {
    const elementMenuMain = this.closest('li.menu__item');
    const elementsMenuSub = elementMenuMain.querySelector('ul.menu_sub');

    if (elementsMenuSub) {
        elementsMenuSub.className = 'menu menu_sub menu_active';
        return false;
    }
}
const linksMenuMain = document.querySelectorAll('ul.menu_main > li > a');
for (let i = 0, len = linksMenuMain.length; i < len; i++) {
    linksMenuMain[i].onclick = openSubMenu;

}
function closeSubMenu() {
    const elementsMenuSub = this.querySelector('ul.menu_sub');
    if (elementsMenuSub) {
        elementsMenuSub.className = 'menu menu_sub';

    }
}
const elementsMenuMain = document.querySelectorAll('ul.menu_main > li');
for (let i = 0, len = elementsMenuMain.length; i < len; i++) {
    elementsMenuMain[i].onmouseleave = closeSubMenu;

}
