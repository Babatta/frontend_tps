import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react' ;
import  tps from './images/tps0.png';
import  senegal from './images/sn.png';
import Navigation from '../../components/Navigation';
import Slide from './Slide';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
const Menu = () =>{
    return (
     <>
        <header className="header__middle">
            <div className="container">
                <div className="row">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <img src={tps} alt="logo" width="90px" height="80px" />
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><h6  align="center"><b>Fondation</b> <br></br><b>Trade Point Senegal</b></h6></a>
        </li>
      </ul>
    </div>
  <div >
  
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><h6  align="center"><b>REPUBLIQUE DU SENEGAL</b> <br></br>Un Peuple - Un But - Une Foi<br></br>
          <b>Ministere du Commerce et des PME</b>
          </h6></a>
        </li>
        <li>
        <img  align="center" src={senegal} alt="logo" width="80px" height="30px" /><br></br>
        </li>
    </ul>
    </div>
    </div>
    </div>
</nav>
</div>
</div>
</header>


<Navbar/>

</>    
    )
  }

  export default Menu;

  // <div className="container-republic-text" >REPUBLIQUE DU SENEGAL</div><br></br>
  //     <div>Un Peuple - Un But - Une Foi</div><br/>
