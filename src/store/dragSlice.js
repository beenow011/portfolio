import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    x: 80,
    y: 80,
    theme: "dark"
}
const dragSlice = createSlice({
    name: "drag",
    initialState,
    reducers: {
        update: (state, action) => {

            state.x = action.payload.x;
            state.y = action.payload.y;
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
        }

    }
})

export const { update, changeTheme } = dragSlice.actions;
export default dragSlice.reducer;