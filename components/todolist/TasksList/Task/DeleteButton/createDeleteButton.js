import { deleteTask } from "../../../../../data/data.js";


export function createDeleteButton(taskId) {
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.append('❌');
    deleteButtonElement.addEventListener('click', () => {
        deleteTask(taskId);
    });
    return deleteButtonElement;
}
