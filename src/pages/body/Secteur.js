import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react' ;
import './Search.css';
import Navigation from '../../components/Navigation';
 
 function Secteur() {
    const [datas,setDatas ] = useState([]);
    const [searchSecteur,setSearchSecteur ] = useState("");
    useEffect (() => {    
        fetch('http://127.0.0.1:8000/secteurs/list-secteur')
        .then((response) => response.json())
        .then((json) => setDatas(json));
    }, []);

    const handleSearchSecteur = (e) => {
        let value = e.target.value;
        setSearchSecteur(value);
    };

     console.log(searchSecteur);

        return (
            <>
              <Navigation/>
            <div className='searchBar'>
                <input 
                type='text'
                name='searchBar'
                id='searchBar'
                placeholder='Recherche par nom secteur' 
                onChange={handleSearchSecteur}
                />
                
            </div>
            <div className="search_results">
                {datas
                    .filter((val) => {
                    return val.nomSecteur.includes(searchSecteur);
                })
                .map((val) => {
                    return (                      
                <div className='search_result' key={val.id}>
                    {val.nomSecteur}   
                   
                </div> );

                }
                )}
                </div>
            
            </>
        );
    }
    
    export default Secteur 
