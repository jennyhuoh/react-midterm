import {
    SET_PAGE_CONTENT,
    SET_BURGER_DETAIL,
    SET_PAGE_TOTAL,
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    LOGOUT_REQUEST,
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST
} from '../utils/constants';
import {
    signInWithEmailPassword,
    registerWithEmailPassword,
    signOut
  } from "../api";
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
export const loginToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
      const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
      dispatch({
        type: SUCCESS_LOGIN_REQUEST,
        payload: user.user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_LOGIN_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  
  export const registerToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_REGISTER_REQUEST });
    try {
      const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
      console.log(user)
      dispatch({
        type: SUCCESS_REGISTER_REQUEST,
        payload: user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_REGISTER_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }

  export const logoutFromFirebase = async (dispatch) => {
    signOut();
    dispatch({ type: LOGOUT_REQUEST });
  }