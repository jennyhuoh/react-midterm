import { createContext } from 'react';
import useReducerWithThunk from 'use-reducer-thunk';
import { SET_PAGE_CONTENT } from '../utils/constants';
import burgerBuns from '../json/burgerBuns.json';

export const StoreContext = createContext();

const initialState = {
    page: {
        burgerBuns,
    }
}

function reducer(state, action) {
    switch(action.type) {
        case SET_PAGE_CONTENT:
            return {
                ...state,
                page: action.payload
            }
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(
        reducer,
        initialState,
        "example"
    );
    const value = { state, dispatch };
    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}