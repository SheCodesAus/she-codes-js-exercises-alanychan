import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello, JS is amazing!");
  // console.log("message", message);

  function handleClick(){
    setMessage("Hello, REACT is amazing!");
  }

  return ( 
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update Message!</button>
    </div>
  )
}

export default App;