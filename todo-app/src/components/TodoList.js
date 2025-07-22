import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit, filter }) => {
  if (todos.length === 0) {
    const getEmptyMessage = () => {
      switch (filter) {
        case 'completed':
          return {
            icon: '🎉',
            title: 'No completed tasks',
            message: 'Complete some tasks to see them here.'
          };
        case 'pending':
          return {
            icon: '✨',
            title: 'All caught up!',
            message: 'No pending tasks. Great job!'
          };
        default:
          return {
            icon: '📝',
            title: 'No tasks found',
            message: 'Start by adding a new task above.'
          };
      }
    };

    const emptyState = getEmptyMessage();

    return (
      <div className="empty-state">
        <div className="empty-icon">{emptyState.icon}</div>
        <h3 className="empty-title">{emptyState.title}</h3>
        <p className="empty-message">{emptyState.message}</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;