import React from 'react';
//Components
import PlayerArea from '../PlayerLayout/GridAreas/PlayerArea/PlayerArea';
import PlayerSection from '../PlayerSection/PlayerSection';
import PlayerRenderer from './PlayerRenderer/PlayerRenderer';
//Styles
import './PlayerThumbnail.css';

const PlayerThumbnail = ({
    mediaType,
    currentItem,
    currentlyPlaying,
    goToNextPlaylistItem
}) => (
    <PlayerArea>
        <PlayerSection>
            <PlayerRenderer 
                mediaType = { mediaType }
                currentItem = { currentItem }
                currentlyPlaying = { currentlyPlaying }
                goToNextPlaylistItem = { goToNextPlaylistItem }
            />
        </PlayerSection>
    </PlayerArea>
);

export default PlayerThumbnail;