import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Accueil} from "./Accueil";
import {Navbar} from "./Navbar";
import {Episode, ListeEpisode} from "./Episode";
import {Personnage, ListePersonnage} from "./Personnage";
import {Favoris} from "./Favoris";
import {Inscription} from "./Inscription";

export const Router = () => {
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
                    path: 'inscription',
                    element: <Inscription/>,
                },
            ],
        },
    ]);

    return (<RouterProvider router={router}/>)
};