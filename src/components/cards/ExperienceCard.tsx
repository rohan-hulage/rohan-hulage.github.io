import React from 'react';
import GlassCard from '../GlassCard';
import { portfolioData } from '../../data/content';

const ExperienceCard: React.FC = () => {
  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Experience</h2>
        <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
          💼
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', overflowY: 'auto', paddingRight: '0.5rem', scrollbarWidth: 'none', flex: 1 }}>
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border-highlight)' }}>
            <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--text-accent)' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{exp.company}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', background: 'rgba(0,255,204,0.1)', padding: '0.1rem 0.5rem', borderRadius: '1rem' }}>{exp.period}</span>
            </div>
            {/* Show short description only for the latest role to save space, or none to keep it super clean. Let's show the first point for all of them! */}
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
              {exp.description[0]}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ExperienceCard;
