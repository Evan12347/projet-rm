import style from "./Accueil.module.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const Accueil = () => {

    const [personnages, setPersonnages] = useState([]);

    async function loadPersonnages() {
        const randoms = [];
        for (let i = 0; i < 5; i++) {
            const idRandom = Math.floor(Math.random() * 826);
            randoms.push(idRandom);
        }
        const results = await (await fetch(`https://rickandmortyapi.com/api/character/[${randoms.join(",")}]`)).json();
        setPersonnages(results);
    }

    useEffect(() => {
        loadPersonnages();
    }, [])

    return (
        <div>
            <div className={style.titre}>
                Personnages aléatoires
            </div>
            <div className={style.liste}>
                {personnages.map(personnage => (
                    <div key={personnage.id} className={style.container}>
                        <img src={personnage.image}/>
                        <Link to={`/personnage/${personnage.id}`}>{personnage.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )

}