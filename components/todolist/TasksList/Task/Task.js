import { openEditInput } from "../../../../data/data.js";
import { createDeleteButton } from "./DeleteButton/createDeleteButton.js";
import { editTask } from "./RedactTask/EditTask.js";


export function Task(task) {
    const container = document.createElement('li');
    const deleteButtonElement = createDeleteButton(task.id)

    container.addEventListener('dblclick', () => openEditInput(task.id))

    task.isWantToEdit ? container.append(editTask(task)) : container.append(task.title, deleteButtonElement);

    return container;
}

