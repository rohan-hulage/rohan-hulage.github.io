
import React from 'react';
import { portfolioData } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
    const { personal } = portfolioData;
    return (
        <section style={{ padding: '2rem 0 4rem 0' }}>
            <p style={{
                fontSize: '1.2rem',
                color: 'var(--accent-color)',
                marginBottom: '0.5rem',
                fontWeight: 600
            }}>Hi, I am</p>
            <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
            }}>{personal.name}</h1>
            <h2 style={{
                fontSize: '1.8rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                fontWeight: 400
            }}>{personal.title}</h2>

            <p style={{
                maxWidth: '600px',
                marginBottom: '2rem',
                fontSize: '1.1rem',
                lineHeight: 1.8
            }}>
                {personal.summary}
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a
                    href={`mailto:${personal.email}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: '1.1rem'
                    }}
                >
                    <FaEnvelope size={20} />
                    <span>{personal.email}</span>
                </a>
                <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#0077b5', // LinkedIn brand color
                        textDecoration: 'none',
                        fontSize: '1.1rem'
                    }}
                >
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                </a>
                <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: '1.1rem'
                    }}
                >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
