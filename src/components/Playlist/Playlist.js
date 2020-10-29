import React, { useEffect } from 'react';
//Components
import PlaylistItem from './PlaylistItem';
import PlaylistArea from '../PlayerLayout/GridAreas/PlaylistArea/PlaylistArea';
//Styles
import './Playlist.css';

const Playlist = ({ 
    playlist, 
    setCurrentItem,
    currentItemIndex,
    setCurrentItemIndex
}) => {

    useEffect(() => {
        setCurrentItem(playlist.length > 0 ? playlist[0] : null);
        setCurrentItemIndex(playlist.length > 0 ? 0 : null);
    }, [playlist]);

    const setItemToPlay = ({ currentTarget }) => {
        const { id } = currentTarget;
        let itemIndex = Number(id);
        setCurrentItem(playlist[itemIndex] ? playlist[itemIndex] : null);
        setCurrentItemIndex(playlist[itemIndex] ? itemIndex : null);
    }

    return (
        <PlaylistArea>
            <ul>
                {
                    playlist.map(({ id, name, thumbnail }, index) => (
                        <PlaylistItem 
                            key = { id }
                            name = { name }
                            index = { index }
                            thumbnail = { thumbnail}
                            setItemToPlay = { setItemToPlay }
                            currentlyPlaying = { currentItemIndex === index }
                        />
                    ))
                }
            </ul>
        </PlaylistArea>
    );
}

export default Playlist;