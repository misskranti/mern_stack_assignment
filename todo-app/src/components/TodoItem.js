import React, { useState } from 'react';
import { Check, Edit3, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim() && editText.trim() !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleTextClick = () => {
    if (!isEditing) {
      onToggle(todo.id);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div 
        className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && <Check size={12} />}
      </div>
      
      {isEditing ? (
        <input
          type="text"
          className="todo-text editing"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          autoFocus
          maxLength={200}
        />
      ) : (
        <div 
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          onClick={handleTextClick}
        >
          {todo.text}
        </div>
      )}
      
      <div className="todo-actions">
        <button 
          className="action-btn edit-btn"
          onClick={handleEdit}
          disabled={isEditing}
          title="Edit task"
        >
          <Edit3 size={16} />
        </button>
        <button 
          className="action-btn delete-btn"
          onClick={() => onDelete(todo.id)}
          title="Delete task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;