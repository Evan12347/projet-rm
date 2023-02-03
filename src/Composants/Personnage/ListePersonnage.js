import style from "./ListePersonnage.module.css"
import {useEffect, useState} from "react";
import {CartePerso} from "./CartePerso";

export const ListePersonnage = () => {

    const [personnages, setPersonnages] = useState([]);
    const [donnees, setDonnees] = useState([]);

    async function loadPersonnages(lien) {
        if(!lien){
            return;
        }
        const {results, info} = await (await fetch(lien)).json();
        setPersonnages(results);
        setDonnees(info);
    }

    useEffect(() => {
        loadPersonnages(`https://rickandmortyapi.com/api/character/`);
    }, [])

    return (
        <div style={{width:"100%"}}>
            <div className={style.titre}>
                Personnages
            </div>
            <div className={style.buttons}>
                <button className={style.button} onClick={() => loadPersonnages(donnees.prev)}>{'Page précédente'}</button>
                <button className={style.button} onClick={() => loadPersonnages(donnees.next)}>{'Page suivante'}</button>
            </div>
                <div className={style.liste}>
                    {personnages.map(personnage => (
                        <CartePerso key={personnage.id} personnage={personnage}/>
                    ))}
            </div>
        </div>
    )
}