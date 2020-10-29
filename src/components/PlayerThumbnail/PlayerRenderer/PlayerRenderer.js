import React from 'react';
//Components
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';
//Styles
import './PlayerRenderer.css';
//Constants
import { AUDIO } from '../../../constants/mediaTypes';

const PlayerRenderer = ({ 
    mediaType,
    currentItem,
    currentlyPlaying,
    goToNextPlaylistItem
}) => {
    if(!currentItem)
        return null;
    if(mediaType === AUDIO)
        return <AudioPlayer 
            currentItem = { currentItem }
            currentlyPlaying = { currentlyPlaying }
            goToNextPlaylistItem = { goToNextPlaylistItem }
        />
    return <VideoPlayer 
        videoSource = { currentItem.uri }
    />
    
}

export default PlayerRenderer;