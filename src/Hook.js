import {useEffect, useLayoutEffect, useState} from "react";

export const useFavoris = () => {
    const [favoris, setFavoris] = useState([]);

    function updateFavoris(id, isFavori) {
        setFavoris((favorisActuels) => {
            if (isFavori) {
                return [...favorisActuels, id];
            }
            return favorisActuels.filter(num => num !== id);
        })
    }

    useEffect(() => {
        setFavoris(getFavoris());
    }, [])


    useEffect(() => {
        document.cookie = `favoris=${favoris.join(',')};`;
    }, [favoris])

    return {favoris, updateFavoris};
}

const getFavoris = () => {
    const cookie = document.cookie
        .split(',')
        .find((fav) =>
            fav.startsWith('favoris'))
        ?.split('/')[1] ?? '';

    return [...new Set(cookie.split(",").filter(f => f.length).map(Number))];
};

export function useSize() {
    const [size, setSize] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => setSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}