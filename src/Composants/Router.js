import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Accueil} from "./Accueil";
import {Navbar} from "./Navbar";
import {Episode, ListeEpisode} from "./Episode";
import {Personnage, ListePersonnage} from "./Personnage";
import {Favoris} from "./Favoris";
import {Compte} from "./Compte/Compte";
import {useEffect} from "react";
import {auth} from "../Firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import {login} from "../Store/AuthSlice";

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                console.log("User connected");
                dispatch(login(user.uid));
            } else {
                console.log("User not connected");
                dispatch(login(null));
            }
        })
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar/><Outlet/></>,
            children: [
                {
                    path: '/',
                    element: <Accueil/>,
                },
                {
                    path: 'episode',
                    element: <ListeEpisode/>,
                },
                {
                    path: 'episode/:id',
                    element: <Episode/>,
                },
                {
                    path: 'personnage',
                    element: <ListePersonnage/>,
                },
                {
                    path: 'personnage/:id',
                    element: <Personnage/>,
                },
                {
                    path: 'favoris',
                    element: <Favoris/>,
                },
                {
                    path: 'compte',
                    element: <Compte/>,
                },
            ],
        },
    ]);

    return (<RouterProvider router={router}/>)
};