import style from "./Accueil.module.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartePerso} from "../Personnage/CartePerso";
import {useSelector} from "react-redux";

export const Accueil = () => {

    const [personnages, setPersonnages] = useState([]);
    const [persosFavoris, setPersosFavoris] = useState([]);
    const favoris = useSelector(state => state.favoris.favoris);
    const userId = useSelector(state => state.auth.id);

    async function loadPersonnages() {
        let randoms = [];
        while (randoms.length < 5) {
            const idRandom = Math.floor(Math.random() * 826);
            randoms = [...(new Set([...randoms, idRandom]).values())]
        }
        const results = await (await fetch(`https://rickandmortyapi.com/api/character/[${randoms.join(",")}]`)).json();
        setPersonnages(results);
    }

    async function loadFavoris() {
        if (favoris.length === 0) return (
            setPersosFavoris([])
        )
        const results = await (await fetch(`https://rickandmortyapi.com/api/character/[${favoris.slice(-5).join(",")}]`)).json();
        setPersosFavoris(results);
    }

    useEffect(() => {
        loadPersonnages();
    }, []);

    useEffect(() => {
        loadFavoris();
    }, [favoris]);

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
            {(userId && favoris.length > 0) && (
                <>
                    <div className={style.titre}>
                        Derniers favoris
                    </div>
                    <div className={style.liste}>
                        {persosFavoris.map(favori => (
                            <CartePerso key={favori.id} personnage={favori}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}