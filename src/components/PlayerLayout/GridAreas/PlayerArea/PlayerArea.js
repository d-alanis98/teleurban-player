import React from 'react';
//Style
import './PlayerArea.css';

const PlayerArea = ({ children }) => (
    <div
        className = 'player_area__grid-area'
    >
        { children }
    </div>
);

export default PlayerArea;