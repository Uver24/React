import React from "react";
import {Link} from "react-router-dom";
import "./estilosNav.css";

const Nav =()=>{
    return (
       <> 
       <ul>
          <li> <Link to="/" >Home</Link></li>
          <li> <Link to="/App" >Listado</Link></li>
          <li> <Link to="/BetterPeopleApi" >Rick Api</Link></li>
          <li> <Link to="/Filtrar" >Filtrar</Link></li>

       </ul>
       </>
    )
}

export default Nav;