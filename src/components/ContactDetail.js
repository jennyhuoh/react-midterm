import { Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, WarningOutlined } from '@ant-design/icons';
import { StoreContext } from '../store/index';
import { registerToFirebase } from '../actions/index';
import logo from '../images/signup-logo.png';
import or from '../images/img-or.png';
import google from '../images/icon-google.png';
import fb from '../images/icon-fb.png';
import line from '../images/icon-line.png';
import back from '../images/btn-back.png';
import { LOGIN_STATE } from '../utils/constants';



export default function ContactDetail() {
    // const { state, dispatch } = useContext(StoreContext);

    return(
        <div>
            <Row>
                <Col span={12} className="contact-left">
                    <div className="contact-left-box">
                        <div className="contact-left-title">Contact us</div>
                        <div className="contact-left-information-box"></div>
                    </div>
                </Col>
                <Col span={12} className="contact-right-box"></Col>
            </Row>
        </div>
    );
}