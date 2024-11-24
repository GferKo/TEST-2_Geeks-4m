import React, { useState } from 'react';
import './Task.css';
import editIcon from '../images/Vector.svg';
import deleteIcon from '../images/Vector2.svg';

const Task = ({ task, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = () => {
        onDelete(task);
    };

    const handleSave = () => {
        onEdit(task, editedText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedText(task);
        setIsEditing(false);
    };

    return (
        <div className="task">
            {isEditing ? (
                <div className="edit-task">
                    <div className="task-input_box">
                        <input
                            className="edit-input"
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    </div>

                    <div className="task-btn_box">
                        <button className="edit-main-btn" onClick={handleCancel}>Cancel</button>
                        <button className="edit-main-btn" onClick={handleSave}>Save</button>
                    </div>
                </div>
            ) : (
                <div className="task-content">
                    <div className="task-text_box">
                    <span className="task-text">{task}</span>
                    </div>

                    <div className="mini-btn_box">
                        <button
                            className="mini-btn"
                            onClick={handleEdit}
                        >
                            <img src={editIcon} alt="Edit" width="16" height="16"/>
                        </button>

                        <button
                            className="mini-btn"
                            onClick={handleDelete}
                        >
                            <img src={deleteIcon} alt="Delete" width="16" height="16"/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task;