import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import NewTask from '../newTask/NewTask';
import 'bootstrap-icons/font/bootstrap-icons.css';

const List = () => {
    const list = [];

    const [tasks, setTasks] = useState(list);

    const handleNewTask = (newItem) => {
        const newtask = {
            id: Math.random().toString(),
            done: false,
            ...newItem,
        };
        setTasks((prevState) => [...prevState, newtask]);
    };

    const handleDone = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const handleDelete = (id) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        );
    };

    return (
        <>
            <h1>Lista de tareas:</h1>
            <ListGroup>
                {tasks.map((task) => (
                    <ListGroup.Item key={task.id} variant={task.done ? 'success' : 'danger'}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Form.Check
                                    type="checkbox"
                                    label={task.task}
                                    checked={task.done}
                                    onChange={() => handleDone(task.id)}
                                />
                            </div>
                            <div>
                                <i className="bi bi-trash" pointer = 'cursor' onClick={() => handleDelete(task.id)}></i> 
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <NewTask onHandleNewTask={handleNewTask} />
        </>
    );
}

export default List
