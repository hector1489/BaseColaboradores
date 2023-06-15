import React, { useState } from 'react';
import Browser from './components/Browser/Browser';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import { BaseColaboradores } from './BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    nuevoColaborador.id = +colaboradores[colaboradores.length -1].id +1
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const handleTerminoBusqueda = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const filteredColaboradores = colaboradores.filter(
    (colaborador) =>
      colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      colaborador.edad.toString().includes(terminoBusqueda.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="container">
       <Browser handleTerminoBusqueda={handleTerminoBusqueda} />
      <div className="row">
        <div className="col-sm-8">
          <Table colaboradores={filteredColaboradores} eliminarColaborador={eliminarColaborador} />
        </div>
        <div className="col-sm-4">
          <Form agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
}

export default App;
