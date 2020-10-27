import React from 'react';
//Style
import './PlaylistArea.css';

const PlaylistArea = ({ children }) => (
    <div
        className = 'playlist_area__grid-area'
    >
        { children }
    </div>
);

export default PlaylistArea;