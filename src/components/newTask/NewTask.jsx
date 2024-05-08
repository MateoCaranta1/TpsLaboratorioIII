import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const NewTask = ({ onHandleNewTask }) => {
    const [newTask, setNewTask] = useState("");
    const [show, setShow] = useState(false);

    const handleNewTask = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask === "") {
            alert ("Ingrese una tarea...");
            return;
        }
        const taskData = {
            task: newTask
        };

        onHandleNewTask(taskData);

        setNewTask("");

    }

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <Button onClick={handleClick}>
                {show ? "Esconder" : "Agregar tarea"}
            </Button>
            {show && (
                <Form className='text-white bg-secondary' onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={8}>
                            <Form.Group controlId="newTask">
                                <Form.Label>Tarea</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese tarea"
                                    onChange={handleNewTask}
                                    value={newTask}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Agregar tarea
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </div>
    )
}

export default NewTask