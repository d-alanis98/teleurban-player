import React from 'react';
//Components
import Loader from '../Loader/Loader';
//Style
import './PlayerLayout.css';

const PlayerLayout = ({ loading, children }) =>(
    <div
        className = 'player_layout__container'
    >
        { 
            !loading
                ? children 
                : <Loader />
        }
    </div>
)

export default PlayerLayout;

