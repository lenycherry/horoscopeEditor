import React from 'react'

const Editor = () => {
    return (
        <div>
            <form action="" method="get" className="astro-form">
                <div>
                    <label> Signe astro</label>
                    <input type="text" name="signe-astro" id="signe-astro" required></input>
                </div>
                <div>
                    <label>Editez votre texte</label>
                <textarea id="text-astro" name="text-astro" rows="10" cols="33" required></textarea>
                </div>
                <div>
                <button>Créer</button>
                <button>Editer</button>
                <button>Aléatoire</button>
                </div>
            </form>
        </div>
    )
}

export default Editor
