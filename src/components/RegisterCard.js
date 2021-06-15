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



export default function RegisterCard() {
    const { state:{ userRegister: { loading, error } }, dispatch } = useContext(StoreContext);
   const [form] = Form.useForm();
   const history = useHistory();

   const onFinish = async (values) => {
     console.log('Received values of form: ', values);
     const user = await registerToFirebase(dispatch, values);
     user && history.push("/contact");
     dispatch({
         type: LOGIN_STATE,
         payload: true
     })
   };
    return(
        <div className="registerCard-bg">
            <div className="card">
                <div className="card-head">
                    <img className="card-head-logo" src={logo} />
                </div>
                <div className="card-title">- Sign up -</div>
                <Form 
                    form={form}
                    name="signUp" 
                    className="signup-form"
                    onFinish={onFinish}>
                    <Form.Item
                        name="email"
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="UserEmail" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Item>
                        <Form.Item shouldUpdate>
                        {loading ? (
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading
                            >
                                Sign up
                            </Button>):(
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
                {error === "" ? (
           <></>
         ) : (
           <div className="login-form__error-wrap">
             <h3 className="login-form__error-title">
               <WarningOutlined className="site-form-item-icon" />
               {"  "}There was a problem
             </h3>
             <p className="login-form__error-message">{error}</p>
           </div>
         )}
                <Link to="/login">
                    <img className="signup-back" src={back} />
                </Link>
            </div>
        </div>
    );
}