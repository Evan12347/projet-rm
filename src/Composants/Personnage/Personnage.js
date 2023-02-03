import style from "./Personnage.module.css"
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import favorisSlice, {addFavoris, removeFavoris} from "../../Store/FavorisSlice";
import {useDispatch, useSelector} from "react-redux";
import FavIcon from '@mui/icons-material/Favorite';
import NotFavIcon from '@mui/icons-material/FavoriteBorder';

export const Personnage = () => {

    const [personnage, setPersonnage] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const {id} = useParams();
    const userId = useSelector(state => state.auth.id);

    const dispatch = useDispatch();
    const favoris = useSelector(state => state.favoris.favoris);

    async function getPersonnage() {
        const result = await (await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json();
        setPersonnage(result);

        const episodes = await (await fetch(`https://rickandmortyapi.com/api/episode/[${result.episode.map(e => e.split("/").pop()).join(",")}]`)).json();
        setEpisodes(episodes);
    }

    useEffect(() => {
        getPersonnage();
    }, [id])

    if (!personnage) return (
        <div className={style.chargement}>
            Chargement...
        </div>
    );

    return (
        <div className={style.div}>
            <div className={style.titre}
                 style={{color: personnage.status === "Alive" ? "lightgreen" : (personnage.status === "Dead" ? "red" : "white")}}>
                {personnage.name} - {personnage.status}<br/>
            </div>
            Espèce : {personnage.species}<br/>
            Type : {personnage.type}<br/>
            Genre : {personnage.gender}<br/>
            Origine : {personnage.origin.name}<br/>
            Localisation : {personnage.location.name}<br/>
            <div style={{position: "relative"}}>
                <img src={personnage.image} alt={""} className={style.image}/>
                {userId &&
                    (favoris.find(f => f === personnage.id) ?
                        (
                            <button className={style.button} onClick={() => dispatch(removeFavoris(personnage.id))}>
                                <FavIcon/>
                            </button>
                        ) : (
                            <button className={style.button} onClick={() => dispatch(addFavoris(personnage.id))}>
                                <NotFavIcon/>
                            </button>
                        ))
                }
            </div>

            Liste d'épisodes avec le personnage :
            <div className={style.liste}>
                {episodes.map(episode => (
                    <div key={episode.id} className={style.container}>
                        <Link to={`/episode/${episode.id}`}>{episode.episode} : {episode.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}