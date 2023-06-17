import React from 'react'

const Table = ({ colaboradores, eliminarColaborador }) => {
  const handleEliminar = (id) => {
    eliminarColaborador(id);
  };
//no olvidar table responsive de react-boottraps
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>correo</th>
            <th>edad</th>
            <th>cargo</th>
            <th>telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td className="icon">
                <i className="fa-solid fa-trash" onClick={() => handleEliminar(colaborador.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table
