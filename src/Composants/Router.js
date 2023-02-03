import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Accueil} from "./Accueil";
import {Navbar} from "./Navbar";
import {Episode, ListeEpisode} from "./Episode";
import {Personnage, ListePersonnage} from "./Personnage";
import {Favoris} from "./Favoris";
import {Compte} from "./Compte/Compte";
import {useEffect} from "react";
import {auth, database} from "../Firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../Store/AuthSlice";
import {setFavoris} from "../Store/FavorisSlice";
import {onValue, ref, set} from "firebase/database";

export const Router = () => {
    const dispatch = useDispatch();

    const favoris = useSelector(state => state.favoris.favoris);
    const authId = useSelector(state => state.auth.id);

    useEffect(() => {
        if (authId) {
            set(ref(database, 'users/' + authId), favoris);
        }
    }, [favoris]);

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                console.log("User connected");
                dispatch(login(user.uid));
                onValue(ref(database, 'users/' + user.uid), (snapshot) => {
                    const data = snapshot.val();
                    dispatch(setFavoris(data??[]));
                });
            } else {
                console.log("User not connected");
                dispatch(login(null));
                dispatch(setFavoris([]));
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