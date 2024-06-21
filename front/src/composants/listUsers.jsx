
import { useState } from 'react'


export default function ListUtilisateurs({onSubmit}) {
    const [nom, setNom] = useState("")
    const [nomError, setNomError] = useState("")

    const [prenom, setPrenom] = useState("")
    const [prenomError, setPrenomError] = useState("")

    function changeNom(e) {
        setNom(e.target.value)
        setNomError("")
    }
    function changePrenom(e) {
        setPrenom(e.target.value)

    }

    async function  soumetFormulaire(){
        if(nom === "" || prenom === ""){
           setNomError(nom === "" ? "Le champ est obligatoire" : "")
           setPrenomError(prenom === "" ? "Le champ est obligatoire" : "")
           return
        }
        onSubmit(nom, prenom)
    }

    const isDisabled = nom === "" || prenom === "";

    return (
        <div>
            <div>
                <input placeholder="Nom" onChange={changeNom} />
                <p className='input-error'>{nomError}</p>
                <input placeholder="Prenom" onChange={changePrenom} />
                <p className='input-error'>{prenomError}</p>
                <button  onClick={soumetFormulaire}>Ajouter</button>
            </div>
        </div>
    )
}