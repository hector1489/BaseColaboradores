import React, { useState } from 'react';
import Browser from './components/Browser/Browser';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import { BaseColaboradores } from './BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div className="container">
      <Browser />
      <div className="row">
        <div className="col-sm-8">
          <Table colaboradores={colaboradores} />
        </div>
        <div className="col-sm-4">
          <Form agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
}

export default App;
