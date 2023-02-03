import style from "./Favoris.module.css"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {CartePerso} from "../Personnage/CartePerso";

export const Favoris = () => {

    const [persosFavoris, setPersosFavoris] = useState([]);

    const favoris = useSelector(state => state.favoris.favoris);
    useEffect(() => {
        (async () => {
            if (favoris.length === 0) return (
                setPersosFavoris([])
            )
            setPersosFavoris(await (await fetch(`https://rickandmortyapi.com/api/character/[${favoris.join(",")}]`)).json());
        })();
    }, [favoris])

    return (
        <div className={style.div}>
            <div className={style.titre}>
                Favoris
            </div>
            <div className={style.liste}>
                {persosFavoris.map(favori => (
                    <CartePerso key={favori.id} personnage={favori}/>
                ))}
            </div>
            {persosFavoris.length === 0 && (
                <div className={style.titre}>
                    Vous n'avez aucun favori.
                </div>
            )}
        </div>
    )
}