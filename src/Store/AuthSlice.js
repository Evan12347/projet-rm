import {createSlice} from '@reduxjs/toolkit';
export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
    },
    reducers: {
        login: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const {login} = AuthSlice.actions;
export default AuthSlice.reducer;