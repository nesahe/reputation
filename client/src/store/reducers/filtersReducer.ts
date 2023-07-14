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
        changeFiltersAction: (state, action: PayloadAction<{ search?: string, sort?: SingleValue<ISelectOptionsItem> }>) => {
            const { sort, search } = action.payload;
            if (search) {
                state.search = search;
            }
            if (sort) {
                state.activeSort = sort;
            }
        },
        removeFiltersAction: (state) => {
            state.search = '';
            state.activeSort = null;
        },
        clearSearchAction: (state) => {
            state.search = ''
        }
    }
})

export default filtersReducer.reducer;
export const { changeFiltersAction, removeFiltersAction, clearSearchAction } = filtersReducer.actions;