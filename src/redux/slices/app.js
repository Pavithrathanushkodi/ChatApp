import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store"; // Make sure this import is correct

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",
    }
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload;
        }
    }
});

export default slice.reducer;

export function ToggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType(type));
    }
}
