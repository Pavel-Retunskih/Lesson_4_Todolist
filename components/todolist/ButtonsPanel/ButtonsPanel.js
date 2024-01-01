import { openDialogWindow } from "../../../data/data.js";

export function ButtonsPanel() {
    const container = document.createElement('div');
    const addButtonElement = document.createElement('button');

    addButtonElement.append('+ add');
    container.append(addButtonElement);
    addButtonElement.addEventListener('click', openDialogWindow)
    return container;
}
