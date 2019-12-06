import React from 'react';

import SidebarToggle from '../Sidebar/SidebarToggle';
import './Topbar.css';

const topbar = props => (
    <header className="topbar">
        <nav className="topbar-nav">
            <div className="topbar-toggle-button">
                <SidebarToggle click={props.sidebarToggler}/>
            </div>
            <div className="topbar-logo">NOTES</div>

            <div className="spacer"></div>

            <div className="topbar-items">
                <ul>
                    <li><a href="/">TEST 1</a></li>
                    <li><a href="/">TEST 2</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default topbar;