import style from "./Accueil.module.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartePerso} from "../Personnage/CartePerso";

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
                    <CartePerso key={personnage.id} personnage={personnage}/>
                ))}
            </div>
        </div>
    )
}