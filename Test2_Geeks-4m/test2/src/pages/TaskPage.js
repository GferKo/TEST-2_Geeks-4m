import React, { useState } from 'react';
import Input from "../components/input/Input";
import Button from '../components/button/Button';
import Task from "../components/task/Task";
import './TaskApp.css';

const TaskApp = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [buttonState, setButtonState] = useState('disabled');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.trim()) {
            setButtonState('default');
        } else {
            setButtonState('disabled');
        }
    };

    const handleAddTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue('');
            setButtonState('disabled');
        }
    };

    const handleClearAll = () => {
        setTasks([]);
    };

    const handleDeleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    const handleEditTask = (oldTask, newText) => {
        setTasks(tasks.map(task => (task === oldTask ? newText : task)));
    };

    return (
        <div className="task-app">
            <div className="main_container">
                <h1>TO DO</h1>
                <div className="main_block">
                    <Input value={inputValue} onChange={handleInputChange}/>
                    <div className="main-btns">
                        <Button
                            state={buttonState}
                            onClick={handleAddTask}
                            label={buttonState === 'disabled' ? 'Add Task' : 'Add'}
                        />

                        {buttonState === 'default' && (
                            <Button label="Clear all" onClick={handleClearAll}/>
                        )}
                    </div>
                </div>


                <div className="task-list">
                    {tasks.map((task, index) => (
                        <Task
                            key={index}
                            task={task}
                            onDelete={handleDeleteTask}
                            onEdit={handleEditTask}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskApp;