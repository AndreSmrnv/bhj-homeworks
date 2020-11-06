//
const elemDead = document.getElementById("dead");
const elemLost = document.getElementById("lost");

function changeStatus() {
    if (this.classList.contains('hole_has-mole')) {
        ++elemDead.textContent;
    }
    else {
        ++elemLost.textContent;
    }
    if (Number(elemDead.textContent) > 9) {
        alert("! Победа ! " + elemDead.textContent + ' - ' + elemLost.textContent);
        location.reload();
    }
    if (Number(elemLost.textContent) > 4) {
        alert("Вы проиграли ! " + elemDead.textContent + ' - ' + elemLost.textContent);
        location.reload();
    }
};
const elementsHole = document.querySelectorAll('.hole-game > div');
for (let i = 0, len = elementsHole.length; i < len; i++) {
    elementsHole[i].onclick = changeStatus;
}
//const elemHole = document.getElementById("hole1");


//elemHole.onclick = changeStatus;