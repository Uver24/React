 import{useState} from 'react'
 function App (){
  const [listadoNombres,setListadoNombres] = useState([]);
  const [nombre, setNombre] = useState('');
  const manejoTipoNombre = (evento) => {
    setNombre(evento.target.value);
  }
  const manejoBotonGuardar  = ()=>{
    //SPREAD OPERATOR..
    //Guardar
    setListadoNombres ([...listadoNombres,nombre]);
    //limpiar
    setNombre ('');
  }
  return (
    <div>
      <h1>Mi Primer Proyecto</h1>
      <h2>Nombre: {nombre}</h2>
      <label >Nombre</label>
      <input type="text" placeholder="Ingrese su Nombre" value={nombre} onChange={manejoTipoNombre}/>
      <input type="button"value="Guardar" onClick={manejoBotonGuardar} />
      
      <h2>listado Nombres({listadoNombres.length})</h2>
      <ul>
        {listadoNombres.map((valorNombre,indice)=>{
          const key = valorNombre + indice;
          return <li key={key}>{valorNombre}</li>;
        })}
      </ul>
    </div>
  )
  
}
export default App;