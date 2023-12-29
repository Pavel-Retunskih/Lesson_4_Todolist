import { createDeleteButton } from "./DeleteButton/createDeleteButton.js";


export function Task(task) {
    const container = document.createElement('li');
    const deleteButtonElement = createDeleteButton(task.id)
    container.append(task.title);
    container.append(deleteButtonElement)
    return container;
}

