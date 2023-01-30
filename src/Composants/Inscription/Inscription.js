import style from "./Inscription.module.css";
import {useState} from "react";


export const Inscription = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isPasswordValid = (password) => {
        const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        return regex.test(password);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isPasswordValid(password)) {
            console.log("Success");
        } else {
            console.log("Error");
        }
    }

    return (
        <div className={style.container}>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={(event) => setNom(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Prénom"
                    value={prenom}
                    onChange={(event) => setPrenom(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Inscription</button>
            </form>
        </div>
    )
}