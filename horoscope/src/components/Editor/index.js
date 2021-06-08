import React from 'react';
import './editor.css';

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
                <div className="form-content">
                    <label>Editez votre texte</label>
                <textarea id="text-astro" name="text-astro" rows="10" cols="60" required></textarea>
                </div>
                <div className="btn-form-bloc">
                <button className="btn btn-edit">Valider</button>
                <button className="btn btn-random">Aléatoire</button>
                </div>
            </form>
        </div>
    )
}

export default Editor
