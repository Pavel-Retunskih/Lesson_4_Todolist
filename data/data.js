import { genId } from "./IdGenerator/genId.js"

export const data = {
    todolist: {
        addNewTaskDialog: {
            isOpen: false,
            error: null
        },
        id: genId(),
        title: 'What to learn',
        tasks: [
            {
                id: genId(),
                title: 'Learn HTML',
                editMode: {
                    isEdit: false,
                    error: null,
                },
            },
            {
                id: genId(),
                title: 'Learn CSS',
                editMode: {
                    isEdit: false,
                    error: null,
                },
            }
        ]
    }
};

let notifySubscriber = null;

function setError(error) {
    data.todolist.addNewTaskDialog.error = error;
    notifySubscriber()
}
function setEditInputError(task, error) {
    task.editMode.error = error;
    notifySubscriber()
}

export function subscribe(subscriber) {
    notifySubscriber = subscriber;
    return notifySubscriber;
}

export function openDialogWindow() {
    data.todolist.addNewTaskDialog.isOpen = true;
    notifySubscriber()
}

export function closeDialogWindow() {
    data.todolist.addNewTaskDialog.isOpen = false;
    notifySubscriber()
}

export function addTask(newTaskText) {
    if (newTaskText.trim().length > 0) {
        const newTask = {
            id: genId(),
            title: newTaskText,
            editMode: {
                isEdit: false,
                error: null,
            },
        }
        data.todolist.tasks.push(newTask);
        closeDialogWindow();
    } else {
        setError('Empty input!!!');
    }
    notifySubscriber();
}

export function deleteTask(taskId) {
    data.todolist.tasks = data.todolist.tasks.filter((task) => { return task.id !== taskId });
    notifySubscriber();
}

export function openEditInput(task) {
    task.editMode.isEdit = true;
    notifySubscriber();
};

export function closeEditInput(task) {
    task.editMode.isEdit = false;

    notifySubscriber();
};

export function saveEditedTask(oldTask, editText) {
    if (editText.length > 0) {
        oldTask.title = editText;
        closeEditInput(oldTask)
    } else {
        setEditInputError(oldTask, 'Empty Input!!!')
    }

};