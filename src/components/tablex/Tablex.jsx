import React from 'react'
import { Table } from 'react-bootstrap';

const Tablex = ({ netIncomes }) => {

    const totalIncome = netIncomes.reduce((addition, item) => addition + item.income, 0);
    const average = totalIncome / netIncomes.length;

    return (
        <>
            <h1>RESULTADOS</h1>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='bg-primary'>Marca</th>
                        <th className='bg-primary'>Ingreso neto</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item, i) => (
                        <tr key={i}>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
                <hr></hr>
                <p className='bg-success text-light'>Promedio de ingreso neto: {average.toFixed(2)}</p>
                <hr></hr>
            </Table>
        </>
    );
}

export default Tablex