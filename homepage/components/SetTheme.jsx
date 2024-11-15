// noinspection JSValidateTypes

'use client';
import {useState, useEffect} from 'react';

let SetTheme = ({children}) => {
    const [theme, setTheme] = useState(global.window?.__theme || 'light');

    const isDark = theme === 'dark';

    const toggleTheme = () => {
        global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        global.window.__onThemeChange = setTheme
    }, []);

    return (
        <div>
            {children}
            <button onClick={toggleTheme}>{isDark ? <MoonIcon className="h-5 w-5"/>
                : <SunIcon className="h-5 w-5"/>
            }</button>

        </div>
    );
};

export default SetTheme;


function MoonIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
    );
}

function SunIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
    );
}
