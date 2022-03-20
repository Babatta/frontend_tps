import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react' ;
import './Search.css';
import Navigation from '../../components/Navigation';
 
 function SousSecteur() {
    const [datas,setDatas ] = useState([]);
    const [searchSousecteur,setSearchSousecteur ] = useState("");
    useEffect (() => {    
        fetch('http://127.0.0.1:8000/soussecteurs/list-sousecteur')
        .then((response) => response.json())
        .then((json) => setDatas(json));
    }, []);

    const handleSearchSousecteur = (e) => {
        let value = e.target.value;
        setSearchSousecteur(value);
    };

     console.log(searchSousecteur);

        return (
            <>
              <Navigation/>
            <div className='searchBar'>
                <input 
                type='text'
                name='searchBar'
                id='searchBar'
                placeholder='Recherche par nom secteur' 
                onChange={handleSearchSousecteur}
                />
                
                
            </div>
            <div className="search_results">
                {datas
                    .filter((val) => {
                    return val.nomSousSecteur.includes(searchSousecteur);
                })
                .map((val) => {
                    return (                      
                <div className='search_result' key={val.id}>
                    {val.nomSousSecteur} {val.secteur}<h6> REGARDE</h6> {val.secteur.nomSecteur}
                   
                </div> );


                
                }
                )}
                </div>
            
            </>
        );
    }
    
    export default SousSecteur 
