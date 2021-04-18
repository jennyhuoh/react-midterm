import { createContext, useReducer } from 'react';
import useReducerWithThunk from 'use-reducer-thunk';
import { SET_PAGE_CONTENT, SET_PAGE_TOTAL } from '../utils/constants';
import burgerBuns from '../json/burgerBuns.json';

export const StoreContext = createContext();

const initialState = {
    total: 0,
}

function reducer(state, action) {
    switch(action.type) {
        case SET_PAGE_CONTENT:
            return {
                ...state,
                page: action.payload
            };
        case SET_PAGE_TOTAL:
            return{
                ...state,
                total: action.payload,
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    // const [state, dispatch] = useReducerWithThunk(
    //     reducer,
    //     initialState,
    //     "example"
    // );
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}