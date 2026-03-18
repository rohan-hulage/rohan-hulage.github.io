import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="glass-panel" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>{project.title}</h3>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.7, transition: 'opacity 0.2s', padding: '0.5rem' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>
                        <p style={{ marginBottom: '1.5rem', flex: 1, fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} className="badge">
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
