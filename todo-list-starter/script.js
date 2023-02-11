// let todoTasksText = [
//     "Buy Milk", 
//     "Eat Dinner", 
//     "Nail JS", 
//     "Give feedback",
// ];

// let todoTasksStatus = [true, false, false, true];
let todoTasksText = [];
let todoTasksStatus = [];

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"

// //Grab the UL element
// let todoList = document.getElementById("todo-list");

function createNewTaskElement(task, index){
    //Create a new <p> element & set the text of the new <p> element
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    //Mark the task as complete if the status is true
    if (todoTasksStatus[index] === true){
        //add css class .complete from styles.css to the paragraph (p) element
        newTodoTaskTextElement.classList.add("complete");
    }

    //Create a new <li> element & append the <p> element to it
    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    //Create a new <button> element and append it to the <li> element
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    newTodoTaskElement.appendChild(completeButtonElement);
    completeButtonElement.onclick = function() {
        toggleComplete(index);
    };

    //Create a new field for due date
    let dueDateElement = document.createElement("input");
    dueDateElement.type = "date";
    dueDateElement.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    
    newTodoTaskElement.appendChild(dueDateElement);
    console.log(today);

    return newTodoTaskElement;

}


function addTask() {
    let newTask = document.getElementById("new-task-text");
    //Check if the element has a value
    //If yes, add the value to the array of toDos 
        //- add the status
        //- clear the input text box
    if (newTask.value){
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        console.log(todoTasksText);
        updateTodoList();
    }
}


function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    //Loop through the todoTasksText array
    todoTasksText.forEach((task, index) => {
        let newTodoTaskElement = createNewTaskElement(task, index);

    //Append the <li> element to the <ul> element
        todoList.appendChild(newTodoTaskElement);
    });

}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    // console.log("Before", todoTasksStatus[index]);
    if (todoTasksStatus[index] === false){
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    // console.log("After", todoTasksStatus[index]);
    updateTodoList();
}

updateTodoList();

