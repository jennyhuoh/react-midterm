import { Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { StoreContext } from '../store/index';
import { loginToFirebase } from '../actions/index';
import { UserOutlined, LockOutlined, WarningOutlined } from '@ant-design/icons';
import { LOGIN_STATE } from '../utils/constants';
import logo from '../images/signup-logo.png';
import or from '../images/img-or.png';
import google from '../images/icon-google.png';
import fb from '../images/icon-fb.png';
import line from '../images/icon-line.png';
import back from '../images/btn-back.png';



export default function LoginCard() {
    const { state:{ userSignin: { loading, error } }, dispatch } = useContext(StoreContext)
        const [form] = Form.useForm();
        const history = useHistory();
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed: ', errorInfo.errorFields[0].errors[0])
        };
        
        const onFinish = async (values) => {
          console.log('Received values of form: ', values);
          const auth = await loginToFirebase(dispatch, values);
          auth && history.push("");  
          dispatch({
            type: LOGIN_STATE,
            payload: true
        })    
        };
    return(
        <div className="registerCard-bg">
            <div className="card card-login">
                <div className="card-head">
                    <img className="card-head-logo" src={logo} />
                </div>
                <div className="card-title">- Sign in -</div>
                <Form 
                    form={form}
                    name="normal_login" 
                    className="signup-form"
                    onFinish={onFinish}
                    onFihishFailed={onFinishFailed}
                    initialValues={{
                        remember: true,
                      }}>
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
                          hasFeedback
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
                    <Form.Item className="login-remember-box">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className="login-remember">Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password?
                        </a>
                    </Form.Item>
                    <Form.Item>
                    {loading ? (
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading
                        >
                            Log in
                        </Button>
                        ) : (
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Log in
                        </Button>
                    )}
                    </Form.Item>
                </Form>
                <Link to="/register">
                    <div className="login-create">Create a new account</div>
                </Link>
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
                <Link to="/shoppingCart">
                    <img className="signup-back" src={back} />
                </Link>
            </div>
        </div>
    );
}