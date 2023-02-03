import {useState} from "react";
import {Inscription} from "./Inscription";
import {useSelector} from "react-redux";
import {auth} from "../../Firebase";
import {signOut} from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import style from "./Compte.module.css";
import RegisteredIcon from '@mui/icons-material/HowToReg';

export const Compte = () => {

    const [statut, setStatut] = useState(true)
    const userId = useSelector(state => state.auth.id);

    return (
        <div>
            <h1>Compte</h1>
            {userId ? (
                <div className={style.container}>
                    <div className={style.titre}>
                        <RegisteredIcon/> Connecté en tant que <strong>{auth.currentUser.email}</strong>
                    </div>
                    <button onClick={() => signOut(auth)} className={style.buttonDeconnexion}>
                        <LogoutIcon/>Déconnexion
                    </button>
                </div>
            ) : (
                <div className={style.form}>
                    <div className={style.container}>
                        <Inscription statut={statut}/>
                        <button onClick={() => setStatut(s => !s)} className={style.button}>
                            {statut ? "Déjà inscrit ? Se connecter" : "Créer un compte ?"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}