import React from 'react';
import { portfolioData } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
    const { personal } = portfolioData;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh', paddingTop: '2rem' }}>
            <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
            }}>Hi, my name is</p>
            <h1 className="text-gradient" style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                marginBottom: '0.5rem',
                lineHeight: 1.1,
                fontWeight: 800,
            }}>{personal.name}.</h1>
            <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                fontWeight: 700,
                lineHeight: 1.1
            }}>{personal.title}.</h2>

            <p style={{
                maxWidth: '650px',
                marginBottom: '3rem',
                fontSize: '1.125rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.8
            }}>
                {personal.summary}
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a
                    href={`mailto:${personal.email}`}
                    className="social-link glass-panel"
                    aria-label={`Email to ${personal.email}`}
                    title={personal.email}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', borderRadius: '8px' }}
                >
                    <FaEnvelope size={20} />
                    <span style={{ fontWeight: 500 }}>Contact Me</span>
                </a>
                <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link glass-panel"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', borderRadius: '8px' }}
                >
                    <FaLinkedin size={20} />
                    <span style={{ fontWeight: 500 }}>LinkedIn</span>
                </a>
                <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link glass-panel"
                    aria-label="GitHub Profile"
                    title="GitHub"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', borderRadius: '8px' }}
                >
                    <FaGithub size={20} />
                    <span style={{ fontWeight: 500 }}>GitHub</span>
                </a>
            </div>
        </div>
    );
};

export default Hero;
