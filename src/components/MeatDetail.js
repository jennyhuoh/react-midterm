import { useContext, useEffect } from 'react';
import { Row, Col, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { StoreContext } from '../store/index';
import meatimg from '../images/img-top-meat.png';
import meat from '../json/meat.json';
import burgerBuns from '../json/burgerBuns.json';
import back from '../images/btn-back.png';
import next from '../images/btn-next.png';
import line from '../images/line.png';
import mobileMeat from '../images/meat.png';
import { SET_PAGE_TOTAL, SET_ITEM_MEAT } from '../utils/constants';

const { Option } = Select;
function MeatDetail() {
    const { state, dispatch } = useContext(StoreContext);
    useEffect(()=>{Cookie.set("itemMeat", state.itemMeat)}, state.itemMeat);
    const onClickMeat0 = () => {
        const meatTemp0 = state.itemMeat.concat(meat[0].name)
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: state.total+70,
        });
        dispatch({
            type: SET_ITEM_MEAT,
            payload: meatTemp0
        });
    }
    const onClickMeat1 = () => {
        const meatTemp1 = state.itemMeat.concat(meat[1].name)
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: state.total+70, 
        });
        dispatch({
            type: SET_ITEM_MEAT,
            payload: meatTemp1
        });
    }
    const onClickMeat2 = () => {
        const meatTemp2 = state.itemMeat.concat(meat[2].name)
        dispatch({
            type: SET_PAGE_TOTAL,
            payload: state.total+80
        });
        dispatch({
            type: SET_ITEM_MEAT,
            payload: meatTemp2
        });
    }
    return(
        <div>

            <div className="step-bun">
                <img className="step-bun-img" src={meatimg} />
            </div>
            <img className="mobileBuns" src={mobileMeat} />
            <div className="bunsBoxmobile">
                <div className="posa">
                    <img className="select-classic-buns meat-bunBottom-mobile" src={burgerBuns[0].bottomImage} />
                </div>
                <div className="posa">
                    <img className="select-classic-buns meat-mobile" src={meat[0].image} />
                </div>
                <div className="posa">
                    <img className="select-classic-buns meat-bunTop-mobile" src={burgerBuns[0].image} />
                </div>
                <div class="burgerBun-btn shrimp-btn">
                    <Button className="selectBurgerBun" shape="round" onClick={onClickMeat0}>
                        {meat[0].name}
                    </Button>
                    <span className="line"><img src={line} className="linemobile" /></span>
                    <span className="selectPrice"> ${meat[0].price}</span>
                </div>
                <div class="burgerBun-btn bacon-btn">
                    <Button className="selectBurgerBun" shape="round" onClick={onClickMeat1}>
                        {meat[1].name}
                    </Button>
                    <span className="line"><img src={line} className="linemobile" /></span>
                    <span className="selectPrice"> ${meat[1].price}</span>
                </div>
                <div class="burgerBun-btn beef-btn">
                    <Button className="selectBurgerBun" shape="round" onClick={onClickMeat2}>
                        {meat[2].name}
                    </Button>
                    <span className="line"><img src={line} className="linemobile" /></span>
                    <span className="selectPrice"> ${meat[2].price}</span>
                </div>
                <hr width="75%" style={{border: "2px solid #707070", marginTop: "9vh", marginLeft: "47px"}}/>
                <div className="totalPriceBox">
                    <div className="totalPrice">TOTAL: NT {state.total}</div>
                </div>
                <div className="btnNextBox-meat">
                    <Link to="/burger">
                            <img src={back} className="btnNext-meat" />
                        </Link>
                    <Link to="/ingredients">
                        <img src={next} className="btnNext-meat" />
                    </Link>
                </div>
            </div>
            <Row className="selectSection mobileNone">
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
                                <Button className="selectBurgerBun" shape="round" onClick={onClickMeat1}>
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