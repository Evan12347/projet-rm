import {Link} from "react-router-dom";
import style from "./Navbar.module.css"
import logo from "../../logo.png"
import {useState} from "react";
import rickhead from "./rickhead.webp"

export const Navbar = ()=>{

    const [hover, setHover] = useState(false);

    return (
        <nav className={style.nav}>
            <img src={rickhead} alt={""} style={{width:"40px", position:"absolute", left:"20px", display:hover ? "unset" : "none"}}/>
            <img src={logo} alt={""} className={style.image} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
            <Link to={"/"}>Accueil</Link>
            <Link to={"/personnage"}>Personnages</Link>
            <Link to={"/episode"}>Episodes</Link>
            <Link to={"/favoris"}>Favoris</Link>
            <Link to={"/inscription"}>Inscription</Link>
        </nav>
    )
}


