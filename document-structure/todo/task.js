
const tasksForm = document.forms['tasks__form'];
tasksForm.addEventListener('submit', event => { event.preventDefault(); });
const elementTaskList = document.getElementById('tasks__list');

const elementTaskInput = document.getElementById('task__input');
elementTaskInput.addEventListener('keyup', checkEnter);
const elementBtnTaskAdd = document.getElementById('tasks__add');
elementBtnTaskAdd.addEventListener('click', addTask);
function checkEnter(event) {
    if ((event.key === 'Enter')) {
        addTask();
    }
}
function addTask() {
    if (elementTaskInput.value.length) {
        elementTaskList.insertAdjacentHTML('beforeEnd', `
            <div class="task">
                <div class="task__title">
                    ${elementTaskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        const elementTaskRemove = elementTaskList.lastElementChild.querySelector('.task__remove');
        elementTaskRemove.addEventListener('click', delTask);
        tasksForm.reset();
    }
}

function delTask(event) {
    event.preventDefault();
    this.parentNode.remove();
}

