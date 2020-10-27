import React from 'react';
//Components
import ThemeToggler from '../Theme/ThemeToggler/ThemeToggler';
//Hooks
import { useTheme } from '../../theme/theme';
//Styles
import './PlayerHeader.css';
//Constants
import { AUDIO, VIDEO } from '../../constants/mediaTypes';


const PlayerHeader = ({ mediaType, setMediaType }) => {
    const [currentTheme, toggleCurrentTheme] = useTheme();

    const handleMediaTypeChange = event => {
        setMediaType(event.target.value);
    }

    return (
        <div className = 'player__header'>
            <div>
                <select
                    value = { mediaType }
                    onChange = { handleMediaTypeChange }
                >
                    <option value = { VIDEO }> Video </option>
                    <option value = { AUDIO }> Audio </option>
                </select>
            </div>
            <ThemeToggler 
                currentTheme = { currentTheme }
                positionRelative
                toggleCurrentTheme = { toggleCurrentTheme }
            />
        </div>
    );
}

export default PlayerHeader;