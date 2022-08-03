import React,{useEffect, useState} from "react";
import Tarjeta from "./componentes/Tarjeta/Tarjeta";
import "./estiloTarjeta.css";




const BetterPeopleApi =  ()=>{
 const [idpersonaje, setIdpersona] = useState(6);
 const [cargando,setCargando] =useState(false);
 const [personajes,setPersonajes]= useState([]);

 
 const llamarApi= async ()=>{
     setCargando(true);
     const result = await fetch("https://rickandmortyapi.com/api/character/"+ idpersonaje,{ method: 'Get'});
     const personaje= await result.json();
     console.log(personaje)
     setCargando(false);
    
    setPersonajes([ [personaje], ...personajes ])
    setIdpersona(idpersonaje + 1);
    }
    useEffect(()=> {
    ( async ()=>{
      await llamarApi()
    })();

    },[]);
    return(
        <>
        <h1>Busqueda Gente Por Api</h1>
        <h1>{idpersonaje}</h1>
        {cargando && <h2>...cargando</h2>}
        <input type='Button'value="llamar Api" onClick={()=>llamarApi()}/>
        <p>https://rickandmortyapi.com/</p>
       <div className="wrapper">
        {!cargando && personajes.map((personaje)=>{
          return(
           <Tarjeta personaje = {personaje}/>
          )
        })}
      </div> 
        </>
    );
  };
  export default BetterPeopleApi;