import React from 'react';
import './TodoApp.css';
const TodoApp = () => {
  //Lista de tarefas
  const [todos, setTodos] = React.useState([]);
  // criar o um estado de texte da tarefa
  const [inputValue, setInputValue] = React.useState('');
  // add tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue('');
    }
  };
  return (
    <div className="app-container">
      <h1 className="title">Lista De Tarefas</h1>
      {/*Formulario para add tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Adicione uma tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

      {/* lista de tarefas */}
      {todos.length === 0 && <p className="empty">Não há tarefas.</p>}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button className="delete-button">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
