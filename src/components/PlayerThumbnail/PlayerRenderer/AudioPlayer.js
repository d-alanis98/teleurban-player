import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ currentItem, currentlyPlaying, goToNextPlaylistItem }) => {
    const audioElement = useRef();

    useEffect(() => {
        currentlyPlaying 
            ? audioElement.current.play()
            : audioElement.current.pause();
    }, [currentItem, currentlyPlaying]);


    return (
        <div className='player_renderer__container'>
            <img src={currentItem ? currentItem.thumbnail : ''} alt={ currentItem ? currentItem.name : ''} />
            <audio
                ref = { audioElement }
                src = { currentItem.uri }
                hidden = { true }
                onEnded = { () => goToNextPlaylistItem() }
            ></audio>
        </div>
    );
}

export default AudioPlayer;