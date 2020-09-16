import React, { useEffect, useState,useCallback } from 'react';

import api from '../../../service/api'
import './style.css'

export default function ListarPersonagens() {
    const [lista, setLista] = useState([]);
    const [hero, setHeros] = useState('');

   // async function buscarHeroi() {

       //console.log(response.data.data.results);
       
       //setLista([...lista,data]);*/
        const buscarHeroi=  useCallback( async ()=> {
            const response = await api.get('http://gateway.marvel.com/v1/public/characters?name=iron%20man&ts=1&apikey=f395721c8a9678197e445dc3da092879&hash=c873e15a8ca807d3232075d42403fd09')
            const data  = response.data.data.results;
            setLista([...lista, data[0]]);
            //setNewTech('');
          },[lista, hero]);

    //}



    useEffect(() => {
        api.get('').then(response => {
            setLista(response.data.data.results);
        })
            .catch(err => {
                console.log('error', err)
            })
    }, []);

    return (
        <>
            <input type="text"
                value={hero}
                onchange={e => setHeros(e.target.value)}
            />

            <button type="button" onClick={buscarHeroi}>Pesquisar</button>



            <ul>
                {lista.map(hero => (
                    <li key={hero.id} >
                        <div>
                            <h1>{hero.name}</h1>
                            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
                            <h4>{hero.description}</h4>
                        </div>
                    </li>

                ))}

            </ul>


        </>


    );

}
