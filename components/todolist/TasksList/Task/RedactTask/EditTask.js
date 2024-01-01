import { closeEditInput, saveEditedTask } from "../../../../../data/data.js";

export function editTask(task) {
    const container = document.createElement('span');

    const inputElement = document.createElement('input');
    inputElement.placeholder = task.title;

    const saveButton = document.createElement('button');
    saveButton.append('Save');
    saveButton.addEventListener('click', () => {
        saveEditedTask(task, inputElement.value)
    });

    const cancelButton = document.createElement('button');
    cancelButton.append('Cancel');
    cancelButton.addEventListener('click', () => closeEditInput(task.id));

    container.append(inputElement, saveButton, cancelButton);

    return container;
}