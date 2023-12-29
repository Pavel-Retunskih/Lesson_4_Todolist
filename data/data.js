import { genId } from "./IdGenerator/genId.js"

export const data = {
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

export function addTask() {
    const newTask = {
        id: genId(),
        title: '---------'
    };
    data.tasks.push(newTask);
    notifySubscriber();
}

export function deleteTask(taskId) {
    data.tasks = data.tasks.filter((task) => { return task.id !== taskId });
    notifySubscriber();
}