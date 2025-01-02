import { useState } from "react";
import "./ToDoList.scss";
function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleRemove = (index) => setTodos(todos.filter((_, i) => i !== index));
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  return (
    <div className="todo">
      <h1>To Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleOnSubmit} disabled={!newTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
