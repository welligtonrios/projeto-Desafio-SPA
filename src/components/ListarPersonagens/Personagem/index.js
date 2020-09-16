import React, { useEffect, useState, useCallback } from 'react';

import api from '../../../service/api'
import './style.css'


/*Booststrap / reactstrap*/
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container } from 'reactstrap';




export default function ListarPersonagem() {

    const [lista, setLista] = useState([]);
    const [hero, setHeros] = useState('');

    /*função que fará a pesquisa da barra do pesonagem*/ 
    const buscarHeroi = useCallback(async () => {
        const response = await api.get('http://gateway.marvel.com/v1/public/characters?name=iron%20man&ts=1&apikey=f395721c8a9678197e445dc3da092879&hash=c873e15a8ca807d3232075d42403fd09')
        const data = response.data.data.results;
        setLista([...lista, data[0]]);
        //setNewTech('');
    }, [lista, hero]);

    //}

    return (
        <>
           <div>
            <Button className="botaoPesquisa" color="dark" size="lg" block onClick={buscarHeroi}><h5 id="text-color">Pesquisar Personagem</h5></Button>
            </div>
            <ul>
                {lista.map(hero => (
                    <li key={hero.id} >
                        <Container className="themed-container" fluid="lg">

                            <Card className="postagem">
                                <CardImg className="imagens" top width="100%" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle id="text-mgs"><h4>{hero.name}</h4></CardTitle>
                                </CardBody>
                            </Card>

                        </Container>
                    </li>

                ))}

            </ul>


        </>


    );

}