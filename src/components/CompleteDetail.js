import { useContext, useState, useReducer } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import completeimg from '../images/img-top-complete.png';
import meat from '../json/meat.json';
import burgerBuns from '../json/burgerBuns.json';
import ingredients from '../json/ingredient.json';
import next from '../images/btn-next.png';
import totalLabel from '../images/img-total.png';
import oneMore from '../images/btn-onemore.png';
import checkOut from '../images/btn-checkout.png';
import lineTwo from '../images/Line2.png';
import mobileComplete from '../images/complete.png';
import { SET_ITEM_NUM, SET_PAGE_TOTAL } from '../utils/constants';

function CompleteDetail() {
    const { state, dispatch } = useContext(StoreContext);
    const onClickOneMore = () => {
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: 0
        });
    }
    return(
        <div>
            <div className="step-bun">
                <img className="step-bun-img" src={completeimg} />
            </div>
            <img className="mobileBuns" src={mobileComplete} />
            <div className="bunsBoxmobile">
                <div className="posa bunBottom mobilebunBottom">
                        <img className="select-classic-buns complete-burger" src={burgerBuns[0].bottomImage} />
                    </div>
                    <div className="posa meat mobilemeat">
                        <img className="select-classic-buns complete-burger" src={meat[0].image} />
                    </div>
                    <div className="posa cheese mobilecheese">
                        <img className="select-classic-buns complete-burger" src={ingredients[0].image} />
                    </div>
                    <div className="posa vegetable mobilevegetable">
                        <img className="select-classic-buns complete-burger" src={ingredients[1].image} />
                    </div>
                    <div className="posa onion mobileonion">
                        <img className="select-classic-buns complete-burger" src={ingredients[3].image} />
                    </div>
                    
                    <div className="posa bunTop mobilebunTop">
                        <img className="select-classic-buns complete-burger" src={burgerBuns[0].image} />
                    </div>
                    <div style={{height: '125px'}}></div>
                    <div className="completePrice completePricemobile">
                        <span className="totalLabel totalLabelmobile"><img src={totalLabel} className="totalLabel-img" /></span>
                        <span className="completePrice-total"> NT {state.total}</span> 
                    </div>
                    
            </div>
            <Row className="selectSection mobileNone">
                <Col span={15}>
                    <div className="posa posa-complete bunBottom">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                    <div className="posa posa-complete meat">
                        <img className="select-classic-buns" src={meat[0].image} />
                    </div>
                    <div className="posa posa-complete cheese">
                        <img className="select-classic-buns" src={ingredients[0].image} />
                    </div>
                    <div className="posa posa-complete vegetable">
                        <img className="select-classic-buns" src={ingredients[1].image} />
                    </div>
                    <div className="posa posa-complete onion">
                        <img className="select-classic-buns" src={ingredients[3].image} />
                    </div>
                    
                    <div className="posa posa-complete bunTop">
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                </Col>
                <Col span={9} className="selectSection-selector">
                    <div className="completePrice">
                        <span className="totalLabel"><img src={totalLabel} className="totalLabel-img" /></span>
                        <span className="completePrice-total"> NT {state.total}</span> 
                    </div>
                   
                </Col>
            </Row>
            <Row className="complete-bottom-section">
                <div onClick={onClickOneMore}>
                    <Link to="/burger">
                        <img src={oneMore} className="complete-bottom-section-oneMore complete-bottom-section-button" />
                    </Link>
                </div>
                <div> <img src={lineTwo} className="complete-bottom-section-line" /> </div>
                <div className="">
                    <Link to="/shoppingCart">
                        <img src={checkOut} className="complete-bottom-section-checkOut complete-bottom-section-button" />
                    </Link>
                </div>
            </Row>
        </div>
    );
}

export default CompleteDetail;