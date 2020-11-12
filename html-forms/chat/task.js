const elementChatWidgetSide = document.querySelector('.chat-widget__side');
const elementChatWidget = document.querySelector('.chat-widget');
elementChatWidgetSide.onclick = () => {
    elementChatWidget.classList.toggle('chat-widget_active');
    robotMessage(0);
};

const elementChatMessages = document.getElementById('chat-widget__messages');
const elementChatWidgetInput = document.getElementById("chat-widget__input");

let delay = 30000;

let timerId = setTimeout(function checkRobotMessage() {
    if (elementChatMessages.lastElementChild && elementChatMessages.lastElementChild.classList.contains('message_client')) {
        robotMessage();
    }


    timerId = setTimeout(checkRobotMessage, delay);

}, delay);

elementChatWidgetInput.addEventListener('keyup', sendMessage);
function sendMessage(event) {
    if ((event.code == 'Enter' || event.code == 'NumpadEnter') && (elementChatWidgetInput.value.length)) {
        const dateNow = new Date();
        hoursNow = dateNow.getHours() < 10 ? '0' + dateNow.getHours() : dateNow.getHours();
        minutesNow = dateNow.getMinutes() < 10 ? '0' + dateNow.getMinutes() : dateNow.getMinutes();
        elementChatMessages.innerHTML += `
          <div class="message message_client" id="${dateNow.getTime()}">
            <div class="message__time">${hoursNow}:${minutesNow}</div>
            <div class="message__text">
              ${elementChatWidgetInput.value}
            </div>
          </div>
        `;
        elementChatWidgetInput.value = '';
        const currentChatMessages = document.getElementById(`${dateNow.getTime()}`);
        currentChatMessages.scrollIntoView(false);
    }
}

function robotMessage(messIndex) {

    const dateNow = new Date();
    const hoursNow = dateNow.getHours() < 10 ? '0' + dateNow.getHours() : dateNow.getHours();
    const minutesNow = dateNow.getMinutes() < 10 ? '0' + dateNow.getMinutes() : dateNow.getMinutes();
    const robotChatMessages = new Array();
    robotChatMessages.push("Здравствуйте");
    robotChatMessages.push("Что вас интересует?");
    robotChatMessages.push("Ляля");
    robotChatMessages.push("Труляля");
    robotChatMessages.push("Мы ничего не продадим");
    robotChatMessages.push("Пока");

    const messageIndex = (messIndex === 0) ? messIndex : randomIndex((robotChatMessages.length - 1));
    elementChatMessages.innerHTML += `
          <div class="message" id="${dateNow.getTime()}">
            <div class="message__time">${hoursNow}:${minutesNow}</div>
            <div class="message__text">
              ${robotChatMessages[messageIndex]} 
            </div>
          </div>
        `;

    const currentChatMessages = document.getElementById(`${dateNow.getTime()}`);
    currentChatMessages.scrollIntoView(false);

}
function randomIndex(max) {
    let min = 1;
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}







