import { useContext, useState, useReducer, useEffect } from 'react';
import { Row, Col, Button, Select, Radio, Space } from 'antd';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { StoreContext } from '../store/index';
import materials from '../json/materials.json';
import line from '../images/line.png';
import checkOut from '../images/btn-checkout.png';
import { SET_PAGE_TOTAL,
         SET_ITEM_BUNS, 
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
         SET_MEAT_TOTAL,
         ADD_CART_BUN,
         ADD_CART_MEAT
} from '../utils/constants';
import yellowDot from '../images/yellowDot.png';

function BurgerDetail() {
    const iname_yellow = "iname_yellow"
    const iname_gray = "iname_gray" 
    const {state, dispatch} = useContext(StoreContext);
    //const[num, setnum] = useState(2);
    //useEffect(()=>{Cookie.set("itemBuns", state.itemBuns)}, state.itemBuns);
    const [value, setValue] = useState(materials[0].price);
    const [valueMeat, setValueMeat] = useState(materials[2].price);
    const  onClickMinus1 = () => {
        if(state.num1 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT1,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
        if(state.num1 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT1,
                payload: 0
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
    }
    const  onClickPlus1 = () => {
        if(state.num1 === 0) {
            dispatch({
                type: ADD_INGREDIENT1,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
        if(state.num1 === 1) {
            dispatch({
                type: ADD_INGREDIENT1,
                payload: 2
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
    }
    const  onClickMinus2 = () => {
        if(state.num2 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT2,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
        if(state.num2 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT2,
                payload: 0
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
    }
    const  onClickPlus2 = () => {
        if(state.num2 === 0) {
            dispatch({
                type: ADD_INGREDIENT2,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
        if(state.num2 === 1) {
            dispatch({
                type: ADD_INGREDIENT2,
                payload: 2
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
    }
    const  onClickMinus3 = () => {
        if(state.num3 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT3,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
        if(state.num3 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT3,
                payload: 0
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
    }
    const  onClickPlus3 = () => {
        if(state.num3 === 0) {
            dispatch({
                type: ADD_INGREDIENT3,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
        if(state.num3 === 1) {
            dispatch({
                type: ADD_INGREDIENT3,
                payload: 2
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
    }
    const  onClickMinus4 = () => {
        if(state.num4 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT4,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
        if(state.num4 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT4,
                payload: 0
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 15
            })
        };
    }
    const  onClickPlus4 = () => {
        if(state.num4 === 0) {
            dispatch({
                type: ADD_INGREDIENT4,
                payload: 1
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
        if(state.num4 === 1) {
            dispatch({
                type: ADD_INGREDIENT4,
                payload: 2
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 15
            })
        };
    }
    const onChangeBun = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        if(value === materials[0].price) {
            dispatch({
                type: CHANGE_BUNS,
                payload: "classic"
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total + 10
            });
            dispatch({
                type: ADD_CART_BUN,
                payload: state.cartBun = materials[1].name
            })
        }
        if(value === materials[1].price) {
            dispatch({
                type: CHANGE_BUNS,
                payload: "black"
            });
            dispatch({
                type: SET_PAGE_TOTAL,
                payload: state.total = state.total - 10
            });
            dispatch({
                type: ADD_CART_BUN,
                payload: state.cartBun = materials[0].name
            })
        }
    }
    const onChangeMeat = e => {
        console.log('radio2 checked', e.target.value);
        setValueMeat(e.target.value);
        if(valueMeat === materials[2].price) {
            dispatch({
                type: CHANGE_MEAT,
                payload: "shrimp"
            });
            dispatch({
                type: SET_MEAT_TOTAL,
                payload: 80
            });
            dispatch({
                type: ADD_CART_MEAT,
                payload: state.cartMeat = materials[3].name
            })
            
        }
        if(valueMeat === materials[3].price) {
            dispatch({
                type: CHANGE_MEAT,
                payload: "bacon"
            });
            dispatch({
                type: SET_MEAT_TOTAL,
                payload: 90
            })
            dispatch({
                type: ADD_CART_MEAT,
                payload: state.cartMeat = materials[4].name
            })
        }
        if(valueMeat === materials[4].price) {
            dispatch({
                type: CHANGE_MEAT,
                payload: "beef"
            });
            dispatch({
                type: SET_MEAT_TOTAL,
                payload: 70
            })
            dispatch({
                type: ADD_CART_MEAT,
                payload: state.cartMeat = materials[2].name
            })
        }
    }
    const addToCart = () => {
        // dispatch({
        //     type: ADD_TO_CART,
        //     payload: {
        //         cartBun: materials[0].name,
        //         cartMeat: materials[2].name,
        //         cartCheese: materials[5].name,
        //         cartVegetable: materials[6].name,
        //         cartTomato: materials[7].name,
        //         cartOnion: materials[8].name
        //     }
        // })
    }
    const bunsOptions = [
        {label: materials[0].name, value: materials[0].price},
        {label: materials[1].name, value: materials[1].price}
    ];
    const meatOptions = [
        {label: materials[2].name, value: materials[2].price},
        {label: materials[3].name, value: materials[3].price},
        {label: materials[4].name, value: materials[4].price}
    ];
    return(
        <div>
            <div className="burgerTitle">＜ CUSTOMIZE YOUR BURGER ＞</div>
            <div className="show-mobile burger-mobile-box">
                <div className="posa bunsBox bunBottom">
                        {
                            state.bun === "classic"?<img className="select-classic-buns" src={materials[1].bottomImage} />
                            :state.bun === "black"?<img className="select-classic-buns" src={materials[0].bottomImage} />:""
                        }
                    </div>
                    <div className="posa bunsBox tomato">
                        {
                            state.num3 != 0?<img className="select-classic-buns" src={materials[7].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox meat">
                        {
                            state.meat === "shrimp"?<img className="select-classic-buns" src={materials[3].image} />
                            :state.meat === "bacon"?<img className="select-classic-buns" src={materials[4].image} />
                            :state.meat === "beef"?<img className="select-classic-buns" src={materials[2].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox cheese">
                        {
                            state.num1 != 0?<img className="select-classic-buns" src={materials[5].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox onion">
                        {
                            state.num4 != 0?<img className="select-classic-buns" src={materials[8].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox vegetable">
                        {
                            state.num2 != 0?<img className="select-classic-buns" src={materials[6].image} />:""
                        }
                    </div>
                    
                    
                    <div className="posa bunsBox">
                        {
                            state.bun === "classic"?<img className="select-classic-buns" src={materials[1].image} />
                            :state.bun === "black"?<img className="select-classic-buns" src={materials[0].image} />:""
                        }
                    </div>
                    <div className="totalPriceBox">
                        <div className="totalPrice">   
                            TOTAL: NT {state.total + state.meatTotal}
                        </div>
                    </div>
                    <div className="rightBox">
                        <div className="rightBoxBun">
                            <div className="bun-title"><span><img className="yellowDot" src={yellowDot} /></span> BURGER BUNS</div>
                            <Row>
                                <Col span={12}>
                                    <div className="rightBoxBun-select">
                                        <Radio.Group  
                                            options={bunsOptions}
                                            optionType="button"
                                            buttonStyle="solid"
                                            value={value}
                                            onChange={onChangeBun} />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="lineBox">
                                        <span className="line"><img className="imgLine" src={line} /></span>
                                        <span className="selectPrice"> ${materials[0].price}</span>
                                    </div>
                                    <div className="lineBox2">
                                        <span className="line"><img className="imgLine" src={line} /></span>
                                        <span className="selectPrice"> ${materials[1].price}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="rightBoxMeat">
                            <div className="bun-title"><span><img className="yellowDot" src={yellowDot} /></span> MEAT</div>
                            <Row>
                                <Col span={12}>
                                    <div className="rightBoxBun-select">
                                        <Radio.Group  
                                            options={meatOptions}
                                            optionType="button"
                                            buttonStyle="solid"
                                            value={valueMeat}
                                            onChange={onChangeMeat} />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="lineBox">
                                        <span className="line"><img className="imgLine" src={line} /></span>
                                        <span className="selectPrice"> ${materials[2].price}</span>
                                    </div>
                                    <div className="lineBox2">
                                        <span className="line"><img className="imgLine" src={line} /></span>
                                        <span className="selectPrice"> ${materials[3].price}</span>
                                    </div>
                                    <div className="lineBox2">
                                        <span className="line"><img className="imgLine" src={line} /></span>
                                        <span className="selectPrice"> ${materials[4].price}</span>
                                    </div> 
                                </Col>
                            </Row>
                        </div>
                        <div className="rightBoxMeat rightBoxIngredients">
                            <div className="bun-title"><span><img className="yellowDot" src={yellowDot} /></span> INGREDIENTS</div>
                            {/* {ingredient.map(ii => (
                                <div key={ii.id} className="ingredientBox">
                                    <div className="ingredients-items">
                                        <div className={`${ii.countInStock>0?iname_yellow:iname_gray}`}>{ii.name}</div>
                                        <div className="line"><img src={line} /></div>
                                        <div className="selectPrice selectPrice-ingredients"> ${ii.price}</div>
                                        <div className="minusBg" onClick={onClickMinus}>
                                            <div className="minus"></div>
                                        </div>
                                        <div className="ingredientNum">{state.num}</div>
                                        <div className="plusBg">
                                        <div className="minus"></div>
                                            <div className="plus"></div>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                            <div className="ingredients-items">
                                <div class={`${state.num1>0?iname_yellow:iname_gray}`}>{materials[5].name}</div>
                                <div className="line"><img className="imgLine" src={line} /></div>
                                <div className="selectPrice selectPrice-ingredients"> ${materials[5].price}</div>
                                <div className="minusBg" onClick={onClickMinus1}>
                                    <div className="minus"></div>
                                </div>
                                <div className="ingredientNum">{state.num1}</div>
                                <div className="plusBg" onClick={onClickPlus1}>
                                    <div className="minus"></div>
                                    <div className="plus"></div>
                                </div>
                            </div>
                            <div className="ingredientBox">
                                <div className="ingredients-items">
                                    <div class={`${state.num2>0?iname_yellow:iname_gray}`}>{materials[6].name}</div>
                                    <div className="line"><img className="imgLine" src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> ${materials[6].price}</div>
                                    <div className="minusBg" onClick={onClickMinus2}>
                                        <div className="minus"></div>
                                    </div>
                                    <div className="ingredientNum">{state.num2}</div>
                                    <div className="plusBg" onClick={onClickPlus2}>
                                        <div className="minus"></div>
                                        <div className="plus"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredientBox">
                                <div className="ingredients-items">
                                    <div class={`${state.num3>0?iname_yellow:iname_gray}`}>{materials[7].name}</div>
                                    <div className="line"><img className="imgLine" src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> ${materials[7].price}</div>
                                    <div className="minusBg" onClick={onClickMinus3}>
                                        <div className="minus"></div>
                                    </div>
                                    <div className="ingredientNum">{state.num3}</div>
                                    <div className="plusBg" onClick={onClickPlus3}>
                                        <div className="minus"></div>
                                        <div className="plus"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredientBox">
                                <div className="ingredients-items">
                                    <div class={`${state.num4>0?iname_yellow:iname_gray}`}>{materials[8].name}</div>
                                    <div className="line"><img className="imgLine" src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> ${materials[8].price}</div>
                                    <div className="minusBg" onClick={onClickMinus4}>
                                        <div className="minus"></div>
                                    </div>
                                    <div className="ingredientNum">{state.num4}</div>
                                    <div className="plusBg" onClick={onClickPlus4}>
                                        <div className="minus"></div>
                                        <div className="plus"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-checkout-box" onChange={addToCart}>
                        <Link to="/shoppingCart">
                            <img src={checkOut} className="btn-checkout" />
                        </Link>
                    </div>
            </div>
            <Row className="selectSection show-desktop">
                <Col span={12}>
                    
                    <div className="posa bunsBox bunBottom">
                        {
                            state.bun === "classic"?<img className="select-classic-buns" src={materials[1].bottomImage} />
                            :state.bun === "black"?<img className="select-classic-buns" src={materials[0].bottomImage} />:""
                        }
                    </div>
                    <div className="posa bunsBox tomato">
                        {
                            state.num3 != 0?<img className="select-classic-buns" src={materials[7].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox meat">
                        {
                            state.meat === "shrimp"?<img className="select-classic-buns" src={materials[3].image} />
                            :state.meat === "bacon"?<img className="select-classic-buns" src={materials[4].image} />
                            :state.meat === "beef"?<img className="select-classic-buns" src={materials[2].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox cheese">
                        {
                            state.num1 != 0?<img className="select-classic-buns" src={materials[5].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox vegetable">
                        {
                            state.num2 != 0?<img className="select-classic-buns" src={materials[6].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox onion">
                        {
                            state.num4 != 0?<img className="select-classic-buns" src={materials[8].image} />:""
                        }
                    </div>
                    
                    <div className="posa bunsBox">
                        {
                            state.bun === "classic"?<img className="select-classic-buns" src={materials[1].image} />
                            :state.bun === "black"?<img className="select-classic-buns" src={materials[0].image} />:""
                        }
                    </div>
                    <div className="totalPriceBox">
                        <div className="totalPrice">   
                            TOTAL: NT {state.total + state.meatTotal}
                        </div>
                    </div>
                    <div className="btn-checkout-box" onChange={addToCart}>
                        <Link to="/shoppingCart">
                            <img src={checkOut} className="btn-checkout" />
                        </Link>
                    </div>
                </Col>
                <Col span={12} className="selectSection-selector">
                    <div className="rightBox">
                        <div className="rightBoxBun">
                            <div className="bun-title"><span><img className="yellowDot" src={yellowDot} /></span> BURGER BUNS</div>
                            <Row>
                                <Col span={12}>
                                    <div className="rightBoxBun-select">
                                        <Radio.Group  
                                            options={bunsOptions}
                                            optionType="button"
                                            buttonStyle="solid"
                                            value={value}
                                            onChange={onChangeBun} />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="lineBox">
                                        <span className="line"><img src={line} /></span>
                                        <span className="selectPrice"> ${materials[0].price}</span>
                                    </div>
                                    <div className="lineBox2">
                                        <span className="line"><img src={line} /></span>
                                        <span className="selectPrice"> ${materials[1].price}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="rightBoxMeat">
                            <div className="bun-title"><span><img className="yellowDot" src={yellowDot} /></span> MEAT</div>
                            <Row>
                                <Col span={12}>
                                    <div className="rightBoxBun-select">
                                        <Radio.Group  
                                            options={meatOptions}
                                            optionType="button"
                                            buttonStyle="solid"
                                            value={valueMeat}
                                            onChange={onChangeMeat} />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="lineBox">
                                        <span className="line"><img src={line} /></span>
                                        <span className="selectPrice"> ${materials[2].price}</span>
                                    </div>
                                    <div className="lineBox2">
                                        <span className="line"><img src={line} /></span>
                                        <span className="selectPrice"> ${materials[3].price}</span>
                                    </div>
                                    <div className="lineBox2">
                                        <span className="line"><img src={line} /></span>
                                        <span className="selectPrice"> ${materials[4].price}</span>
                                    </div> 
                                </Col>
                            </Row>
                        </div>
                        <div className="rightBoxMeat rightBoxIngredients">
                            <div className="bun-title"><span><img className="yellowDot" src={yellowDot} /></span> INGREDIENTS</div>
                            {/* {ingredient.map(ii => (
                                <div key={ii.id} className="ingredientBox">
                                    <div className="ingredients-items">
                                        <div className={`${ii.countInStock>0?iname_yellow:iname_gray}`}>{ii.name}</div>
                                        <div className="line"><img src={line} /></div>
                                        <div className="selectPrice selectPrice-ingredients"> ${ii.price}</div>
                                        <div className="minusBg" onClick={onClickMinus}>
                                            <div className="minus"></div>
                                        </div>
                                        <div className="ingredientNum">{state.num}</div>
                                        <div className="plusBg">
                                        <div className="minus"></div>
                                            <div className="plus"></div>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                            <div className="ingredients-items">
                                <div class={`${state.num1>0?iname_yellow:iname_gray}`}>{materials[5].name}</div>
                                <div className="line"><img src={line} /></div>
                                <div className="selectPrice selectPrice-ingredients"> ${materials[5].price}</div>
                                <div className="minusBg" onClick={onClickMinus1}>
                                    <div className="minus"></div>
                                </div>
                                <div className="ingredientNum">{state.num1}</div>
                                <div className="plusBg" onClick={onClickPlus1}>
                                    <div className="minus"></div>
                                    <div className="plus"></div>
                                </div>
                            </div>
                            <div className="ingredientBox">
                                <div className="ingredients-items">
                                    <div class={`${state.num2>0?iname_yellow:iname_gray}`}>{materials[6].name}</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> ${materials[6].price}</div>
                                    <div className="minusBg" onClick={onClickMinus2}>
                                        <div className="minus"></div>
                                    </div>
                                    <div className="ingredientNum">{state.num2}</div>
                                    <div className="plusBg" onClick={onClickPlus2}>
                                        <div className="minus"></div>
                                        <div className="plus"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredientBox">
                                <div className="ingredients-items">
                                    <div class={`${state.num3>0?iname_yellow:iname_gray}`}>{materials[7].name}</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> ${materials[7].price}</div>
                                    <div className="minusBg" onClick={onClickMinus3}>
                                        <div className="minus"></div>
                                    </div>
                                    <div className="ingredientNum">{state.num3}</div>
                                    <div className="plusBg" onClick={onClickPlus3}>
                                        <div className="minus"></div>
                                        <div className="plus"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ingredientBox">
                                <div className="ingredients-items">
                                    <div class={`${state.num4>0?iname_yellow:iname_gray}`}>{materials[8].name}</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> ${materials[8].price}</div>
                                    <div className="minusBg" onClick={onClickMinus4}>
                                        <div className="minus"></div>
                                    </div>
                                    <div className="ingredientNum">{state.num4}</div>
                                    <div className="plusBg" onClick={onClickPlus4}>
                                        <div className="minus"></div>
                                        <div className="plus"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default BurgerDetail;