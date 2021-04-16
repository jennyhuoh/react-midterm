import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import imgLogo from '../images/burger-logo.png';
//import Home from '../pages/Home'

export default function Header() {
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
                        <Link to="/" className="headerTextLink">
                            <div className="headerTextBurger">
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
        </header>
    );
}