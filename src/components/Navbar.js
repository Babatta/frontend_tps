import React, {useState} from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import  tps from '../pages/banniere/images/tps0.png';
import './Navbar.css';
import '../App.css';
import Dropdown from './Dropdown';
import Navigation from './Navigation';
 import {FiAlignRight,FaExclamationCircle,FiChevronDown} from 'react-icons/fa';

function Navbar() {
    const [click,setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };

    return(
        <>
        <div className="band">
            <nav className='navbar' >
            <Link to='/navbar'className='navbar-logo'>
               {/* // <img src={tps} alt="logo" width="90px" height="50px"/> */}
            </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

                </div> 

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/accueil' className='nav-links' onClick={closeMobileMenu}>
                            Accueil
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/presentation' className='nav-links' onClick={closeMobileMenu}>
                            Présentation <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        <Link to='/e-commerce' className='nav-links' onClick={closeMobileMenu}>
                            e-Commerce
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ressources' className='nav-links' onClick={closeMobileMenu}>
                           Ressources
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contacts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aide' className='nav-links' onClick={closeMobileMenu}>
                            Aide
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/connexion' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Connecter
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/incription' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Inscription
                        </Link>
                    </li>
                    
                </ul>
                <Button/>
            </nav>
            
            </div>
        </>
    );

}
export default Navbar;
