import React from 'react';

import './SidebarToggle.css';

const sidebarToggleButton = props => (
    <button className="toggleButton" onClick={props.click}>
        <div className="toggleButton-line"></div>
        <div className="toggleButton-line"></div>
        <div className="toggleButton-line"></div>
    </button>
);

export default sidebarToggleButton;