import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText(''); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="add-todo">
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="add-todo-input"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={200}
        />
        <button 
          type="submit" 
          className="add-btn"
          disabled={!text.trim()}
        >
          <Plus size={18} />
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;