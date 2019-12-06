import React from 'react';

import './Sidebar.css';

const sidebar = props => {
    let sideClasses = 'sidebar';
    if(props.show) {
        sideClasses = 'sidebar open';
    }

    return (
        <nav className={sideClasses}>
            <ul>
                <li><a href="/">TEST 1</a></li>
                <li><a href="/">TEST 2</a></li>
            </ul>
        </nav>
    );
};

export default sidebar;