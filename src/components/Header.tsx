
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    return (
        <header style={{
            padding: '2rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '2rem'
        }}>
            <div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Abhishek Hulage</h1>
                <p style={{ margin: 0, opacity: 0.8 }}>Software Engineer</p>
            </div>
            <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <a href="#experience" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Experience</a>
                <a href="#projects" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects</a>
                <a href="#skills" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Skills</a>
                <ThemeToggle />
            </nav>
        </header>
    );
};

export default Header;
