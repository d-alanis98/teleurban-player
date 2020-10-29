import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Styles
import './CircularIcon.css';

const CircularIcon = ({ id, name, icon, onClick, ...extraProps }) => (
    <div 
        id = { id }
        name = { name }
        onClick = { onClick }
        className = 'circular-icon__container'
        { ...extraProps }
    >
        <FontAwesomeIcon 
            icon = { icon }
            className = 'circular-icon__icon'
        />
    </div>
);

export default CircularIcon;