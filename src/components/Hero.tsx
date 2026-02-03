
import React from 'react';
import { portfolioData } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
    const { personal } = portfolioData;
    return (
        <section>
            <p style={{
                fontSize: '1.2rem',
                color: 'var(--accent-color)',
                marginBottom: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em'
            }}>Hi, I am</p>
            <h1 style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                background: 'linear-gradient(45deg, var(--text-primary) 30%, var(--accent-color) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>{personal.name}</h1>
            <h2 style={{
                fontSize: '2rem',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
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
                    className="social-link"
                    aria-label={`Email to ${personal.email}`}
                    title={personal.email}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <FaEnvelope size={20} />
                    <span>{personal.email}</span>
                </a>
                <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                </a>
                <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub Profile"
                    title="GitHub"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
