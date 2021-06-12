import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../images/signup-logo.png';
import or from '../images/img-or.png';
import google from '../images/icon-google.png';
import fb from '../images/icon-fb.png';
import line from '../images/icon-line.png';
import back from '../images/btn-back.png';


export default function RegisterCard() {
    return(
        <div className="registerCard-bg">
            <div className="card">
                <div className="card-head">
                    <img className="card-head-logo" src={logo} />
                </div>
                <div className="card-title">- Sign up -</div>
                <Form name="signUp" className="signup-form">
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input 
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Item>
                        <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Sign up
                            </Button>
                        )}
                        </Form.Item>
                </Form>
                <div>
                    <img src={or} />
                </div>
                <div className="socialMedia">
                    <div class="socialMedia-imgBox"><img class="socialMedia-img" src={google} /></div>
                    <div class="socialMedia-imgBox"><img class="socialMedia-img" src={fb} /></div>
                    <div class="socialMedia-imgBox"><img class="socialMedia-img" src={line} /></div>
                </div>
                <Link to="">
                    <img className="signup-back" src={back} />
                </Link>
            </div>
        </div>
    );
}