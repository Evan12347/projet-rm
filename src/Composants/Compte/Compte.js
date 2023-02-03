import {useState} from "react";
import {Inscription} from "./Inscription";
import {useSelector} from "react-redux";
import {auth} from "../../Firebase";
import {signOut} from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import style from "./Compte.module.css";

export const Compte = () => {

    const [statut, setStatut] = useState(true)
    const userId = useSelector(state => state.auth.id);

    return (
        <div>
            <h1>Compte</h1>
            {userId ? (
                <button onClick={() => signOut(auth)}>Déconnexion<LogoutIcon/></button>
            ) : (
                <div className={style.form}>
                    <div className={style.container}>
                        <Inscription statut={statut}/>
                        <button onClick={() => setStatut(s => !s)} className={style.button}>
                            {statut ? "Déjà inscrit ? Se connecter" : "Cliquez ici pour créer un compte"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}