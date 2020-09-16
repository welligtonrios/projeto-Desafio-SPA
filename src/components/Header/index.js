import React, { useEffect, useState } from 'react';
import './style.css'
import api from '../../service/api'

function Header({ logo, icon }) {

    

    return (
        <>
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


        </header>

        <div className="listarPersonagem">
            <button className="barra2">
                aaa
            </button>
        </div>

        </>
    );
}

export default Header;