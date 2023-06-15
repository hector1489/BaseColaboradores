

const Table = ({ colaboradores, eliminarColaborador }) => {
  const handleEliminar = (id) => {
    eliminarColaborador(id);
  };

  return (
    <table>
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
  );
};

export default Table
