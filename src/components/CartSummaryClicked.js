import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { useContext, useState, useReducer } from 'react';
import cartClickedimg from '../images/btn-cart.png';
import { StoreContext } from '../store/index';

export default function CartSummaryClicked() {
    const { state } = useContext(StoreContext);

    return(
       <Badge count={state.itemNum} size={"default"} style={{color: '#fff', backgroundColor: '#E0E0E0', marginRight: '4vh', marginTop: '0.5vh' }}>
           <Link to={'/shoppingCart'}>
                <img src={cartClickedimg} className="cartimg"/>
           </Link>
       </Badge>
    );
}