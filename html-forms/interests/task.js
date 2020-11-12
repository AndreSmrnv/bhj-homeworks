const elementsLabelMain = document.querySelectorAll('.interests_main > ul > li.interest > label');

for (const elementLabelMain of elementsLabelMain) {
    elementLabelMain.firstElementChild.addEventListener('change', changeStatusChild);
}

function changeStatusChild() {
    const elementsInputActive = this.closest('label').nextElementSibling.querySelectorAll('input.interest__check');

    for (const elementInputActive of elementsInputActive) {
        elementInputActive.checked = this.checked;
    }
}