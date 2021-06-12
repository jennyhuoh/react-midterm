import { useContext, useState, useReducer, useEffect } from 'react';
import { Row, Col, Button, Select, Radio, Space } from 'antd';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { StoreContext } from '../store/index';
import bun from '../images/img-top-buns.png';
import burgerBuns from '../json/burgerBuns.json';
import materials from '../json/materials.json';
import ingredient from '../json/ingredient.json';
import next from '../images/btn-next.png';
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
         SET_MEAT_TOTAL
} from '../utils/constants';
import ButtonGroup from 'antd/lib/button/button-group';
import mobileBuns from '../images/bun.png';
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
        }

    }
   
    // const onClickBurgerBuns0 = () => {
    //     const bunsTemp0 = state.itemBuns.concat(burgerBuns[0].name)
    //     dispatch({
    //         type: SET_PAGE_TOTAL,
    //         payload: 50
    //     });
    //     dispatch({
    //         type: SET_ITEM_BUNS,
    //         payload: bunsTemp0
    //     });
    // }
    // const onClickBurgerBuns1 = () => {
    //     const bunsTemp1 = state.itemBuns.concat(burgerBuns[0].name)
    //     dispatch({
    //         type: SET_PAGE_TOTAL,
    //         payload: 60
    //     });
    //     dispatch({
    //         type: SET_ITEM_BUNS,
    //         payload: bunsTemp1
    //     });
    // }
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
            <img className="mobileBuns" src={mobileBuns} />
            <div className="bunsBoxmobile">
                <div>
                    <img className="select-classic-buns mobileSelectBuns" src={burgerBuns[0].image} />
                </div>
                <div >
                    <img className="select-classic-buns mobileSelectBuns mobileBunsBottom" src={burgerBuns[0].bottomImage} />
                </div>  
                            <div class="burgerBun-btn burgerBun-btn-first">
                                
                               
                                <Button className="selectBurgerBun" shape="round">
                                    {materials[0].name}
                                </Button>
                                <span className="line"><img src={line} className="linemobile"/></span>
                                <span className="selectPrice"> ${materials[0].price}</span>
                               
                            </div>
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round">
                                    {materials[1].name}
                                </Button>
                                <span className="line"><img src={line} className="linemobile" /></span>
                                <span className="selectPrice"> ${materials[1].price}</span>
                          
                            </div>
                          
                            <hr width="75%" style={{border: "2px solid #707070", marginTop: "9vh", marginLeft: "47px"}}/>
                            <div className="totalPriceBox">
                                <div className="totalPrice">
                                    {/* TOTAL: NT {state.total} */}
                                </div>
                            </div>
                    <div className="btnNextBox">
                        <Link to="/meat">
                            <img src={next} className="btnNext" />
                        </Link>
                    </div>
                    </div>
            <div className="burgerTitle">＜ CUSTOMIZE YOUR BURGER ＞</div>
            <Row className="selectSection mobileNone">
                <Col span={12}>
                    
                    <div className="posa bunsBox bunBottom">
                        {/* <img className="select-classic-buns" src={burgerBuns[0].bottomImage} /> */}
                        {
                            state.bun === "classic"?<img className="select-classic-buns" src={materials[1].bottomImage} />
                            :state.bun === "black"?<img className="select-classic-buns" src={materials[0].bottomImage} />:""
                        }
                    </div>
                    <div className="posa bunsBox tomato">
                        {/* <img className="select-classic-buns" src={materials[7].image} /> */}
                        {
                            state.num3 != 0?<img className="select-classic-buns" src={materials[7].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox meat">
                        {/* <img className="select-classic-buns" src={materials[2].image} /> */}
                        {
                            state.meat === "shrimp"?<img className="select-classic-buns" src={materials[3].image} />
                            :state.meat === "bacon"?<img className="select-classic-buns" src={materials[4].image} />
                            :state.meat === "beef"?<img className="select-classic-buns" src={materials[2].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox cheese">
                        {/* <img className="select-classic-buns" src={materials[5].image} /> */}
                        {
                            state.num1 != 0?<img className="select-classic-buns" src={materials[5].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox vegetable">
                        {/* <img className="select-classic-buns" src={materials[6].image} /> */}
                        {
                            state.num2 != 0?<img className="select-classic-buns" src={materials[6].image} />:""
                        }
                    </div>
                    <div className="posa bunsBox onion">
                        {/* <img className="select-classic-buns" src={materials[8].image} /> */}
                        {
                            state.num4 != 0?<img className="select-classic-buns" src={materials[8].image} />:""
                        }
                    </div>
                    
                    <div className="posa bunsBox">  
                        {/* <img className="select-classic-buns" src={burgerBuns[0].image} /> */}
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
                    <div className="btn-checkout-box">
                        <Link to="/shoppingCart">
                            <img src={checkOut} className="btn-checkout" />
                        </Link>
                    </div>
                </Col>
                <Col span={12} className="selectSection-selector">
                    <div>
                       
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
                                    {/* <div className="rightBoxBun-select">
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value={materials[2].price}>Fried Shrimp</Radio.Button>
                                            <Radio.Button value={materials[3].price}>Bacon</Radio.Button>
                                            <Radio.Button value={materials[4].price}>Beef</Radio.Button>
                                        </Radio.Group>
                                    </div> */}
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
                            <div className="ingredientBox">
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
                            {/* <hr width="80%" style={{border: "2px solid #707070", marginTop: "10vh", marginLeft: "-10vh"}}/> */}
                           
                    
                    </div>
                </Col>
            </Row>
 
        </div>
        
    );
}

export default BurgerDetail;