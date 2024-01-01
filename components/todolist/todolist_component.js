import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Dialog } from "./Dialog/Dialog.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TasksList.js";

export function Todolist(data) {
    const container = document.createElement('div');

    const headerElement = Header(data.todolist.title);
    const tasksElement = TasksList(data.todolist.tasks);
    const bauttonsElement = ButtonsPanel()
    const dialogElement = Dialog();

    container.append(headerElement);
    container.append(tasksElement);
    container.append(bauttonsElement);
    container.append(dialogElement);
    return container;
}


