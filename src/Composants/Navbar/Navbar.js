import {Link} from "react-router-dom";
import style from "./Navbar.module.css"
import logo from "../../logo.png"
import {useEffect, useState} from "react";
import rickhead from "./rickhead.webp"
import {useSize} from "../../Hook";
import {NavbarMobile} from "./NavbarMobile";
import {useSelector} from "react-redux";

export const Navbar = ()=>{

    const [hover, setHover] = useState(false);
    const userId = useSelector(state => state.auth.id);
    const size = useSize();
    useEffect(() => console.log(size), [size]);
    return (size > 1000) ? (
        <nav className={style.nav}>
            <img src={rickhead} alt={""} style={{width:"40px", position:"absolute", left:"20px", display:hover ? "unset" : "none"}}/>
            <img src={logo} alt={""} className={style.image} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
            <Link to={"/"}>Accueil</Link>
            <Link to={"/personnage"}>Personnages</Link>
            <Link to={"/episode"}>Episodes</Link>
            {userId && <Link to={"/favoris"}>Favoris</Link>}
            <Link to={"/compte"}>Compte</Link>
        </nav>
    ) : (
        <NavbarMobile/>
    )
}


