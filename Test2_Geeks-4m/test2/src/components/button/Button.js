import React from 'react';
import '../button/button.css';

const Button = ({ state, onClick, label }) => {
    return (
        <button
            className={`task-button ${state === 'disabled' ? 'disabled' : 'default'}`}
            disabled={state === 'disabled'}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
