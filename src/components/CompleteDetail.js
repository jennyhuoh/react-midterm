import { useContext, useState, useReducer } from 'react';
import { Row, Col, Button, Select, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import ingredientsimg from '../images/img-top-ingredient.png';
import meat from '../json/meat.json';
import burgerBuns from '../json/burgerBuns.json';
import ingredients from '../json/ingredient.json';
import next from '../images/btn-next.png';
import line from '../images/line.png';
import { SET_PAGE_TOTAL } from '../utils/constants';

function CompleteDetail() {
     const { state, dispatch } = useContext(StoreContext);
    //  const onChangeIngredients = () => {
    //          dispatch({
    //          type: SET_PAGE_TOTAL,
    //          payload: state.total+15
    //         });
    //  }
    return(
        <div>
            <div className="step-bun">
                <img className="step-bun-img" src={ingredientsimg} />
            </div>
            <Row className="selectSection">
                <Col span={18}>
                    <div className="bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                    <div className="meatBox">
                        <img className="select-classic-buns" src={ingredients[0].image} />
                    </div>
                    <div className="meatBox">
                        <img className="select-classic-buns" src={meat[0].image} />
                    </div>
                    <div className="bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                    
                </Col>
                <Col span={6} className="selectSection-selector">
                            
                                    <span className="line"><img src={line} /></span>
                                    <span className="totalPrice">TOTAL: NT {state.total}</span>
                </Col>
            </Row>
            <Row>
            <div className="btnBackBox-meat">
                        <Link to="/ingredients">
                            <img src={next} className="btnNext-meat" />
                        </Link>
                    </div>
                    <span className="btnNextBox-meat">
                        <Link to="/meat">
                            <img src={next} className="btnNext-meat" />
                        </Link>
                    </span>
            </Row>
        </div>
    );
}

export default CompleteDetail;