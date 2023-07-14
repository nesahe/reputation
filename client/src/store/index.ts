import { configureStore } from "@reduxjs/toolkit";

import user from './reducers/userReducer';
import filters from './reducers/filtersReducer';
import page from './reducers/pageReducer'

export const store = configureStore({
    reducer: {
        user,
        filters,
        page
    }
})

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;