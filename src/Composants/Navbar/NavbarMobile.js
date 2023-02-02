import {useState} from "react";
import {Link} from "react-router-dom";
import style from "./NavbarMobile.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export function NavbarMobile() {
    const [open, setOpen] = useState(false);
    return (
        <nav className={style.navMobile}>
            <button onClick={() => setOpen(!open)} className={style.button}>
                {open ? <CloseIcon/> : <MenuIcon/>}
            </button>
            {open && (<div className={style.navMobile}>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/personnage"}>Personnages</Link>
                <Link to={"/episode"}>Episodes</Link>
                <Link to={"/favoris"}>Favoris</Link>
                <Link to={"/inscription"}>Inscription</Link>
            </div>)}
        </nav>
    )
}