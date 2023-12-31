import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from '../../types';


interface defaultState {
    user: IProfile
}

const defaultUser = {
    login: '',
    gender: '',
    isActivated: false,
    _id: '',
    reputation: 0,
    lastVoting: ''
}

const initialState: defaultState = {
    user: defaultUser
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserAction: (state, action: PayloadAction<IProfile>) => {
            state.user = action.payload;
        }
    }
})


export const { addUserAction } = userSlice.actions

export default userSlice.reducer;