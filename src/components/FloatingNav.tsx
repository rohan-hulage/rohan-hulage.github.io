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
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0.75rem 2rem',
            borderRadius: '2rem',
            zIndex: 1000,
        }}
            className="glass-panel floating-nav"
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
                        e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
                        e.currentTarget.style.color = 'var(--accent-hover)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                >
                    <span style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{item.icon}</span>
                    <span className="nav-label" style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 500 }}>{item.label}</span>
                </a>
            ))}

            <div
                style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 0.2rem' }}
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
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
                    e.currentTarget.style.color = 'var(--accent-hover)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                }}
            >
                <span style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}><FaFileDownload /></span>
                <span className="nav-label" style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 500 }}>Resume</span>
            </a>

            <div style={{ marginLeft: '0.5rem' }}>
                <ThemeToggle />
            </div>

            <style>{`
                @media (max-width: 600px) {
                    .nav-label {
                        display: none;
                    }
                    .floating-nav {
                        padding: 0.6rem 1rem !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default FloatingNav;
