import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/index';

export default function HamMenu({onClick, isOnTouch}) {
   
    let ham_menu_bar = "ham-menu-bar";
    let ham_menu_open = "ham-menu-open";
    return(
        <span onClick={onClick} className="ham-menu show-mobile">
            <span className={`${isOnTouch?ham_menu_open:ham_menu_bar}`}></span>
            <span className={`${isOnTouch?ham_menu_open:ham_menu_bar}`}></span>
        </span>
    );
}