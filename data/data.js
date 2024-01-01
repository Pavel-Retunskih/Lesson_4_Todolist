import { genId } from "./IdGenerator/genId.js"

export const data = {
    UserWantToAddNewTask: false,
    id: genId(),
    title: 'What to learn',
    tasks: [
        {
            id: genId(),
            title: 'Learn HTML'
        },
        {
            id: genId(),
            title: 'Learn CSS'
        },
    ]
};

let notifySubscriber = null;

export function subscribe(subscriber) {
    notifySubscriber = subscriber;
    return notifySubscriber;
}

export function openDialogWindow(){
    data.UserWantToAddNewTask = true;
    notifySubscriber()
}

export function closeDialogWindow(){
    data.UserWantToAddNewTask = false;
    notifySubscriber()
}

export function addTask(newTaskText) {
    const newTask = {
        id: genId(),
        title: newTaskText,
    };
    data.tasks.push(newTask);
    closeDialogWindow();
    notifySubscriber();
}

export function deleteTask(taskId) {
    data.tasks = data.tasks.filter((task) => { return task.id !== taskId });
    notifySubscriber();
}

export function openEditInput(taskId){
    for (const task of data.tasks) {
        if(task.id === taskId) task.isWantToEdit = true;
    }
    notifySubscriber();
};

export function closeEditInput(taskId){
    for (const task of data.tasks) {
        if(task.id === taskId) task.isWantToEdit = false;
    }
    notifySubscriber();
};

export function saveEditedTask(oldTask, editText){
    oldTask.title = editText;
    closeEditInput(oldTask.id)
    notifySubscriber()
};