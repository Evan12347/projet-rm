import {useState} from "react";
import {Link} from "react-router-dom";
import style from "./NavbarMobile.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from "react-redux";

export function NavbarMobile() {
    const [open, setOpen] = useState(false);
    const userId = useSelector(state => state.auth.id);
    return (
        <nav className={style.navMobile}>
            <button onClick={() => setOpen(!open)} className={style.button}>
                {open ? <CloseIcon/> : <MenuIcon/>}
            </button>
            {open && (<div className={style.navMobile}>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/personnage"}>Personnages</Link>
                <Link to={"/episode"}>Episodes</Link>
                {userId && <Link to={"/favoris"}>Favoris</Link>}
                <Link to={"/compte"}>Compte</Link>
            </div>)}
        </nav>
    )
}