import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import logo from '../logoBlanc.png';

const Menu = () => {
    return (
        <nav className="navbar">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/club">Club</Link></li>
                <li><Link to="/equipes">Équipes</Link></li>

                <li className="logo">
                    <img src={logo} alt="" className="logo-image" />
                </li>

                <li><Link to="/medias">Médias</Link></li>
                <li><Link to="/boutique">Boutique</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
