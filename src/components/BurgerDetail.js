import { useContext } from 'react';
import { Row, Col, Button } from 'antd';
import { StoreContext } from '../store/index';
import { setBurgerDetail } from '../actions/index';
import Burger from '../pages/Buger';
import burgerBuns from '../json/burgerBuns.json';
import classicBunTop from '../images/bun-classic-top.png';

function BurgerDetail() {
    // const { state: { burgerDetail: { material, qty } }, dispatch } = useContext(StoreContext);

    return(
        <div>
            <div></div>
            <Row>
                <Col span={12}>
                    <img className="select-classic-buns" src={burgerBuns[0].image} />
                </Col>
                
                <Col span={12}>
                    {burgerBuns.map(burgerBun => (
                        <div key={burgerBun.id}>
                            <Button className="selectBurgerBun">
                                {burgerBun.name}
                            </Button>
                        </div>

                    ))}
                    
                </Col>
            </Row>
        </div>
        
    );
}

export default BurgerDetail;