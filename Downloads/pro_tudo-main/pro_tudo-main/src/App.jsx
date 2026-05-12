// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [inpValue, setinpValue] = useState("");
//   const [todos, settodos] = useState([]);

//   function addTodo() {
//     if (inpValue === "") {
//       alert("Please enter your task");
//       return;
//     }
//     settodos([...todos, inpValue]);
//     setinpValue("");
//   }

//   function deleteTodo(index) {
//     let newtodo = [];
//     for (let i = 0; i < todos.length; i++) {
//       if (i !== index) {
//         newtodo.push(todos[i]);
//       }
//     }
//     settodos(newtodo);
//   }

//   function editTodo(index) {
//     let updatedText = prompt("Edit todo", todos[index]);
//     if (updatedText !== null && updatedText !== "") {
//       let newtodo = [...todos];
//       newtodo[index] = updatedText;
//       settodos(newtodo);
//     }
//   }

//   return (
//     <div className="app">
//       <h2>Todo List</h2>

//       <div className="input-box">
//         <input
//           type="text"
//           placeholder="Add todo"
//           value={inpValue}
//           onChange={(e) => setinpValue(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>

//       <ul className="todo-list">
//         {todos.map((item, index) => (
//           <li key={index}>
//             <span>{item}</span>
//             <div className="btns">
//               <button className="edit" onClick={() => editTodo(index)}>Edit</button>
//               <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // Load data from localStorage
  const [todos, settodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [inpValue, setinpValue] = useState("");

  // Save todos in localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  function addTodo() {
    if (inpValue.trim() === "") {
      alert("Please enter your task");
      return;
    }

    settodos([...todos, inpValue]);

    setinpValue("");
  }

  // Delete Todo
  function deleteTodo(index) {
    let newtodo = todos.filter((_, i) => i !== index);

    settodos(newtodo);
  }

  // Edit Todo
  function editTodo(index) {

    let updatedText = prompt("Edit todo", todos[index]);

    if (updatedText !== null && updatedText.trim() !== "") {

      let newtodo = [...todos];

      newtodo[index] = updatedText;

      settodos(newtodo);
    }
  }

  return (
    <div className="app">

      <h2>Todo List</h2>

      <div className="input-box">

        <input
          type="text"
          placeholder="Add todo"
          value={inpValue}
          onChange={(e) => setinpValue(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>

      </div>

      <ul className="todo-list">

        {todos.map((item, index) => (

          <li key={index}>

            <span>{item}</span>

            <div className="btns">

              <button
                className="edit"
                onClick={() => editTodo(index)}
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>

            </div>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;
