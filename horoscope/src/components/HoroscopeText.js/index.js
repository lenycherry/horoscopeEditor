import React, { useState, useEffect } from 'react';
import horoscopeTexts from "../../horoscopeTexts.json";




const HoroscopeText = () => {

    const [text, setText] = useState("")


    useEffect(
        () => {
            const currentText = horoscopeTexts.horoscopeTexts[0]
            setText(currentText)
            console.log(currentText)
            console.log(horoscopeTexts.horoscopeTexts[0])
        },
        [],
    );

    handleclick = () => {
        const randomText = horoscopeTexts.horoscopeTexts[Math.floor(Math.random() * horoscopeTexts.length)];
        setText(randomText);
    };


    return (
        <>
            <div className="textarea-content">
                <label>Editez votre texte</label>
                <textarea id="text-astro" name="text-astro" rows="10" cols="60" required defaultValue={text}></textarea>
            </div>
            <div className="btn-form-bloc">
                <button className="btn btn-edit">Valider</button>
                <button className="btn btn-random" onClick={this.handleclick()}>Aléatoire</button>
            </div>
        </>
    )
}

export default HoroscopeText


