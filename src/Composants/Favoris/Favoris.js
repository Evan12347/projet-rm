import style from "./Favoris.module.css"
import {useFavoris} from "../../Hook";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export const Favoris = () => {

    const {favoris, updateFavoris} = useFavoris();
    useEffect(() => {
        (async ()=>{
            const results = await(await fetch(`https://rickandmortyapi.com/api/character/[${favoris.join(",")}]`)).json;
        })();
    }, [])
    return (
        <div className={style.div}>
            <div className={style.titre}>
                Favoris
            </div>
            {favoris.map(favori => (
                <div key={favori.id}>
                    {favori.name}
                </div>
            ))}
        </div>
    )
}