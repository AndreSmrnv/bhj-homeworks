//const elementTimer = document.getElementById("timer");
const elementTimer = document.getElementById("timer");
const changeTimer = function () {

    elementTimer.textContent -= 1;
    if (Number(elementTimer.textContent) < 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
        location.reload();
    }
}
//alert(elementTimer.textContent));

const timerId = setInterval(changeTimer, 1000);

