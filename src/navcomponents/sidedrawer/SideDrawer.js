import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

const Sidedrawer = props => {
    let drawerClasses = "side-drawer";
    if(props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Leben">Leben</Link></li>
                <li><Link to="/Projekte">Projekte</Link></li>
            </ul>
        </nav>
    )
}; 

export default Sidedrawer;