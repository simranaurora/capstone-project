import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isError: false,
    isLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isLoading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
            state.isLoading = false
            state.isError = false
        },
        signInFailure: (state) => {
            state.isLoading = false
            state.isError = true
        },
    }
});

export const { signIn, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;