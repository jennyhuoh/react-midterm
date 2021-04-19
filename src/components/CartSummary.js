import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { useContext, useState, useReducer } from 'react';
import cartimg from '../images/btn-Xcart.png';
import { StoreContext } from '../store/index';

export default function CartSummary() {
    const { state } = useContext(StoreContext);

    return(
       <Badge count={state.itemNum} size={"default"} style={{color: 'white', backgroundColor: '#E0E0E0', marginRight: '4vh', marginTop: '0.5vh' }}>
           <Link to={'/shoppingCart'}>
                <img src={cartimg} className="cartimg"/>
           </Link>
       </Badge>
    );
}