import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Listentreprise from './pages/body/Listentreprise';

import Secteur from './pages/body/Secteur';
import Sousecteur from './pages/body/SousSecteur';
import Accueil from './pages/banniere/Accueil';
import NotFound from './pages/body/NotFound';
// import SlideImage from './pages/banniere/SlideImage';
import Slide from './pages/banniere/Slide';
import Menu from './pages/banniere/Menu';
import Navbar from './components/Navbar';
import NavbarMenu from './components/NavbarMenu';

const App = () =>{
    return (
        <BrowserRouter>
             <Switch>
                 <Route path="/" exact component={Accueil}/>
                 <Route path="/entr" component={Listentreprise} />
                 <Route path="/secteur" component={Secteur} />
                 <Route path="/sous-secteur" component={Sousecteur} />
                 <Route path="/slide" component={Slide} />
                 <Route path="/menu" component={Menu} />
                 <Route path="/navbar" component={Navbar} />
                 <Route path="/navbarmenu" component={NavbarMenu} />
              
                 <Route component={NotFound} />
              </Switch>
        </BrowserRouter>
       );
  };

export default App;
