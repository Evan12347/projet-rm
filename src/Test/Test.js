import {Inscription, Compte} from "../Composants/Compte";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
it("Test du formulaire", async () => {
    render(
        <RouterProvider router={createBrowserRouter(
            [{path: "*", element: <Inscription/>}]
        )}/>
    );

    const email = screen.getByTitle("Email");
    const mdp = screen.getByTitle("Mot de passe");

    //Test qui renvoie une erreur
    fireEvent.input(email, {target: {value: 'Test@quiMarchePas'}});
    fireEvent.input(mdp, {target: {value: 'MdpNul'}});

    expect(await screen.findByText("Formulaire invalide")).toBeInTheDocument();

    //Test qui marche
    fireEvent.input(email, {target: {value: 'Test@quiMarche.com'}});
    fireEvent.input(mdp, {target: {value: 'MdpSuperCool'}});

    expect(await screen.findByText("Formulaire valide")).toBeInTheDocument();
});