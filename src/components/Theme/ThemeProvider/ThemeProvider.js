import React from 'react';
//Components
import ThemeToggler from '../ThemeToggler/ThemeToggler';
//Hooks
import { useTheme } from '../../../theme/theme';
//Styles
import './ThemeProvider.css';

const ThemeProvider = ({ 
    children, 
    togglerPosition,
    withThemeToggler, 
    togglerClassName
}) => {
    const [currentTheme, toggleCurrentTheme] = useTheme();

    return (
        <div
            className = 'theme-provider__container'
        >
            {
                withThemeToggler &&  
                    <ThemeToggler 
                        className = { togglerClassName || `theme_toggler--top-${togglerPosition || 'right'}` }
                        currentTheme = { currentTheme }
                        toggleCurrentTheme = { toggleCurrentTheme }
                    />
            }
            { children }
        </div>
    )
}

export default ThemeProvider;