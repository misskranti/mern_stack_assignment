import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

const STORAGE_KEY = 'todoApp_todos';

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Error loading todos from localStorage:', error);
      return [];
    }
  });
  
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  }, [todos]);

  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    if (!newText || !newText.trim()) return;
    
    setTodos(prevTodos =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter((todo) => !todo.completed));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'pending':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    pending: todos.filter((todo) => !todo.completed).length,
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">📝 To-Do List</h1>
          <p className="subtitle">Stay organized and productive</p>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">{stats.total}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-item">
              <span className="stat-number completed">{stats.completed}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number pending">{stats.pending}</span>
              <span className="stat-label">Pending</span>
            </div>
          </div>
        </header>

        <div className="main-content">
          <AddTodo onAdd={addTodo} />
          <div className="todos-section">
            <div className="filter-and-actions">
              <Filter currentFilter={filter} onFilterChange={setFilter} />
              {stats.completed > 0 && (
                <button className="clear-completed" onClick={clearCompleted}>
                  Clear Completed
                </button>
              )}
            </div>

            <TodoList
              todos={getFilteredTodos()}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          </div>
        </div>

        <footer className="footer">
          <p>© 2025 Todo App - Stay Productive!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;