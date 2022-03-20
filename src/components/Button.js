import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const Button=() =>{
    return(
        <>
        <Link to='/connexion'>
            <button className='btn'> <b className="col"> Se Connecter</b></button>
        </Link>
        <Link to='/inscription'>
            <button className='btn' ><b className="col">Incrivez-vous</b></button>
        </Link>
    </>
    );
}
export default Button