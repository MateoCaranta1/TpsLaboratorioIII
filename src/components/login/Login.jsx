import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Login = () => {
    const [text, setText] = useState ("");

    const handleInput = (event) => {
        setText(event.target.value);
        if (text.toLowerCase().includes("o"))
        {
            alert ("Por favor, ¡Nombres de usuario sin la letra o!");
        }
    };

    const handleClick = (event) => {
        if (text.toLowerCase().includes("o") || !text)
        {
            alert ("Usuario inválido para registrarse");
        }
        else 
        {
            alert ("¡Usuario registrado correctamente!");
        }
    }

  return (
    <>
       <input placeholder='Ingrese su usuario' onChange={handleInput}></input>
        <div>
            <Button variant="danger" onClick = {handleClick} className='m-3'>Registrarse</Button>{' '}
        </div>
        <p className='text-dark'>{text}</p>
    </>
  )
}

export default Login