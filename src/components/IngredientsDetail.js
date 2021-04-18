import { useContext, useState, useReducer } from 'react';
import { Row, Col, Button, Select, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import ingredientsimg from '../images/img-top-ingredient.png';
import meat from '../json/meat.json';
import burgerBuns from '../json/burgerBuns.json';
import ingredients from '../json/ingredient.json';
import back from '../images/btn-back.png';
import next from '../images/btn-next.png';
import line from '../images/line.png';
import { SET_PAGE_TOTAL } from '../utils/constants';

const { Option } = Select;
function IngredientsDetail() {
    const ingredientOptions = [ingredients[0].name, ingredients[1].name, ingredients[2].name, ingredients[3].name]
     const { state, dispatch } = useContext(StoreContext);
     const onChangeIngredients = () => {
             dispatch({
             type: SET_PAGE_TOTAL,
             payload: state.total+15
            });
     }
    return(
        <div>
            <div className="step-bun">
                <img className="step-bun-img" src={ingredientsimg} />
            </div>
            <Row className="selectSection">
                <Col span={12} className="leftCol">
                    <div className="posa bunsBox bunBottom">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                    <div className="posa bunsBox meat">
                        <img className="select-classic-buns" src={meat[0].image} />
                    </div>
                    <div className="posa bunsBox cheese">
                        <img className="select-classic-buns" src={ingredients[0].image} />
                    </div>
                    <div className="posa bunsBox vegetable">
                        <img className="select-classic-buns" src={ingredients[1].image} />
                    </div>
                    <div className="posa bunsBox onion">
                        <img className="select-classic-buns" src={ingredients[3].image} />
                    </div>
                    
                    <div className="posa bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                    
                    
                    <div className="btnBackBox-ingredients">
                        <Link to="/meat">
                            <img src={back} className="btnNext-meat" />
                        </Link>
                    </div>
                </Col>
                <Col span={12} className="selectSection-selector">
                            <Checkbox.Group options={ingredientOptions} onChange={onChangeIngredients} />
                            <div className="priceMove">
                                <div>
                                    <span className="line"><img src={line} /></span>
                                    <span className="selectPrice"> ${ingredients[0].price}</span>
                                </div>
                                <div className="priceMoveDown">
                                    <span className="line"><img src={line} /></span>
                                    <span className="selectPrice"> ${ingredients[0].price}</span>
                                </div>
                                <div className="priceMoveDown">
                                    <span className="line"><img src={line} /></span>
                                    <span className="selectPrice"> ${ingredients[0].price}</span>
                                </div>
                                <div className="priceMoveDown">
                                    <span className="line"><img src={line} /></span>
                                    <span className="selectPrice"> ${ingredients[0].price}</span>
                                </div>
                                
                            </div>
                            
                            <hr width="90%" style={{border: "1px solid #707070", marginTop: "4vh", marginLeft: "-10vh"}}/>
                            <div className="totalPriceBox">
                                <div className="totalPrice">TOTAL: NT {state.total}</div>
                            </div>
                    <div className="btnNextBox-meat">
                        <Link to="/complete">
                            <img src={next} className="btnNext-meat" />
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default IngredientsDetail;