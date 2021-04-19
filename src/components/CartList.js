import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import { SET_ITEM_BUNS, SET_ITEM_MEAT } from '../utils/constants';
import meat from '../json/meat.json';
import burgerBuns from '../json/burgerBuns.json';
import ingredients from '../json/ingredient.json';

export default function CartList() {
    const {state} = useContext(StoreContext);
    
    // for(let i = 0; i < state.itemMeat.length+1; i++) {
        if (state.itemPrice[0] !== 0) {
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
                                    <img className="cart-burger" src={burgerBuns[0].bottomImage} />
                                </div>
                                <div className="posa cart-meat cart-posa">
                                    <img className="cart-burger" src={meat[0].image} />
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
                                    <img className="cart-burger" src={burgerBuns[0].image} />
                                </div>
                            </div>
                            <div className="cart-item-description">
                                <div className="cart-buns-type">{state.itemBuns[0]}</div>
                                <div className="cart-dot">・</div>
                                <div className="cart-meat-type">{state.itemMeat[0]}</div>
                            </div>
                            <div className="cart-qty">1</div>
                            <div className="cart-price">NT{state.itemPrice[0]}</div>
                        </div>    
                    </div>
                    <div className="cart-total-price">TOTAL: NT {state.itemPrice[0]}</div>
                </div>
            );
        }
        
    // }
}