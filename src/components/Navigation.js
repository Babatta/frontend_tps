import React from 'react';
import { NavLink } from "react-router-dom";
const Navigation = () =>{
    return (
      <div className="navigation" activeClassName="nav-active"> 
          <NavLink exact to="/" >
              Accueil
           </NavLink>
           <NavLink exact to="/entr" activeClassName="nav-active">
             Liste des entreprises
           </NavLink>
           <NavLink exact to="/secteur"  activeClassName="nav-active">
             Liste des secteurs
           </NavLink>
           <NavLink exact to="/sous-secteur" activeClassName="nav-active">
             Liste des sous secteurs
           </NavLink>
           <NavLink exact to="/slide" activeClassName="nav-active">
             Slide
           </NavLink>
           <NavLink exact to="/menu" activeClassName="nav-active">
             Menu
           </NavLink>
           <NavLink exact to="/navbar" activeClassName="nav-active">
             Navebar
           </NavLink>
           <NavLink exact to="/navbarmenu" activeClassName="nav-active">
             NavebarMenu
           </NavLink>
           <NavLink exact to="/table" activeClassName="nav-active">
             table material
           </NavLink>
      </div>
    );
  };

  export default Navigation