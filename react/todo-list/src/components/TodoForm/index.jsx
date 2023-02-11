import React, { useState } from "react";

function ToDoForm(props) {
    //Props
    const { addTodo } = props;
    
    //State
    const [todo, setTodo] = useState("");
    console.log("todo", todo);

    //Action
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent the screen refresh
        //if todo is true
        if (todo) {
            addTodo(todo); //pass it to the function we set in props
            setTodo("");
        }
    };

    return (
        // onSubmit happens on submit return
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add todo here..." 
                //set the value to the State
                value={todo} 
                // update the State with what they type
                onChange={(event) => setTodo(event.target.value)}/> 
        </form>
    );
}

export default ToDoForm;
