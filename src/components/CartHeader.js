import { Link, useHistory } from 'react-router-dom';
import { Menu, Modal } from 'antd';
import { useContext, useState } from 'react';
import imgLogo from '../images/burger-logo.png';
import { getJSON } from '../api/index';
import { setPageContent } from '../actions/index';
import { StoreContext } from '../store/index';
import { logoutFromFirebase } from '../actions/index';
import { LOGIN_STATE } from '../utils/constants';
import CartSummaryClicked from './CartSummaryClicked';
import HamMenu from './HamMenu';
import HamContent from './HamContent';
import HamBg from './HamBg';
import login from '../images/btn-login.png';
import logout from '../images/btn-logout.png';


export default function CartHeader() {
    const { state, dispatch } = useContext(StoreContext);
    const history = useHistory();
    const onClickBurger = () => {
        setPageContent(dispatch, getJSON("/burgerBuns"))
    }
    const handleLogout = () => {
        logoutFromFirebase(dispatch);
        history.push("/");
        dispatch({
            type: LOGIN_STATE,
            payload: false
        });
        Modal.info({
            // title: 'This is a notification message',
            content: (
              <div>
                已登出！
              </div>
            ),
            onOk() {},
          });
     }
     const [isOnTouch, setIsOnTouch] = useState(false);
    let hamContent;
    let hamBg;
    if(isOnTouch) {
        hamContent = <HamContent isOnTouch={isOnTouch} />;
        hamBg = <HamBg />;
    }
    return (
        <header className="headerBgc">
            <HamMenu onClick={()=>setIsOnTouch(!isOnTouch)} isOnTouch={isOnTouch}/>
            {hamContent}
            {hamBg}
            <div> 
                <Link to={"/"}><img className="logo" src={imgLogo} /></Link>
            </div>
            <div className="headerTextBox">
            <Menu mode="horizontal" className="headerItems">
                   <Menu.Item key="1" >
                    <Link to="/" className="headerTextLink">
                        <div className="headerTextHome">
                            <div className="homeLine">
                                <h1 className="headerText">HOME</h1>
                            </div>
                        </div>
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/burger" className="headerTextLink">
                            <div className="headerTextBurger" onClick={onClickBurger}>
                                <div className="burgerLine">
                                    <h1 className="headerText">BURGER</h1>
                                </div>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/contact" className="headerTextLink">
                            <div className="headerTextContact">
                                <div className="contactLine">
                                    <h1 className="headerText">CONTACT</h1>
                                </div>
                                
                            </div>
                            
                        </Link>
                    </Menu.Item> 
            </Menu>
            </div>
            <div>
                <CartSummaryClicked />
                {
                    state.login === true?<span onClick={handleLogout} className="wantToLogout"><img src={logout} className="accountimg"/></span>
                    :state.login === false?<span><Link to="/login"><img src={login} className="accountimg accountimg-cart"/></Link></span>:""
                }
            </div>
        </header>
    );
}