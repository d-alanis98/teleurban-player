import React from 'react';


const VideoPlayer = ({ videoSource }) => {
    return (
        <div
            className = 'player_renderer__container'
        >
            <video
                controls
                autoPlay
                src = { videoSource }
            >
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoPlayer;