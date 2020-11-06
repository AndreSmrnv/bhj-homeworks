const elemClickerCounter = document.getElementById("clicker__counter");
const elemImgCookie = document.getElementById("cookie");

let imgCookieWidth = elemImgCookie.width;
elemImgCookie.onmousedown = function () {
    elemClickerCounter.textContent = Number(elemClickerCounter.textContent) + 1;
    elemImgCookie.width = 244;
};
elemImgCookie.onmouseup = function () {
    elemImgCookie.width = imgCookieWidth;
};
