import React from 'react';
import { DARK_THEME } from '../../../theme/theme';
//Styles
import './ThemeToggler.css';

const ThemeToggler = ({ 
    currentTheme, 
    toggleCurrentTheme 
}) => (
    <div 
        className = 'theme_toggler__container'
    >
        <input 
            id = 'theme_toggler'
            type = 'checkbox' 
            checked = { currentTheme === DARK_THEME }
            onChange = { toggleCurrentTheme }
            className = 'theme_toggler__checkbox'
        />
        <label 
            htmlFor = 'theme_toggler'
            className = 'theme_toggler__label' 
        >
            <div className = 'theme_toggler__ball'></div>
        </label>
    </div>
);

export default ThemeToggler;