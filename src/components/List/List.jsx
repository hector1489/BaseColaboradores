import React from 'react';
import Table from 'react-bootstrap/Table';
import { BaseColaboradores } from '../../BaseColaboradores';

function ResponsiveExample() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>correo</th>
          <th>edad</th>
          <th>cargo</th>
          <th>telefono</th>
        </tr>
      </thead>
      <tbody>
        {BaseColaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
