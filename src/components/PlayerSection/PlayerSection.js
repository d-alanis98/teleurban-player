import React from 'react';
//Styles
import './PlayerSection.css';


const PlayerSection = ({ children }) => {
    return (
        <div
            className = 'player-section__container'
        >
            { children }
        </div>
    );
}

export default PlayerSection;