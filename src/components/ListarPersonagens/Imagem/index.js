import React, { useEffect, useState } from 'react';

import api from '../../../service/api'

function ListarPersonagensImagens(){

    const [lista, setLista] = useState([]);

    useEffect(() => {
        api.get('').then(response =>{
            setLista(response.data.data.results);
        })
        .catch(err =>{
            console.log('error',err)
        }) 
    },[]);


    

}

export default () => <img src={}/>