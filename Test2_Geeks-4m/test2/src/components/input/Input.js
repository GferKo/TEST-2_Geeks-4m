import React from 'react';
import './Input.css';

const Input = ({ value, onChange }) => {
    return (
        <input
            className="task-input"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter a task"
        />
    );
};

export default Input;
