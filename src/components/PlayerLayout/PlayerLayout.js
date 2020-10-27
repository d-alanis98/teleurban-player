import React from 'react';
//Style
import './PlayerLayout.css';

const PlayerLayout = ({ loading, children }) =>
    !loading 
        ? (
            <div
                className = 'player_layout__container'
            >
                { children }
            </div>
        )
        : <h4>Cargando...</h4>

export default PlayerLayout;

