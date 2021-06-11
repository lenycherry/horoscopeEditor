import React, { useState, useEffect } from 'react';
import data from "../../horoscopeTexts.json";




const HoroscopeText = () => {

    const [text, setText] = useState("")


    loadCurrentText(() => {

        setText(data.horoscopeText[0])
    })

    useEffect(() => {
        this.loadCurrentText(this.state.text)
        console.log(this)
    })

    console.log(data);

    console.log(data.horoscopeText[0])

    return (
        <>
            <div className="textarea-content">
                <label>Editez votre texte</label>
                <textarea id="text-astro" name="text-astro" rows="10" cols="60" required defaultValue={text}></textarea>
            </div>
            <div className="btn-form-bloc">
                <button className="btn btn-edit">Valider</button>
                <button className="btn btn-random">Aléatoire</button>
            </div>
        </>
    )
}

export default HoroscopeText
