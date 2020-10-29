import React, { useEffect, useState } from 'react';
//Components
import Playlist from './components/Playlist/Playlist';
import PlayerHeader from './components/PlayerHeader/PlayerHeader';
import PlayerLayout from './components/PlayerLayout/PlayerLayout';
import ThemeProvider from './components/Theme/ThemeProvider/ThemeProvider';
import PlayerControls from './components/PlayerControls/PlayerControls';
import PlayerThumbnail from './components/PlayerThumbnail/PlayerThumbnail';
//Constants
import { AUDIO } from './constants/mediaTypes';
//Helpers
import Request from './helpers/Request';


const App = () => {
    //HOOKS
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [mediaType, setMediaType] = useState(AUDIO);
    const [currentItem, setCurrentItem] = useState('');
    const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);


    useEffect(() => {
        /**
         * Function to fetch the playlist
         */
        const getPlaylist = () => {
            Request.makeRequest({
                type: mediaType
            })
                .then(_playlist => {
                    setPlaylist(_playlist);
                    setLoading(false);
                    setError(null);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                })
        }
        //We get the playlist
        setLoading(true);
        getPlaylist();
        //We set the media type as a data attribute (for CSS styles)
        document.body.setAttribute('media-type', mediaType);
    }, [mediaType]);


    const toggleReproduction = () => {
        setCurrentlyPlaying(!currentlyPlaying);
    }

    const goToNextPlaylistItem = () => {
        goToItem(currentItemIndex + 1);
    }

    const goToPreviousPlaylistItem = () => {
        goToItem(currentItemIndex - 1);
    }

    const goToItem = index => {
        let newCurrentItemIndex = index;
        if(index < 0)
            newCurrentItemIndex = playlist.length - 1;
        if(index >= playlist.length)
            newCurrentItemIndex = 0;
        setCurrentItem(playlist[newCurrentItemIndex]);
        setCurrentItemIndex(newCurrentItemIndex);
    }

    useEffect(() => {
        console.log({ currentItem, currentItemIndex })
    }, [currentItem, currentItemIndex])

    if(error)
        return <h5>ERROR</h5>
    return (
        <ThemeProvider>
            <PlayerHeader 
                mediaType = { mediaType }
                setMediaType = { setMediaType }
            />
            <PlayerLayout
                loading  = { loading }
            >
                <PlayerThumbnail 
                    currentItem = { currentItem }
                />
                <PlayerControls 
                    mediaType = { mediaType }
                    currentlyPlaying = { currentlyPlaying }
                    toggleReproduction = { toggleReproduction }
                    goToNextPlaylistItem = { goToNextPlaylistItem }
                    goToPreviousPlaylistItem = { goToPreviousPlaylistItem }
                />
                <Playlist 
                    playlist = { playlist }
                    setCurrentItem = { setCurrentItem }
                    currentItemIndex = { currentItemIndex }
                    setCurrentItemIndex = { setCurrentItemIndex }
                />
            </PlayerLayout>
        </ThemeProvider>
    );
}

export default App;