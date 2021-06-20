import React from 'react';
import { Link } from 'react-router-dom';

export default function HamContent() {
    return(
        <div className="show-mobile hamBg">
            <div className="hamText"><Link to={'/'}>HOME</Link></div>
            <div className="hamText"><Link to={'/burger'}>BURGER</Link></div>
            <div className="hamText"><Link to={'/contact'}>CONTACT</Link></div>
        </div>
    );
}