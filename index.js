
import { data, subscribe } from "./data/data.js";
import { Todolist } from "./components/todolist/todolist_component.js";


subscribe(refreshUI);

function refreshUI() {
    const todolistElement = Todolist(data);

    const rootElement = document.getElementById('root');
    rootElement.innerHTML = '';

    rootElement.append(todolistElement);
    return rootElement;
}

refreshUI();
