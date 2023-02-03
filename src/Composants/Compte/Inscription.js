import style from "./Inscription.module.css";
import {useState} from "react";
import {auth} from "../../Firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import RegisteredIcon from '@mui/icons-material/HowToReg';
import {Login} from "@mui/icons-material";

export const Inscription = ({statut}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isPasswordValid = (password) => password.length >= 8;

    const handleSubmit = async (event) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        event.preventDefault();
        if (!emailRegex.test(email)) {
            return console.log("Email invalide");
        }
        if (statut) {
            if (isPasswordValid(password)) {
                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                    console.log("Inscription réussie")
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("Mot de passe invalide");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("Connexion réussie")
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.titre}>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <input className={style.container}
                       type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                />
                <input className={style.container}
                       type="password"
                       placeholder="Mot de passe"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit" className={style.buttonWithIcon}>
                    {statut ? (<>Créer un compte <RegisterIcon/></>) : (<>Connexion <LoginIcon/></>)}
                </button>
            </form>
        </div>
    )
}