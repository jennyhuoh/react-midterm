import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';

export default function HamContent({isOnTouch}) {
    let hamContentClose = "show-mobile hamBg";
    let hamContentOpen = "hamBg hamContentOpen"; 
 
    return(
            <div className= {`${isOnTouch?hamContentClose:hamContentOpen}`}>
                <div className="hamText"><Link to={'/'}>HOME</Link></div>
                <div className="hamText"><Link to={'/burger'}>BURGER</Link></div>
                <div className="hamText"><Link to={'/contact'}>CONTACT</Link></div>
            </div>
        
    );
}