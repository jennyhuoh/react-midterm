import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import { SET_ITEM_BUNS, SET_ITEM_MEAT } from '../utils/constants';
import ingredients from '../json/ingredient.json';
import materials from '../json/materials.json';
import startCheckOut from '../images/btn-start-checkout.png';

export default function CartList() {
    const {state} = useContext(StoreContext);
            return(
                <div>
                    <div style={{display:"flex"}} className="cart-title-box">
                        <div className="cart-title cart-title-description">Description</div>
                        <div className="cart-title cart-title-quantity">Quantity</div>
                        <div className="cart-title cart-title-price">Price</div>
                    </div>
               
                    <div className="cart-item-box">
                        <div className="cart-item-bgc">
                            <div class="cart-burger-bgc">
                                <div className="posa cart-bunBottom cart-posa">
                                    <img className="cart-burger" src={materials[0].bottomImage} />
                                </div>
                                <div className="posa cart-meat cart-posa">
                                    <img className="cart-burger" src={materials[2].image} />
                                </div>
                                <div className="posa cart-cheese cart-posa">
                                    <img className="cart-burger" src={ingredients[0].image} />
                                </div>
                                <div className="posa cart-vegetable cart-posa">
                                    <img className="cart-burger" src={ingredients[1].image} />
                                </div>
                                <div className="posa cart-onion cart-posa">
                                    <img className="cart-burger" src={ingredients[3].image} />
                                </div>
                                
                                <div className="posa cart-bunTop cart-posa">
                                    <img className="cart-burger" src={materials[0].image} />
                                </div>
                            </div>
                            <div className="cart-item-description">
                                <div className="cart-buns-type">{state.cartBun}</div>
                                <div className="cart-dot">・</div>
                                <div className="cart-meat-type">{state.cartMeat}</div>
                            </div>
                            <div className="cart-qty">1</div>
                            <div className="cart-price">NT{state.total + state.meatTotal}</div>
                        </div>    
                    </div>
                    <div className="cart-total-price">TOTAL: NT {state.total + state.meatTotal}</div>
                    <div className="cart-btn-checkout">
                        <Link to="/login">
                            <img src={startCheckOut} className="startCheckOut" />
                        </Link>
                    </div>
                    
                </div>
            );
}