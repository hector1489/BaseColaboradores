import React from 'react';
import Browser from './components/Browser/Browser';
import Table from './components/List/List';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="container">
      <Browser />
      <div className="row">
        <div className="col-sm-8">
        <Table />
        </div>
        <div className="col-sm-4">
        <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
