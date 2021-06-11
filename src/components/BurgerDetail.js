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
} from '../utils/constants';
import ButtonGroup from 'antd/lib/button/button-group';
import mobileBuns from '../images/bun.png';
import yellowDot from '../images/yellowDot.png';

function BurgerDetail() {
    const iname_yellow = "iname_yellow"
    const iname_gray = "iname_gray" 

    //const { state: {ingredients:{ingredient}}, dispatch } = useContext(StoreContext);
    const {state, dispatch} = useContext(StoreContext);
    //const[num, setnum] = useState(2);
    //useEffect(()=>{Cookie.set("itemBuns", state.itemBuns)}, state.itemBuns);
    
    const  onClickMinus1 = () => {
        if(state.num1 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT1,
                payload: 1
            })
        };
        if(state.num1 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT1,
                payload: 0
            })
        };
    }
    const  onClickPlus1 = () => {
        if(state.num1 === 0) {
            dispatch({
                type: ADD_INGREDIENT1,
                payload: 1
            })
        };
        if(state.num1 === 1) {
            dispatch({
                type: ADD_INGREDIENT1,
                payload: 2
            })
        };
    }
    const  onClickMinus2 = () => {
        if(state.num2 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT2,
                payload: 1
            })
        };
        if(state.num2 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT2,
                payload: 0
            })
        };
    }
    const  onClickPlus2 = () => {
        if(state.num2 === 0) {
            dispatch({
                type: ADD_INGREDIENT2,
                payload: 1
            })
        };
        if(state.num2 === 1) {
            dispatch({
                type: ADD_INGREDIENT2,
                payload: 2
            })
        };
    }
    const  onClickMinus3 = () => {
        if(state.num3 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT3,
                payload: 1
            })
        };
        if(state.num3 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT3,
                payload: 0
            })
        };
    }
    const  onClickPlus3 = () => {
        if(state.num3 === 0) {
            dispatch({
                type: ADD_INGREDIENT3,
                payload: 1
            })
        };
        if(state.num3 === 1) {
            dispatch({
                type: ADD_INGREDIENT3,
                payload: 2
            })
        };
    }
    const  onClickMinus4 = () => {
        if(state.num4 === 2) {
            dispatch({
                type: REMOVE_INGREDIENT4,
                payload: 1
            })
        };
        if(state.num4 === 1) {
            dispatch({
                type: REMOVE_INGREDIENT4,
                payload: 0
            })
        };
    }
    const  onClickPlus4 = () => {
        if(state.num4 === 0) {
            dispatch({
                type: ADD_INGREDIENT4,
                payload: 1
            })
        };
        if(state.num4 === 1) {
            dispatch({
                type: ADD_INGREDIENT4,
                payload: 2
            })
        };
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
                    <div className="bunsBox">  
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                    <div className="bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                     <div className="totalPriceBox">
                                <div className="totalPrice">   
                                    {/* TOTAL: NT {state.total} */}
                                </div>
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
                                            buttonStyle="solid" />
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
                                            buttonStyle="solid" />
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
                                    <div class={`${state.num1>0?iname_yellow:iname_gray}`}>Cheese</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> $15</div>
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
                                    <div class={`${state.num2>0?iname_yellow:iname_gray}`}>Vegetable</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> $15</div>
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
                                    <div class={`${state.num3>0?iname_yellow:iname_gray}`}>Tomato</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> $15</div>
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
                                    <div class={`${state.num4>0?iname_yellow:iname_gray}`}>Onion</div>
                                    <div className="line"><img src={line} /></div>
                                    <div className="selectPrice selectPrice-ingredients"> $15</div>
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
                           
                    {/* <div className="btnNextBox">
                        <Link to="/meat">
                            <img src={next} className="btnNext" />
                        </Link>
                    </div> */}
                    </div>
                </Col>
            </Row>
 
        </div>
        
    );
}

export default BurgerDetail;