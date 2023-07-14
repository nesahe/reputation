import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface defaultState {
    activePage: number
}

const initialState = {
    activePage: 1
}

const pageReducer = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<{ page: number }>) => {
            const { page } = action.payload;
            state.activePage = page;
        }
    }
})

export default pageReducer.reducer;
export const { changePage } = pageReducer.actions;