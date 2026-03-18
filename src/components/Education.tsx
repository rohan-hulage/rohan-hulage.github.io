import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    left: '1.5rem',
                    top: '2rem',
                    bottom: '2rem',
                    width: '2px',
                    background: 'var(--border-color)',
                    zIndex: 0
                }} className="timeline-line"></div>

                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="glass-panel" style={{
                        padding: '2rem',
                        position: 'relative',
                        zIndex: 1,
                        marginLeft: '3rem',
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: '-2.15rem',
                            top: '2.5rem',
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            border: '2px solid var(--text-primary)',
                        }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '0.5rem', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>{edu.school}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{edu.degree}</h4>
                                {edu.grade && <p style={{ fontSize: '1rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>{edu.grade}</p>}
                            </div>
                            <span className="badge" style={{ background: 'transparent' }}>{edu.period}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
