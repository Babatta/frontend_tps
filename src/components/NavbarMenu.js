import React, {useState} from 'react';
import Button from './Button';
import { Link,NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';
import  tps from '../pages/banniere//images/tps0.png';
import { FiChevronDown, FiXCircle ,FiAlignRight} from "react-icons/fi";

const NavbarMenu = () =>{
    const [isMenu, setisMenu]=useState(false);
    const [isResponsiveclose,setResponsiveclose]=useState(false);
    
    const toggleClass = () => {
        setisMenu (isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true :false);
    }
    let  boxClass=["main-menu menu-right manuq1"];
    if(isMenu){
        boxClass.push('menuq2');
    }
    else{
      boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu]=useState(false);
    const toggleSubMenu = () => {
        setMenuSubMenu (isMenuSubMenu === false ? true : false);
        }
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu){
        boxClassSubMenu.push("sub__menus__Active");
    }
    else{
        boxClassSubMenu.push('');
    }
    return(
        <>
       <div className="">
        <header className="header__middle">
            <div className="container">
                <div className="row">

                    <div className="header__middle__logo">
                    <Link exact activeClassName='is-active' >
                                     <img src={tps} alt="logo"/>
                    </Link>
                    </div>
                   
                    <div className="header__middle__menus">
                        <nav className="navbar">
                        { /* Responsive Menu Button */}
                        {isResponsiveclose === true ? <> 
                            <span className="menubar__button" style={{display: 'none'}} onClick={toggleClass}><FiXCircle/></span>
                       </> :<>
                             <span className="menubar__button" style={{display: 'none'}} onClick={toggleClass}><FiAlignRight/></span>
                       </>}
                            <ul  className={boxClass.join(' ')}>
                                <li className="menu-item" >
                                <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                        Accueil
                                </Link>

                                </li>
                                <li className="menu-item">
                                <Link onClick={toggleClass} activeClassName='is-active' to={'/presentation'}>
                                        Présentation <FiChevronDown/>
                                    </Link>
                                    <ul className={boxClassSubMenu.join(' ')}>
                                    <li className="menu-item">
                                    <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                        Trade point Sénegal
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                        Nos partenaires
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                    Base de Données TPS
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                       Qui-sommes-nous
                                    </Link>
                                </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                <Link onClick={toggleClass} activeClassName='is-active' to={'/e-commerce'}>
                                        e-Commerce <FiChevronDown/>
                                    </Link>
                                    <ul className={boxClassSubMenu.join(' ')}>
                                    <li className="menu-item">
                                    <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                        Accueil
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link onClick={toggleClass} activeClassName='is-active' to={'/accueil'}>
                                        Accueil
                                    </Link>
                                </li>
                                    </ul>
                                   
                                </li>


                            </ul>
                        </nav>

                    </div>
                   
                </div>

            </div>
            

        </header>
        </div>
        
        </>
    )
}
export default NavbarMenu