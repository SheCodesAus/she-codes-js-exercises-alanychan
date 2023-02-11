import React, { useState } from "react";

//Components
import ToDoForm from "./components/TodoForm";
import ToDoItem from "./components/TodoItem";
import "./App.css";

function App(){
  //State
  //
  //array of objects
  const [todos, setTodos] = useState([
    //creating object: properties: text, isCompleted
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  //Actions
  // assigning the value to the const
  // ... means expands the array newTodos with the arry todos
  // change text to { text } // curly brackets convert to object
  const addTodo = (text) => {
    // const newTodos = [...todos, { text }];
    const newTodos = [...todos, { text:text, isCompleted: false }];
    setTodos(newTodos); //set the State
  };


  const completeTodo = (index) =>{
    const newTodos = [...todos]; //create a new array by copying the state
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

/*
passing the functions to the child toDoItem
-add completeTodo next to the function ToDoItem
*/
  return ( 
    <div className="app">
      <div className="todo-list">
        <h1>My ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem key={index} 
          todo={todo} 
          index={index} 
          completeTodo={completeTodo}  
          removeTodo={removeTodo}
          />
        ))}
        <ToDoForm addTodo={addTodo}/> {/* passing the array addTodo to the props. */}
      </div>
    </div>
  );
}

export default App;
