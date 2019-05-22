import React from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css'
import DrawerToggleButton from '../sidedrawer/DrawerToggleButton'

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar-navigation'>
            <div className='toolbar-toogle-buttom'>
                <DrawerToggleButton click={props.drawerClickhandler}/>
            </div>       
            <div className='toolbar-logo'><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className='toolbar-navigationItems'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Leben">Leben</Link></li>
                    <li><Link to="/Projekte">Bands</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;