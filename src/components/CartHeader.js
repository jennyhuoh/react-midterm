import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useContext } from 'react';
import imgLogo from '../images/burger-logo.png';
import { getJSON } from '../api/index';
import { setPageContent } from '../actions/index';
import { StoreContext } from '../store/index';
import CartSummaryClicked from '../components/CartSummaryClicked';
import account from '../images/btn-Xaccount.png';


export default function Header() {
    const { dispatch } = useContext(StoreContext);
    const onClickBurger = () => {
        setPageContent(dispatch, getJSON("/burgerBuns"))
    }

    return (
        <header className="headerBgc">
            <div>
                <img className="logo" src={imgLogo} />
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
                        <Link to="/" className="headerTextLink">
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
                <span><img src={account} className="accountimg"/></span>
            </div>
        </header>
    );
}