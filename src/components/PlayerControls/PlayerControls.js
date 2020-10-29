import React from 'react';
//Components
import CircularIcon from '../Icons/CircularIcon';
import ControlsArea from '../PlayerLayout/GridAreas/ControlsArea/ControlsArea';
import PlayerSection from '../PlayerSection/PlayerSection';
//Styles
import './PlayerControls.css';
//Icons
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
//Constants
import { AUDIO } from '../../constants/mediaTypes';

const PlayerControls = ({ 
    mediaType,
    currentlyPlaying,
    toggleReproduction,
    goToNextPlaylistItem,
    goToPreviousPlaylistItem
}) => {
    if(mediaType === AUDIO)
        return (
            <ControlsArea>
                    <PlayerSection>
                        <div className='player-controls__container'>
                            <CircularIcon 
                                icon = { faStepBackward }
                                onClick = { goToPreviousPlaylistItem }
                            />
                            <CircularIcon 
                                icon = { currentlyPlaying ? faPause : faPlay }
                                onClick = { toggleReproduction }
                            />
                            <CircularIcon 
                                icon = { faStepForward }
                                onClick = { goToNextPlaylistItem }
                            />
                        </div>
                    </PlayerSection>
            </ControlsArea>
        )
    return null;
}

export default PlayerControls;