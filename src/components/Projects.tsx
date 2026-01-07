
import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {portfolioData.projects.map((project, index) => (
                    <div key={index} style={{
                        padding: '1.5rem',
                        borderRadius: '8px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                        <p style={{ marginBottom: '1.5rem', flex: 1, fontSize: '1rem' }}>{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--accent-color)',
                                    border: '1px solid var(--accent-color)',
                                    padding: '2px 8px',
                                    borderRadius: '12px'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
