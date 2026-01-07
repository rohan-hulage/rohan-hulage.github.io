
import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/content';

const Skills: React.FC = () => {
    const { skills } = portfolioData;

    const SkillCategory: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
        <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {items.map((skill, index) => (
                    <span key={index} style={{
                        padding: '0.4rem 0.8rem',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        border: '1px solid transparent',
                        cursor: 'default',
                        transition: 'all 0.2s'
                    }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <Section id="skills" title="Skills">
            <SkillCategory title="Technical Skills" items={skills.technical} />
            <SkillCategory title="Concepts & Architecture" items={skills.concepts} />
        </Section>
    );
};

export default Skills;
