import React, { useState } from 'react'
import Alert from '../Alert/Alert'

const Form = () => {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const [email, setEmail] = useState('');

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const handleConfirmPassword = () => {
    if (pass === confirmPass) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
    handleConfirmEmail();
  };

  const handleConfirmEmail = () => {
    if (emailRegex.test(email) === false) {
      alert('Ingresa un correo válido');
    }
  }

  const handlerSend = (e) => {
    handleConfirmPassword();
    e.preventDefault();
  }

  return (
    <form onSubmit={handlerSend}>
      <h4>Agregar colaborador</h4>
      <div className="form-group">
        <label htmlFor="exampleInputName"/>
        <input type="name" className="form-control" id="exampleInputName" placeholder="Nombre del Colaborador" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"/>
        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email del colaborador" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1"/>
        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Edad" value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2"/>
        <input type="text" className="form-control" id="exampleInputPassword2" placeholder="Cargo" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2"/>
        <input type="number" className="form-control" id="exampleInputPassword2" placeholder="Telofono del colaborador" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success">Agregar Colaborador</button>
      {showAlert && (
        <Alert texto="¡Nuevo colaborador agregado!" color="success" />
      )}
      {!showAlert && (
        <Alert texto="¡Completa los campos!" color="danger" />
      )}
    </form>
  );
}

export default Form