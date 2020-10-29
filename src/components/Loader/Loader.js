import React, { Fragment } from 'react';
//Components
import Skeleton from './Skeleton/Skeleton';
import ControlsArea from '../PlayerLayout/GridAreas/ControlsArea/ControlsArea';
import PlayerArea from '../PlayerLayout/GridAreas/PlayerArea/PlayerArea';
import PlaylistArea from '../PlayerLayout/GridAreas/PlaylistArea/PlaylistArea';

const Loader = () => {
    return (
        <Fragment>
            <PlayerArea>
                <Skeleton />
            </PlayerArea>
            <ControlsArea>
                <Skeleton />
            </ControlsArea>
            <PlaylistArea>
                <ul>
                    <Skeleton 
                        count = { Math.floor(document.body.clientHeight / 91) }
                    />
                </ul>
            </PlaylistArea>
        </Fragment>
    )
}

export default Loader;