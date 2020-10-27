import React, { useEffect, useState } from 'react';
//Components
import PlayerHeader from './components/PlayerHeader/PlayerHeader';
import PlayerLayout from './components/PlayerLayout/PlayerLayout';
import PlayerThumbnail from './components/PlayerThumbnail/PlayerThumbnail';
import ThemeProvider from './components/Theme/ThemeProvider/ThemeProvider';
//Constants
import { AUDIO } from './constants/mediaTypes';


const App = () => {
    //HOOKS
    //Fake
    const [loading, setLoading] = useState(false);
    //Trusted
    const [mediaType, setMediaType] = useState(AUDIO);

    useEffect(() => {
        //Peticion de recursos
    }, [mediaType])

    return (
        <ThemeProvider>
            <PlayerHeader 
                mediaType = { mediaType }
                setMediaType = { setMediaType }
            />
            <PlayerLayout
                loading  = { loading }
            >
                <PlayerThumbnail />

            </PlayerLayout>
        </ThemeProvider>
    );
}

export default App;