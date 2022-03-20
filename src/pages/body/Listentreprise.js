import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react' ;
import './Search.css';
import Navigation from '../../components/Navigation';
import Menu from '../banniere/Menu';
import Tableau from './Tableau';
 
 function Listentreprise() {
    const [datas,setDatas ] = useState([]);
    const [q, setQ] = useState("")
    //const [searchEntreprise,setSearchEntreprise ] = useState("nomEntreprise","ninea","directeurGeneral","adresse");
    useEffect (() => {    
        fetch('http://127.0.0.1:8000/list-entreprise')
        .then((response) => response.json())
        .then((json) => setDatas(json));
    }, []);

    function search(rows){
         const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter((row)=> 
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1 )
               // (row)=> row.nomEntreprise.toLowerCase().indexOf(q) > -1 ||
        );
    }

   

   

        return (
            <>
          <Menu/>

            <Navigation/><br></br>
              <div> 
                  <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
              </div>
              <div>
                  <Tableau data={search(datas)} />
              </div>
            
            </>
        );
    }
    
    export default Listentreprise 
