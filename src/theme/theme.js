import { useState, useEffect } from 'react';
//CONSTANTS
const LOCAL_STORAGE_KEY    = 'theme';
export const DARK_THEME    = 'dark';
export const LIGHT_THEME   = 'light';


//THEME HOOK
export let useTheme = () => {
    const [appliedTheme, setAppliedTheme] = useState(DARK_THEME);

    useEffect(() => {
        if(!localStorage.getItem(LOCAL_STORAGE_KEY))
            return;

        if(localStorage.getItem(LOCAL_STORAGE_KEY) === DARK_THEME) 
            setAppliedTheme(DARK_THEME);

        else setAppliedTheme(LIGHT_THEME);

    }, []);

    useEffect(() => {
        appliedTheme === DARK_THEME
            ? setDarkTheme()
            : setLightTheme();
    }, [appliedTheme]);

    const setDarkTheme = () => {
        document.body.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
    }
    
    const  setLightTheme = () => {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', LIGHT_THEME);
    }

    const toggleCurrentTheme = () => {
        setAppliedTheme(appliedTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    }

    return [
        appliedTheme,
        toggleCurrentTheme,
    ]
}