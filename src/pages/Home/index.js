import React from 'react';
import ListaPersonagens from '../../components/ListarPersonagens/Nome';
import Header from '../../components/Header'
import ListarPersonagem from '../../components/ListarPersonagens/Personagem'
import './style.css'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


function Home() {

   return (
      <>

         <Header />

         <div className="area-princiapal" >
            <div className="textoLista">
               <h1>Pesquisar Pesonagem</h1>
               <ListarPersonagem />
               
               </div>
         </div>

         <div className="area-princiapal" >
            <div className="textoLista">
               <h1>Lista de Personagens</h1>
               <ListaPersonagens />
            </div>
            
         </div>

      </>

   )


}

export default Home