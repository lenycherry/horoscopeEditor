import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="banner-container">
            <Link className="title" to="/"><h1>Editeur d'horoscope</h1></Link>
            <div className="navbar">
                <Link className="btn home-Link" to="/">Accueil</Link>
                <Link className="btn editpage-Link" to="/editor">Edition</Link>
            </div>

        </header>
    )
}

export default Header


