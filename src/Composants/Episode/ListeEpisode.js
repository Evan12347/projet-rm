import style from "./ListeEpisode.module.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const ListeEpisode = () => {

    const [episodes, setEpisodes] = useState([]);
    const [donnees, setDonnees] = useState([]);

    async function loadEpisodes(lien) {
        if(!lien){
            return;
        }
        const {results, info} = await (await fetch(lien)).json();
        setEpisodes(results);
        setDonnees(info);
    }

    useEffect(() => {
        loadEpisodes(`https://rickandmortyapi.com/api/episode/`);
    }, [])

    return (
        <div style={{width:"100%"}}>
            <div className={style.titre}>
                Episodes
            </div>
            <button className={style.button} onClick={() => loadEpisodes(donnees.prev)}>{'Page précédente'}</button>
            <button className={`${style.button} ${style.buttonRight}`} onClick={() => loadEpisodes(donnees.next)}>{'Page suivante'}</button>
            {episodes.map(episode => (
                <div key={episode.id} className={style.container}>
                    <Link to={`/episode/${episode.id}`}>{episode.episode} : {episode.name}</Link>
                </div>
            ))}

        </div>

    )

}