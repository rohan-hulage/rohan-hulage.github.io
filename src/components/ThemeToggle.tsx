import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="social-link"
            style={{
                width: '36px',
                height: '36px',
                padding: 0,
                fontSize: '1rem',
                border: 'none',
                background: 'transparent'
            }}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
