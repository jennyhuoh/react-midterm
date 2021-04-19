import { useContext, useState, useReducer, useEffect } from 'react';
import { Row, Col, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { StoreContext } from '../store/index';
import bun from '../images/img-top-buns.png';
import burgerBuns from '../json/burgerBuns.json';
import next from '../images/btn-next.png';
import line from '../images/line.png';
import { SET_PAGE_TOTAL, SET_ITEM_BUNS } from '../utils/constants';
import ButtonGroup from 'antd/lib/button/button-group';
import mobileBuns from '../images/bun.png';

function BurgerDetail() {

     const { state, dispatch } = useContext(StoreContext);

    useEffect(()=>{Cookie.set("itemBuns", state.itemBuns)}, state.itemBuns);

    const onClickBurgerBuns0 = () => {
        const bunsTemp0 = state.itemBuns.concat(burgerBuns[0].name)
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: 50
        });
        dispatch({
            type: SET_ITEM_BUNS,
            payload: bunsTemp0
        });
    }
    const onClickBurgerBuns1 = () => {
        const bunsTemp1 = state.itemBuns.concat(burgerBuns[0].name)
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: 60
        });
        dispatch({
            type: SET_ITEM_BUNS,
            payload: bunsTemp1
        });
    }

    return(
        <div>
            <div className="step-bun">
                <img className="step-bun-img" src={bun} />
            </div>
            <img className="mobileBuns" src={mobileBuns} />
            <div className="bunsBoxmobile">
                <div>
                    <img className="select-classic-buns mobileSelectBuns" src={burgerBuns[0].image} />
                </div>
                <div >
                    <img className="select-classic-buns mobileSelectBuns mobileBunsBottom" src={burgerBuns[0].bottomImage} />
                </div>  
                            <div class="burgerBun-btn burgerBun-btn-first">
                                
                               
                                <Button className="selectBurgerBun" shape="round" onClick={onClickBurgerBuns0}>
                                    {burgerBuns[0].name}
                                </Button>
                                <span className="line"><img src={line} className="linemobile"/></span>
                                <span className="selectPrice"> ${burgerBuns[0].price}</span>
                               
                            </div>
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickBurgerBuns1}>
                                    {burgerBuns[1].name}
                                </Button>
                                <span className="line"><img src={line} className="linemobile" /></span>
                                <span className="selectPrice"> ${burgerBuns[1].price}</span>
                          
                            </div>
                          
                            <hr width="75%" style={{border: "2px solid #707070", marginTop: "9vh", marginLeft: "47px"}}/>
                            <div className="totalPriceBox">
                                <div className="totalPrice">
                                    TOTAL: NT {state.total}
                                </div>
                            </div>
                    <div className="btnNextBox">
                        <Link to="/meat">
                            <img src={next} className="btnNext" />
                        </Link>
                    </div>
                    </div>
            <Row className="selectSection mobileNone">
                <Col span={12}>
                    <div className="bunsBox">  
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                    <div className="bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                </Col>
                <Col span={12} className="selectSection-selector">
                        <div>
                        <div className="bunsBoxmobile">
                        
                        <img className="select-classic-buns mobileSelectBuns" src={burgerBuns[0].image} />
                    </div>
                    <div className="bunsBoxmobile">
                        <img className="select-classic-buns mobileSelectBuns" src={burgerBuns[0].bottomImage} />
                    </div>  
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickBurgerBuns0}>
                                    {burgerBuns[0].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${burgerBuns[0].price}</span>
                            
                            </div>
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickBurgerBuns1}>
                                    {burgerBuns[1].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${burgerBuns[1].price}</span>
                         
                            
                            </div>
                            <hr width="80%" style={{border: "2px solid #707070", marginTop: "10vh", marginLeft: "-10vh"}}/>
                            <div className="totalPriceBox">
                                <div className="totalPrice">
                                    
                                    TOTAL: NT {state.total}
                                </div>
                            </div>
                    <div className="btnNextBox">
                        <Link to="/meat">
                            <img src={next} className="btnNext" />
                        </Link>
                    </div>
                    </div>
                </Col>
            </Row>
        </div>
        
    );
}

export default BurgerDetail;