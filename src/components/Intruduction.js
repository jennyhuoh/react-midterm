import imgHome from '../images/img-home.png';
import imgHomeMobile from'../images/img-home-mobile.png';
import btnCustomize from '../images/btn-CustomizeNow.png';
import imgStepOne from '../images/img-step1.png';
import imgStepTwo from '../images/img-step2.png';
import imgStepThree from '../images/img-step3.png';
import imgStepFour from '../images/img-step4.png';
import btnStart from '../images/btn-start.png';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import mobileLogo from '../images/img-home2.png';


export default function Introduction() {
    return(
        <div className="homeContent">
            <div className="sectionHome">
                <img className="imgHomeTwo" src={imgHomeMobile} />
                <img src={imgHome} className="imgHome" />
                <div className="home-title">CUSTOMIZE YOUR BURGER</div>
                <Link to="/burger" className="home-start-box">
                    <img src={btnCustomize} className="btnStart" />
                </Link>
                
            </div>
            <div className="homeSec2Bg">
                <Row className="steps">
                    <Col span={6}>
                        <img src={imgStepOne} className="imgYellow" />
                    </Col>
                    <Col span={6}>
                        <img src={imgStepTwo} className="imgYellow" />
                    </Col>
                    <Col span={6}>
                        <img src={imgStepThree} className="imgYellow" />
                    </Col>
                    <Col span={6}>
                        <img src={imgStepFour} className="imgYellow" />
                    </Col>
                </Row>
                <div className="steps-mobile">
                    <div><img src={imgStepOne} className="imgYellow" /></div>
                    <div><img src={imgStepTwo} className="imgYellow" /></div>
                    <div><img src={imgStepThree} className="imgYellow" /></div>
                    <div><img src={imgStepFour} className="imgYellow" /></div>
                </div>
                <Link to="/burger" className="home-start-box">
                    <img src={btnStart} className="btnStart btnstart-gray" />
                </Link>
            </div>
        </div>
    );
}