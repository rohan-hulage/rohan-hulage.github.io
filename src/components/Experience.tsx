
import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {portfolioData.experience.map((job, index) => (
                    <div key={index} style={{
                        padding: '1.5rem',
                        borderRadius: '8px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid transparent',
                        transition: 'border-color 0.3s'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{job.role}</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{job.period}</span>
                        </div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>{job.company}</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            {job.description.map((desc, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
