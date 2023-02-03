import {useState} from "react";
import {Inscription} from "./Inscription";
import {useSelector} from "react-redux";
import {auth} from "../../Firebase";
import {signOut} from "firebase/auth";

export const Compte = () => {

    const [statut, setStatut] = useState(true)
    const userId = useSelector(state => state.auth.id);

    return (
        <div>
            <h1>Compte</h1>
            {userId ? (
                <button onClick={() => signOut(auth)}>Déconnexion</button>
            ) : (
                <>
                    <Inscription statut={statut}/>
                    <button onClick={() => setStatut(s => !s)}>
                        {statut ? "Déjà inscrit ? Se connecter" : "Créer un compte"}
                    </button>
                </>
            )}
        </div>
    );
}