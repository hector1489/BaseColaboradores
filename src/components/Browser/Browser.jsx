
const Browser = ({ handleTerminoBusqueda }) => {
  const handleChange = (e) => {
    handleTerminoBusqueda(e.target.value);
  };

  return (
    <div className="container">
      <h1>Listado de colaboradores</h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Browser
