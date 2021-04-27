import { createContext, useReducer } from 'react';
import useReducerWithThunk from 'use-reducer-thunk';

import { SET_PAGE_CONTENT, SET_PAGE_TOTAL, SET_ITEM_NUM, SET_ITEM_BUNS, SET_ITEM_MEAT, SET_ITEM_PRICE } from '../utils/constants';
import burgerBuns from '../json/burgerBuns.json';


export const StoreContext = createContext();

const initialState = {
    total: 0,
    itemNum: 0,
    itemBuns: [],
    itemMeat: [],
    itemPrice: [],
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
        case SET_ITEM_NUM:
            return{
                ...state,
                itemNum: action.payload,
            };
        case SET_ITEM_BUNS:
            return {
                ...state,
                itemBuns: action.payload,
            }; 
        case SET_ITEM_MEAT:
            return {
                ...state,
                itemMeat: action.payload,
            };
        case SET_ITEM_PRICE: 
            return{
                ...state,
                itemPrice: action.payload,
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(
        reducer,
        initialState,
        "example"
    );
    //const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}