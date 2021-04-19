import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { useContext, useState, useReducer } from 'react';
import cartClickedimg from '../images/btn-cart.png';
import { StoreContext } from '../store/index';

export default function CartSummaryClicked() {
    const { state } = useContext(StoreContext);

    return(
       <Badge count={state.itemNum} size={"default"} className="badge">
           <Link to={'/shoppingCart'}>
                <img src={cartClickedimg} className="cartimg"/>
           </Link>
       </Badge>
    );
}