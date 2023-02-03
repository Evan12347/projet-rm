import style from "./CartePerso.module.css";
import {Link} from "react-router-dom";
import {addFavoris, removeFavoris} from "../../Store/FavorisSlice";
import {useDispatch, useSelector} from "react-redux";
import FavIcon from '@mui/icons-material/Favorite';
import NotFavIcon from '@mui/icons-material/FavoriteBorder';

export const CartePerso = ({personnage}) => {

    const userId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    const favoris = useSelector(state => state.favoris.favoris);

    return (

        <div className={style.container}>
            <Link to={`/personnage/${personnage.id}`}>{personnage.name}</Link>
            <div style={{position: "relative"}}>
                <img src={personnage.image} alt=""/>
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
        </div>
    );
};