import React, { useEffect, useState } from 'react';
import './style.css'
import api from '../../service/api'

function Header({ logo, icon }) {

    
    const [hero, setHeros] = useState('');

    async function buscarHeroi() {

       const response = await api.get('http://gateway.marvel.com/v1/public/characters?name=Abyss&ts=1&apikey=f395721c8a9678197e445dc3da092879&hash=c873e15a8ca807d3232075d42403fd09'
       )
        console.log(response.data.data.results);

    }
    


    return (
        <header id="header">
            <a href="#" className="logo">
                {logo}
                {icon}
            </a>

            <nav className="navbar">
                <ul className="nav-list">
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">Services</a>
                    <a href="#" className="nav-item">Contact</a>
                </ul>
            </nav>

            <input type="text"
                value={hero}
                onchange={e => setHeros(e.target.value)}
            />

            <button type="button" onClick={() => buscarHeroi()}>Pesquisar</button>


        </header>
    );
}

export default Header;