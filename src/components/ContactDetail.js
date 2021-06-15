import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailFilled } from '@ant-design/icons';
import { StoreContext } from '../store/index';
import leftPhone from '../images/icon-phone.png';
import leftMail from '../images/icon-mail.png';
import leftLocation from '../images/icon-location.png';
import { db } from '../api/index';

export default function ContactDetail() {
    const { state: { userSignin: { userInfo } , login}, dispatch } = useContext(StoreContext);
    const [form] = Form.useForm();
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");
    const [contactLoad, setContactLoad] = useState(false);

    const {email} = login === true?userInfo:""

    const history = useHistory();

    const contactFinish = async (e) => {
        setContactLoad(true);
        const ref = db.collection('contact').doc();
        await ref.set({
            name: contactName,
            email: contactEmail,
            message: contactMessage
        }).then(() => {
            setContactLoad(false);
            alert("成功送出！！");
        })
        history.push("/");
        setContactName("");
        setContactLoad("");
        setContactMessage("");
    }

    return(
        <div>
            <Row>
                <Col span={12} className="contact-left">
                    <div className="contact-left-box">
                        <div className="contact-left-title">Contact us</div>
                        <div className="contact-left-information-box">
                            <Row>
                                <Col span={5} className="contact-left-icon-box contact-leftPhone-box"><img src={leftPhone} className="contact-left-icon" /></Col>
                                <Col span={19} className="contact-left-p-box contact-leftPhone-box"><div className="contact-left-p">0987654321</div></Col>
                            </Row>
                            <Row>
                                <Col span={5} className="contact-left-icon-box"><img src={leftMail} className="contact-left-icon" /></Col>
                                <Col span={19} className="contact-left-p-box"><div className="contact-left-p">burger000@gmail.com</div></Col>
                            </Row>
                            <Row>
                                <Col span={5} className="contact-left-icon-box"><img src={leftLocation} className="contact-left-icon"/></Col>
                                <Col span={19} className="contact-left-p-box"><div className="contact-left-p">123 Burger Street</div></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col span={12} className="contact-right-box">
                    <Form 
                        form={form}
                        name="contact" 
                        className="contact-form"
                        onFinish={contactFinish}>
                        <Form.Item
                            value={contactName}
                            name="contactName"
                            rules={[
                            { 
                                required: true,
                                message: "Please input your name",
                            },
                            ]}
                        >
                            <Input 
                                prefix={<UserOutlined className="site-form-item-icon contact-user-icon" />} 
                                placeholder="NAME"
                                onChange={(e) => setContactName(e.target.value)} />
                        </Form.Item>
                        {
                            login === false?
                            <Form.Item
                                value={contactEmail}
                                name="contactEmail"
                                rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                            {
                                required: true,
                                message: "Please input your E-mail!",
                            },
                            ]}
                        >
                            <Input 
                                prefix={<MailFilled className="site-form-item-icon"/>} 
                                placeholder="YOUR EMAIL"
                                onChange={(e) => setContactEmail(e.target.value)} />
                        </Form.Item>:<div>{email}</div>
                        } 
                        
                        <Form.Item
                            value={contactMessage}
                            name="contactMessage"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.TextArea 
                                placeholder="MESSAGE"
                                onChange={(e) => setContactMessage(e.target.value)} />
                        </Form.Item>
                        <Form.Item shouldUpdate>
                        {contactLoad ? (
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading
                            >
                                SEND
                            </Button>):(
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                SEND
                            </Button>
                        )}
                            {/* <Button>SEND</Button> */}
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}