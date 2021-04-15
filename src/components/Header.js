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
                        <h1 className="headerText headerTextHome">HOME</h1>
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/" className="headerTextLink">
                            <h1 className="headerText headerTextBurger">BURGER</h1>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/" className="headerTextLink">
                            <h1 className="headerText headerTextContact">CONTACT</h1>
                        </Link>
                    </Menu.Item> 
               
                
                
            </Menu>
            </div>
        </header>
    );
}