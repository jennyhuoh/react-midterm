import {
    SET_PAGE_CONTENT,
    SET_BURGER_DETAIL,
} from '../utils/constants';

//import burgerBuns from '../json/burgerBuns.json';
import materials from '../json/materials.json';

export const setPageContent = (dispatch, burgerBuns) => {
    dispatch({
        type: SET_PAGE_CONTENT,
        payload: burgerBuns,
    });
}
export const setBurgerDetail = (dispatch, materialId, qty) => {
    const material = materials.find (
        x => x.id === materialId
    );
    if(qty === 0 && material.countInStock > 0){
        qty = 1;
    }
    dispatch({
        type: SET_BURGER_DETAIL,
        payload: {
            material,
            qty,
        }
    })
}