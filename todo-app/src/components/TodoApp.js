import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilter('completed'); 
  };

  const getFilteredTodos = () => {
    if (filter === 'completed') return todos.filter((todo) => todo.completed === true);
    if (filter === 'pending') return todos.filter((todo) => todo.completed === false);
    return todos;
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <AddTodo onAdd={addTodo} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />

      {todos.some((todo) => todo.completed) && (
        <button 
          onClick={clearCompleted}
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '4px',
            marginTop: '10px',
            cursor: 'pointer'
          }}
        >
          Clear Completed
        </button>
      )}

      <TodoList
        todos={getFilteredTodos()}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
        filter={filter}
      />
    </div>
  );
};

export default TodoApp;
