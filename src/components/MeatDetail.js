import { useContext, useState, useReducer } from 'react';
import { Row, Col, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import meatimg from '../images/img-top-meat.png';
import meat from '../json/meat.json';
import burgerBuns from '../json/burgerBuns.json';
import back from '../images/btn-back.png';
import next from '../images/btn-next.png';
import line from '../images/line.png';
import { SET_PAGE_TOTAL } from '../utils/constants';

const { Option } = Select;
function MeatDetail() {
    const { state, dispatch } = useContext(StoreContext);
    const onClickMeat0 = () => {
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: state.total+70,
            
        });
    }
    const onClickMeat2 = () => {
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: state.total+80
        });
    }
    return(
        <div>
            <div className="step-bun">
                <img className="step-bun-img" src={meatimg} />
            </div>
            <Row className="selectSection">
                <Col span={12}>
                <div className="posa bunsBox bunBottom">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                    <div className="posa bunsBox meat">
                        <img className="select-classic-buns" src={meat[0].image} />
                    </div>
                    <div className="posa bunsBox bunTop">
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                    <div className="btnBackBox-meat">
                        <Link to="/burger">
                            <img src={back} className="btnNext-meat" />
                        </Link>
                    </div>
                </Col>
                <Col span={12} className="selectSection-selector">
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickMeat0}>
                                    {meat[0].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${meat[0].price}</span>
                            </div>
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickMeat0}>
                                    {meat[1].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${meat[1].price}</span>
                            </div>
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickMeat2}>
                                    {meat[2].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${meat[2].price}</span>
                            </div>
                            <hr width="80%" style={{border: "1px solid #707070", marginTop: "10vh", marginLeft: "-10vh"}}/>
                            <div className="totalPriceBox">
                                <div className="totalPrice">TOTAL: NT {state.total}</div>
                            </div>
                    <div className="btnNextBox-meat">
                        <Link to="/ingredients">
                            <img src={next} className="btnNext-meat" />
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default MeatDetail;