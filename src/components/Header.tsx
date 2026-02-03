
import React from 'react';


const Header: React.FC = () => {
    return (
        <header style={{
            padding: '2rem 0',
            display: 'flex',
            justifyContent: 'center', // Centered since nav is gone
            alignItems: 'center',
            marginBottom: '2rem'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Abhishek Hulage</h1>
                <p style={{ margin: 0, opacity: 0.8 }}>Software Engineer</p>
            </div>
        </header>
    );
};

export default Header;
