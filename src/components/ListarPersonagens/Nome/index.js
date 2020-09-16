import React, { useEffect, useState } from 'react';

import api from '../../../service/api'
import './style.css'

export default function ListarPersonagens(){

    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        api.get('').then(response =>{
            setLista(response.data.data.results);
        })
        .catch(err =>{
            console.log('error',err)
        }) 
    },[]);

    return(
        <>
            

    
             <ul>
                {lista.map(hero => (   
                    <li key={hero.id} >
                        <div>
                            <h1>{hero.name}</h1>
                        </div>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
                        
                    </li>
            
                ))}
            
             </ul>
    

        </>


    );

}
