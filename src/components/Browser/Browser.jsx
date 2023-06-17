
const Browser = ({ terminoBusqueda, onChange }) => {

  return (
    <div className="container">
      <h1>Listado de colaboradores</h1>
      <input type="text" value= {terminoBusqueda} onChange={onChange} />
    </div>
  );
};

export default Browser
