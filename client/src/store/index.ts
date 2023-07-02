import { configureStore } from "@reduxjs/toolkit"
import user from './reducers/userReducer';

export const store = configureStore({
    reducer: {
        user
    }
})

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;