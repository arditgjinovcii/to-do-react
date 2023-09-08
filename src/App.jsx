import "./App.css";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: Math.random(),
      text: newTodo,
      done: false
    }]);
    setNewTodo("");
  };

  const toggleTodoValue = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) todo.done = !todo.done;
      return todo;
    }))
  }

  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <div className="group">
          <label htmlFor="todo">Enter a todo item:</label>
          <input
            type="text"
            value={newTodo}
            onInput={(e) => setNewTodo(e.target.value)}
            name="todo"
            id="todo"
          />
        </div>
        <button className="btn" type="submit">Add</button>
      </form>

      <h2>Todo list</h2>
      <ul className="list">
        {todos.map((todo) => (
          <li className="list-item" key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
            <input type="checkbox" onChange={() => toggleTodoValue(todo.id)}></input>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
