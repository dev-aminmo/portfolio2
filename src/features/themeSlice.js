import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: localStorage.getItem('theme') || 'light'
};
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggelTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});
export default themeSlice.reducer;

export const { toggelTheme } = themeSlice.actions;