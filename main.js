const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#add-btn');
const todoList = document.querySelector('.todo-list');
const inputWrapper = document.querySelector('.input-wrapper');

// Click event listener on Button & List
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e) {
    if (!todoInput.value) {
        e.preventDefault();
        alert("Please enter something");
    }
    else {
        // Create new div & add class to it
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        todoDiv.classList.add("list-group-item");

        // Create new li & add class to it
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //Create Completed Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //Create trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);


        // Set margin bottom to inputwrapper after adding todo
        inputWrapper.setAttribute("style", "margin-bottom: 15px")

        // Add final todo to list
        todoList.appendChild(todoDiv);

        // Clear input after submit
        todoInput.value = "";
    }
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}