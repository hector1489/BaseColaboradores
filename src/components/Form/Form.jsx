import React, { useState } from 'react';
import Alert from '../Alert/Alert';

const Form = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setShowAlert(true);
  };

  const handlerSend = (e) => {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;
    const correo = e.target.elements.correo.value;
    const edad = e.target.elements.edad.value;
    const cargo = e.target.elements.cargo.value;
    const telefono = e.target.elements.telefono.value;

    if (nombre && correo && edad && cargo && telefono) {
      const nuevoColaborador = {
        id: colaboradores.length + 1,
        nombre,
        correo,
        edad,
        cargo,
        telefono
      };
      agregarColaborador(nuevoColaborador);
      e.target.reset();
    } else {
      setShowAlert(false);
    }
  };

  return (
    <form onSubmit={handlerSend}>
      <h4>Agregar colaborador</h4>
      <div className="form-group">
        <label htmlFor="exampleInputName">Nombre del Colaborador</label>
        <input type="text" className="form-control" id="exampleInputName" name="nombre" placeholder="Nombre del Colaborador" required />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail">Email del colaborador</label>
        <input type="email" className="form-control" id="exampleInputEmail" name="correo" placeholder="Email del colaborador" required />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Edad</label>
        <input type="number" className="form-control" id="exampleInputPassword1" name="edad" placeholder="Edad" required />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Cargo</label>
        <input type="text" className="form-control" id="exampleInputPassword2" name="cargo" placeholder="Cargo" required />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword3">Teléfono del colaborador</label>
        <input type="tel" className="form-control" id="exampleInputPassword3" name="telefono" placeholder="Teléfono del colaborador" required />
      </div>
      <button type="submit" className="btn btn-success">Agregar Colaborador</button>
      {showAlert && (
        <Alert texto="¡Nuevo colaborador agregado!" color="success" />
      )}
    </form>
  );
}

export default Form
