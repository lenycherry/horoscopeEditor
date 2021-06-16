import React, { useState, useEffect } from 'react';
import horoscopeTexts from "../../horoscopeTexts.json";




function HoroscopeText() {

    const [text, setText] = useState("");


    useEffect(() => {
        const currentText = horoscopeTexts.horoscopeTexts[0];
        setText(currentText);

    }, []);


    function handleClick() {
        const textsArray = horoscopeTexts.horoscopeTexts;
        const randomText = textsArray[Math.floor(Math.random() * textsArray.length)];
        setText(randomText);
        console.log(this.currentText)
        console.log(this.random)
    };




    return (
        <>
            <div className="textarea-content">
                <label>Editez votre texte</label>
                <textarea id="text-astro" name="text-astro" rows="10" cols="60" required defaultValue={text}></textarea>
            </div>
            <div className="btn-form-bloc">
                <button className="btn btn-edit">Valider</button>
                <button className="btn btn-random" onClick={() => handleClick()}>Aléatoire</button>
            </div>
        </>
    )
}

export default HoroscopeText


