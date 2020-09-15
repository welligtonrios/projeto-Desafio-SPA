import React, { useEffect, useState } from 'react';

import api from '../../service/api'

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
                    <li key={hero.id} > {hero.name}</li>
                ))}
            </ul>
        </>
    );

}
