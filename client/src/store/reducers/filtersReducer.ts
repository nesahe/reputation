import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SingleValue } from 'react-select';
import { ISelectOptionsItem } from '../../types';


interface defaultState {
    search: string,
    activeSort: SingleValue<ISelectOptionsItem> | undefined
}

const initialState: defaultState = {
    search: '',
    activeSort: null
}

const filtersReducer = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilters: (state, action: PayloadAction<{ search?: string, sort?: SingleValue<ISelectOptionsItem> }>) => {
            const { sort, search } = action.payload;
            if (search) {
                state.search = search;
            }
            if (sort) {
                state.activeSort = sort;
            }
        },
        removeFilters: (state) => {
            state.search = '';
            state.activeSort = null;
        },
        clearSearch: (state) => {
            state.search = ''
        }
    }
})

export default filtersReducer.reducer;
export const { changeFilters, removeFilters, clearSearch } = filtersReducer.actions;