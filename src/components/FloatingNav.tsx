import React from 'react';
import { FaBriefcase, FaCode, FaTools, FaFileDownload } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import resumePdf from '../assets/Abhishek_Resume.pdf';

const FloatingNav: React.FC = () => {
    const navItems = [
        { id: 'experience', icon: <FaBriefcase />, label: 'Experience', href: '#experience' },
        { id: 'projects', icon: <FaCode />, label: 'Projects', href: '#projects' },
        { id: 'skills', icon: <FaTools />, label: 'Skills', href: '#skills' },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: '2rem', // Moved to top
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem', // Increased gap
            padding: '1rem 3rem', // Increased padding
            borderRadius: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glassmorphism base
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
        }}
            className="floating-nav"
        >
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        padding: '0.5rem',
                        borderRadius: '0.8rem',
                    }}
                    className="nav-item"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2) translateY(-5px)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    <span style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{item.icon}</span>
                    <span className="nav-label" style={{ fontSize: '0.7rem', opacity: 0.8 }}>{item.label}</span>
                </a>
            ))}

            <div
                style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 0.5rem' }}
            />

            <a
                href={resumePdf}
                download="Abhishek_Hulage_Resume.pdf"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    padding: '0.5rem',
                    borderRadius: '0.8rem',
                    cursor: 'pointer'
                }}
                className="nav-item"
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2) translateY(-5px)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                }}
            >
                <span style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}><FaFileDownload /></span>
                <span className="nav-label" style={{ fontSize: '0.7rem', opacity: 0.8 }}>Resume</span>
            </a>

            <div style={{ marginLeft: '0.5rem' }}>
                <ThemeToggle />
            </div>

            <style>{`
                .floating-nav:hover {
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
                }
                
                @media (max-width: 600px) {
                    .nav-label {
                        display: none;
                    }
                    .floating-nav {
                        padding: 0.8rem 1rem;
                        top: 1.5rem; // Moved to top for mobile too
                        bottom: auto; // Reset bottom
                        gap: 0.8rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default FloatingNav;
