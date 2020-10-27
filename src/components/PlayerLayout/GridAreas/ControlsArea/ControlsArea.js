import React from 'react';
//Style
import './ControlsArea.css';

const ControlsArea = ({ children }) => (
    <div
        className = 'controls_area__grid-area'
    >
        { children }
    </div>
);

export default ControlsArea;