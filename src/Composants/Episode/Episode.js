import style from "./Episode.module.css"
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const Episode = () => {

    const [episode, setEpisode] = useState(null);
    const [personnages, setPersonnages] = useState([]);
    const {id} = useParams();

    async function getEpisode() {
        const result = await (await fetch(`https://rickandmortyapi.com/api/episode/${id}`)).json();
        setEpisode(result);

        const persos = await(await fetch(`https://rickandmortyapi.com/api/character/[${result.characters.map(p => p.split("/").pop()).join(",")}]`)).json();
        setPersonnages(persos);
    }

    useEffect(() => {
        getEpisode();
    }, [id])

    if (!episode) return (
        <div className={style.chargement}>
            Chargement...
        </div>
    );

    return (
        <div>
            <div className={style.titre}>
                {episode.episode} : {episode.name}<br/>
                Sortie : {episode.air_date}<br/>
                Personnages de l'épisode :<br/>
            </div>
            <div className={style.liste}>
                {personnages.map(personnage => (
                    <div key={personnage.id} className={style.container}>
                        <Link to={`/personnage/${personnage.id}`}>{personnage.name}</Link>
                        <img src={personnage.image}/>
                    </div>
                ))}
            </div>
        </div>
    )
}