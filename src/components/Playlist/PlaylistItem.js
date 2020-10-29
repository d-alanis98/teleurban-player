import React from 'react';
//Styles
import './PlaylistItem.css';

const PlaylistItem = ({ 
    name, 
    index, 
    artist,
    thumbnail, 
    setItemToPlay,
    currentlyPlaying 
}) => {
    return (
        <li 
            id = { index }
            onClick = { setItemToPlay }
            className = { `playlist__item  ${currentlyPlaying ? 'playlist__item--active' : ''}` }
        >
            <img 
                alt = { name }
                src = { thumbnail } 
            />
            <div className='playlist__song-name'>
                { name }
                <small>{ artist }</small>

            </div>
        </li>
    );
}
export default PlaylistItem;