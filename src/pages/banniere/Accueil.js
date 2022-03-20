import React from 'react';
import Navigation from '../../components/Navigation';
import Menu from './Menu';
import Slide from './Slide'
const Accueil = () =>{
    return (
    <div>
          <Menu/>
          <Slide/>
          <Navigation/>
          Accueil
      </div>
    );
  };

  export default Accueil;