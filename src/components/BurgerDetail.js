import { useContext, useState, useReducer } from 'react';
import { Row, Col, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/index';
import bun from '../images/img-top-buns.png';
import burgerBuns from '../json/burgerBuns.json';
import next from '../images/btn-next.png';
import line from '../images/line.png';
import { SET_PAGE_TOTAL, SET_ITEM_BUNS } from '../utils/constants';
import ButtonGroup from 'antd/lib/button/button-group';
// import {setPageTotal} from '../actions/index';
//export const StoreContext = createContext();
//const { Option } = Select;
// const initialState={total: 0}
// const reducer=(state, action) => {
//     switch(action.type) {
//         case 'SET_TOTAL':
//             return {
//                 ...state,
//                 total: action.payload
//             };
//         default:
//             return state;
//     }
// }
function BurgerDetail() {
    //const { state: { burgerDetail: qty }, dispatch } = useContext(StoreContext);
    //const { state: { page: total }, dispatch } = useContext(StoreContext);
     const { state, dispatch } = useContext(StoreContext);
    //const [total = 0, setTotal] = useState();
   //const [state, dispatch] = useReducer(reducer, initialState);

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
            <Row className="selectSection">
                <Col span={12}>
                    <div className="bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].image} />
                    </div>
                    <div className="bunsBox">
                        <img className="select-classic-buns" src={burgerBuns[0].bottomImage} />
                    </div>
                    
                </Col>
                
                <Col span={12} className="selectSection-selector">
                    {/* {burgerBun.map(burgerBun => (
                         */}
                        {/* <div key={burgerBuns.id} className="selectSection-selector-right"> */}
                               
                            <div class="burgerBun-btn">
                                
                               
                                <Button className="selectBurgerBun" shape="round" onClick={onClickBurgerBuns0}>
                                    {burgerBuns[0].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${burgerBuns[0].price}</span>
                                <span className="count">
                                {/* <Select
                                    defaultValue={1}
                                    value={qty0}
                                    className="select-style"
                                    onChange = {val => set0Qty(val)}
                                > */}
                                {/* {[...Array(burgerBuns[0].countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </Option>
                                ))} */}
                                {/* </Select> */}
                                </span> 
                            </div>
                            <div class="burgerBun-btn">
                                <Button className="selectBurgerBun" shape="round" onClick={onClickBurgerBuns1}>
                                    {burgerBuns[1].name}
                                </Button>
                                <span className="line"><img src={line} /></span>
                                <span className="selectPrice"> ${burgerBuns[1].price}</span>
                                <span className="count">
                                {/* <Select
                                    defaultValue={qty1}
                                    value={qty1}
                                    className="select-style"
                                    onChange = {val => set1Qty(val)}
                                > */}
                                {/* {[...Array(burgerBuns[1].countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </Option>
                                ))} */}
                                {/* </Select> */}
                                </span> 
                            </div>
                          
                            <hr width="80%" style={{border: "2px solid #707070", marginTop: "10vh", marginLeft: "-10vh"}}/>
                            <div className="totalPriceBox">
                                <div className="totalPrice">
                                    
                                    TOTAL: NT {state.total}
                                </div>
                            </div>
                          
                            
                                
                                {/* <span><Button className="count-minus">
                                    <p className="count-minus-p">-</p>
                                </Button></span>
                                <span className="count-qty">
                                    <div></div>
                                </span>
                                <span><Button className="count-plus">
                                    <p className="count-plus-p" onClick={burgerBun.countInStock+1}>+</p>
                                </Button></span> */}
                            
                              
                        {/* </div> */}
                    {/* ))}  */}
                    <div className="btnNextBox">
                        <Link to="/meat">
                            <img src={next} className="btnNext" />
                        </Link>
                    </div>
                    
                </Col>
            </Row>
        </div>
        
    );
}

export default BurgerDetail;