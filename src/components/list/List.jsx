import React, { useState } from 'react';
import { Form, ListGroup, Button } from 'react-bootstrap';
import NewTask from '../newTask/NewTask';

const List = () => {
    const list = [
        { id: 1, task: "Ordenar la casa.", done: false },
        { id: 2, task: "Sacar la basura.", done: false },
        { id: 3, task: "Terminar el script.", done: false },
        { id: 4, task: "Subir los cambios a GitHub.", done: false },
    ];

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
                        <Form.Check
                            type="checkbox"
                            label={task.task}
                            checked={task.done}
                            onChange={() => handleDone(task.id)}
                        />
                        <Button variant="danger" onClick={() => handleDelete(task.id)}>Eliminar tarea</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <NewTask onHandleNewTask={handleNewTask} />
        </>
    );
}

export default List
