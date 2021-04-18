import {
    SET_PAGE_CONTENT,
    SET_BURGER_DETAIL,
    SET_PAGE_TOTAL,
} from '../utils/constants';

//import burgerBuns from '../json/burgerBuns.json';
import materials from '../json/materials.json';
import burgerBuns from '../json/burgerBuns.json';

export const setPageContent = (dispatch, burgerBuns) => {
    dispatch({
        type: SET_PAGE_CONTENT,
        payload: burgerBuns,
    });
}
export const setBurgerDetail = (dispatch, qty) => {
    // const burgerBun = burgerBuns.find (
    //     x => x.id === burgerBunId
    // );
    if(qty === 0 && burgerBuns.countInStock > 0){
        qty = 1;
    }
    dispatch({
        type: SET_BURGER_DETAIL,
        payload: qty
    })
}
export const setPageTotal = (dispatch, total) => {
    total = 0
    dispatch({
        type: SET_PAGE_TOTAL,
        payload: total
    })
}