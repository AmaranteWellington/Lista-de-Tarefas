import React from 'react';
import './TodoApp.css';
const TodoApp = () => {
  //Lista de tarefas
  const [todos, setTodos] = React.useState([]);
  // criar o um estado de texte da tarefa
  const [inputValue, setInputValue] = React.useState('');
  // add tarefa
  const handleSubmit = (e) => {
    e.preventDefault;
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
    </div>
  );
};

export default TodoApp;
