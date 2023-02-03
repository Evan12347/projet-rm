import {createSlice} from '@reduxjs/toolkit';

export const FavorisSlice = createSlice({
    name: 'favoris',
    initialState: { // Initial state
        favoris: [],
    },
    reducers: {
        addFavoris: (state, action) => {
            //state.favoris.push(action.payload);
            state.favoris = [...(new Set([...state.favoris, action.payload]).values())];
        },
        removeFavoris: (state, action) => {
            state.favoris = state.favoris.filter(f => f !== action.payload);
        },
        setFavoris: (state, action) => {
            state.favoris = action.payload;
        }
    }
});

export const {addFavoris, removeFavoris, setFavoris} = FavorisSlice.actions;
export default FavorisSlice.reducer;