import {useState} from "react";
import {Inscription} from "./Inscription";

export const Compte = () => {

    const [statut, setStatut] = useState(true);

    return (
        <div>
            <h1>Compte</h1>
            <Inscription statut={statut}/>
            <button onClick={() => setStatut(s => !s)}>{statut ? "Déjà inscrit ? Se connecter" : "Créer un compte"}</button>
        </div>
    )
}