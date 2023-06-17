import React, { useState } from 'react'
import Alert from '../Alert/Alert'
/*cambio de componentes,
samll para declaracion de campos mas intuitivos
required y pattern para formato de validacion
form-spacing para agregar espacio desde css
*/
const Form = ({ agregarColaborador }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handlerSend = (e) => {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;
    const correo = e.target.elements.correo.value;
    const edad = e.target.elements.edad.value;
    const cargo = e.target.elements.cargo.value;
    const telefono = e.target.elements.telefono.value;

    const nuevoColaborador = {
      id: agregarColaborador.length + 1,
      nombre,
      correo,
      edad,
      cargo,
      telefono
    };

    agregarColaborador(nuevoColaborador);
    setShowAlert(true);
    e.target.reset();
  };

  return (
    <form onSubmit={handlerSend}>
      <h4>Agregar colaborador</h4>
      <div className="form-group form-spacing">
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          name="nombre"
          placeholder="Nombre del Colaborador"
          pattern="[A-Za-z\s]+"
          required
        />
        <small className="form-text text-muted">Ingrese un nombre válido (solo letras).</small>
      </div>
      <div className="form-group form-spacing">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          name="correo"
          placeholder="Email del colaborador"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <small className="form-text text-muted">Ingrese un correo electrónico válido.</small>
      </div>
      <div className="form-group form-spacing">
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          name="edad"
          placeholder="Edad"
          min="1"
          max="99"
          required
        />
        <small className="form-text text-muted">Ingrese una edad válida (entre 1 y 99).</small>
      </div>
      <div className="form-group form-spacing">
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword2"
          name="cargo"
          placeholder="Cargo"
          required
        />
      </div>
      <div className="form-group form-spacing">
        <input
          type="tel"
          className="form-control"
          id="exampleInputPassword3"
          name="telefono"
          placeholder="Teléfono del colaborador"
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Agregar Colaborador</button>
      {showAlert && (
        <Alert texto="¡Nuevo colaborador agregado!" color="success" />
      )}
    </form>
  );
}

export default Form
