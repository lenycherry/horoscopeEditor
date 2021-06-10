import React from 'react'

const HoroscopeText = () => {
    return (
        <>
        <div className="form-content">
        <label>Editez votre texte</label>
    <textarea id="text-astro" name="text-astro" rows="10" cols="60" required></textarea>
    </div>
    <div className="btn-form-bloc">
    <button className="btn btn-edit">Valider</button>
    <button className="btn btn-random">Aléatoire</button>
    </div>
    </>
    )
}

export default HoroscopeText
