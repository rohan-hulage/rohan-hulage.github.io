import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';

const Skills: React.FC = () => {
    const { skills } = portfolioData;

    const SkillCategory: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
        <div className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>{title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {items.map((skill, index) => (
                    <span key={index} style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--bg-secondary)',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        cursor: 'default',
                        transition: 'all 0.3s ease',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--text-secondary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <Section id="skills" title="Skills">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <SkillCategory title="Technical Skills" items={skills.technical} />
                <SkillCategory title="Concepts & Architecture" items={skills.concepts} />
            </div>
        </Section>
    );
};

export default Skills;
