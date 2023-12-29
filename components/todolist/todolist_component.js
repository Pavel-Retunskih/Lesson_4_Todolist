import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TasksList.js";

export function Todolist(data) {
    const container = document.createElement('div');

    const headerElement = Header(data.title);
    const tasksElement = TasksList(data.tasks);
    const bauttonsElement = ButtonsPanel()

    container.append(headerElement);
    container.append(tasksElement);
    container.append(bauttonsElement);
    return container;
}


