import { createContext, useReducer } from 'react';
import useReducerWithThunk from 'use-reducer-thunk';

import { 
    SET_PAGE_CONTENT,
    SET_PAGE_TOTAL, 
    SET_ITEM_NUM, 
    SET_ITEM_BUNS, 
    SET_ITEM_MEAT, 
    SET_ITEM_PRICE,
    ADD_INGREDIENT1,
    REMOVE_INGREDIENT1,
    ADD_INGREDIENT2,
    REMOVE_INGREDIENT2,
    ADD_INGREDIENT3,
    REMOVE_INGREDIENT3,
    ADD_INGREDIENT4,
    REMOVE_INGREDIENT4,
    CHANGE_BUNS,
    CHANGE_MEAT,
    SET_MEAT_TOTAL
 } from '../utils/constants';
import burgerBuns from '../json/burgerBuns.json';
import ingredient from '../json/ingredient.json';


export const StoreContext = createContext();

const initialState = {
    total: 170,
    meatTotal: 70,
    itemNum: 0,
    itemBuns: [],
    itemMeat: [],
    itemPrice: [],
    // ingredients:{
    //     ingredient
    // }
    num1: 2,
    num2: 2,
    num3: 2,
    num4: 2,
    bun: "black",
    meat: "beef"
}
let itemBuns = {};
let itemMeat = {};

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
        case ADD_INGREDIENT1:
            return{
                ...state,
                num1:action.payload
            };
        case REMOVE_INGREDIENT1:
            return{
                ...state,
                num1:action.payload
            };
        case ADD_INGREDIENT2:
            return{
                ...state,
                num2:action.payload
            };
        case REMOVE_INGREDIENT2:
            return{
                ...state,
                num2:action.payload
            };
        case ADD_INGREDIENT3:
            return{
                ...state,
                num3:action.payload
            };
        case REMOVE_INGREDIENT3:
            return{
                ...state,
                num3:action.payload
            };
        case ADD_INGREDIENT4:
            return{
                ...state,
                num4:action.payload
            };
        case REMOVE_INGREDIENT4:
            return{
                ...state,
                num4:action.payload
            };
        case CHANGE_BUNS: 
            return {
                ...state,
                bun: action.payload
            };
        case CHANGE_MEAT: 
            return {
                ...state,
                meat: action.payload
            };
        case SET_MEAT_TOTAL:
            return {
                ...state,
                meatTotal: action.payload
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