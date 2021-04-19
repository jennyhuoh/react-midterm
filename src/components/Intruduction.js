import imgHome from '../images/img-home.png';
import imgStepOne from '../images/img-step1.png';
import imgStepOneBurger from '../images/img-step1-burger.png';
import imgStepTwoBurger from '../images/img-step2-burger.png';
import imgStepTwo from '../images/img-step2.png';
import imgStepThree from '../images/img-step3.png';
import imgStepThreeBurger from '../images/img-step3-burger.png';
import imgStepFourBurger from '../images/img-step4-burger.png';
import imgStartLeft from '../images/img-Lstart.png';
import imgStartRight from '../images/img-Rstart.png';
import btnStart from '../images/btn-start.png';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import mobileLogo from '../images/img-home2.png';


export default function Introduction() {
    return(
        <div className="homeContent">
            <div className="sectionHome">
            <img className="imgHomeTwo" src={mobileLogo} />
                <img src={imgHome} className="imgHome" />
                <h3 className="homeText">- CUSTOMIZE YOUR BURGER -</h3>
            </div>
            <div>
                <Row>
                    <Col span={7}>
                        <img src={imgStepOne} class="imgYellow" />
                    </Col>
                    <Col span={17} className="step">
                        <h2 className="homeStepTitle">STEP1</h2>
                        <hr align="center" width="10%" style={{border: "1px solid #555555"}}/>
                        <h4 className="homeStepSummary">Choose Burger Buns</h4>
                        <img src={imgStepOneBurger} class="imgHomeBurger" />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={17} className="step">
                        <h2 className="homeStepTitle">STEP2</h2>
                        <hr align="center" width="10%" style={{border: "1px solid #555555"}}/>
                        <h4 className="homeStepSummary">Choose Meat</h4>
                        <img src={imgStepTwoBurger} class="imgHomeBurger" />
                    </Col>
                    <Col span={7}>
                        <img src={imgStepTwo} class="imgYellow" />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={7}>
                        <img src={imgStepThree} class="imgYellow" />
                    </Col>
                    <Col span={17} className="step">
                        <h2 className="homeStepTitle">STEP3</h2>
                        <hr align="center" width="10%" style={{border: "1px solid #555555"}}/>
                        <h4 className="homeStepSummary">Choose Ingredients</h4>
                        <img src={imgStepThreeBurger} class="imgHomeBurger" />
                    </Col>
                </Row>
            </div>
            <div className="step stepFour">
                <h2 className="homeStepTitle">STEP4</h2>
                <hr align="center" width="7%" style={{border: "1px solid #555555"}}/>
                <h4 className="homeStepSummary">Complete!</h4>
                <img src={imgStepFourBurger} class="imgHomeBurger" />
            </div>
            <div>
                <Row className="step stepFive">
                    <Col span={8}>
                        <img src={imgStartLeft} className="imgHomeStart imgHomeLStart" />
                    </Col>
                    <Col span={8}>
                        <Link to="/burger">
                            <img src={btnStart} className="btnStart" />
                        </Link>
                    </Col>
                    <Col span={8}>
                        <img src={imgStartRight} className="imgHomeStart imgHomeRStart" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}