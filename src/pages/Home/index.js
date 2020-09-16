import React from 'react';
import ListaPersonagens from '../../components/ListarPersonagens/Nome';
import Header from '../../components/Header'
import './style.css'


 function Home(){

    return(
        <>
            
           <Header logo="Personagens Marvel" />
                    <h1>Lista de Personagens</h1>
                     
                     <ListaPersonagens />
                     
        
        </>

    )


 }
 
 export default Home