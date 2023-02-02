import style from "./Inscription.module.css";
import {useState} from "react";
import {auth} from "../../Firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export const Inscription = ({statut}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isPasswordValid = (password) => password.length >= 8;

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            <h1>Inscription</h1>
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
                <button type="submit">{statut ? "Inscription" : "Connexion"}</button>
            </form>
        </div>
    )
}