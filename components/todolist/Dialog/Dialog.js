import { addTask, closeDialogWindow, data } from "../../../data/data.js";

export function Dialog(){
   let container = document.createElement('dialog');

   let titleElement = document.createElement('h4');
   titleElement.append('New Task');

   let inputElement = document.createElement('input');
    inputElement.placeholder = 'Input your new task';

    let saveButton = document.createElement('button');
    saveButton.append('Save');
    saveButton.addEventListener('click', ()=>{
        addTask(inputElement.value)
    })
    
    let cancelButton = document.createElement('button');
    cancelButton.append('Cancel');

    cancelButton.addEventListener('click',()=>{
        closeDialogWindow()
    })
    
    if(data.UserWantToAddNewTask){
        container.open = true;
    }else container.open = false;


    container.append(titleElement);
    container.append(inputElement);
    container.append(saveButton);
    container.append(cancelButton);

    return container;
}