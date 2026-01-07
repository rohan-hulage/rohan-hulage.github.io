
import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {portfolioData.education.map((edu, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        paddingBottom: '1rem',
                        borderBottom: index !== portfolioData.education.length - 1 ? '1px solid var(--border-color)' : 'none'
                    }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{edu.school}</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>{edu.degree}</p>
                            {edu.grade && <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginTop: '0.3rem' }}>{edu.grade}</p>}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', paddingLeft: '1rem' }}>{edu.period}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
