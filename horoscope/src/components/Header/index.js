import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="banner-container">
            <h1>Editeur d'horoscope</h1>
            <div className="navbar">
                <button className="home-button">Accueil</button>
                <button className="editpage-button">Edition</button>
            </div>

        </header>
    )
}

export default Header


