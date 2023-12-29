import { data } from "./data/data.js";
import { Todolist } from "./components/todolist/todolist_component.js";

const todolistElement = Todolist(data);

const rootElement = document.getElementById('root');

rootElement.append(todolistElement)