import React from 'react';
import './editor.css';
import HoroscopeText from '../HoroscopeText.js';

const Editor = () => {
    return (
        <div className="editor-main-content">
            <form action="" method="get" className="astro-form">
                <div className="form-content">
                    <label> Signe astro</label>
                    <select id="signe-astro" name='signe-astro'>
                        <option value="belier">Bélier</option>
                        <option value="taureau">Taureau</option>
                        <option value="gemeaux">Gémeaux</option>
                        <option value="cancer">Cancer</option>
                        <option value="lion">Lion</option>
                        <option value="vierge">Vierge</option>
                        <option value="balance">Balance</option>
                        <option value="scorpion">Scorpion</option>
                        <option value="sagitaire">Sagittaire</option>
                        <option value="capricorne">Capricorne</option>
                        <option value="verseau">Verseau</option>
                        <option value="poissons">Poissons</option>

                    </select>
                </div>
                <HoroscopeText />
            </form>
        </div>
    )
}

export default Editor
