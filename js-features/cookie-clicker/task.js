const elemClickerCounter = document.getElementById("clicker__counter");
const elemImgCookie = document.getElementById("cookie");
elemImgCookie.onclick = function () {
    elemClickerCounter.textContent = Number(elemClickerCounter.textContent) + 1;
};
let imgCookieWidth = elemImgCookie.width;
elemImgCookie.onmousedown = function () {
    elemImgCookie.width = 244;
};
elemImgCookie.onmouseup = function () {
    elemImgCookie.width = imgCookieWidth;
};
