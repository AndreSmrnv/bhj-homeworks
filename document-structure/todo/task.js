
const tasksForm = document.forms['tasks__form'];
tasksForm.addEventListener('submit', event => { event.preventDefault(); });
const elementTaskList = document.getElementById('tasks__list');

const elementTaskInput = document.getElementById('task__input');
elementTaskInput.addEventListener('keyup', addTask);
function addTask(event) {
    if ((event.code == 'Enter' || event.code == 'NumpadEnter') && (elementTaskInput.value.length)) {


        elementTaskList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${elementTaskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        const elementTaskRemove = elementTaskList.lastElementChild.querySelector('.task__remove');
        elementTaskRemove.addEventListener('click', delTask);
        /*
            почему у меня событие остается только на последней задаче? я же добавляю последовательно на каждую создаваемую задачу. 
            предыдущие события по какой причине пропадают?
        */
        //console.log(`elementTaskList.lastChild - ${elementTaskList.lastElementChild.querySelector('.task__title').textContent}`);
        tasksForm.reset();
    }
}

function delTask(event) {
    event.preventDefault();
    //console.log(`taskRemove - ${this.parentNode.querySelector('.task__title').textContent}`);
    this.parentNode.remove();

}

