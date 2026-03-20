import React from 'react';
import GlassCard from '../GlassCard';
import { portfolioData } from '../../data/content';

const ExperienceCard: React.FC = () => {
  const latestExp = portfolioData.experience[0]; // Just showing the latest for the bento box

  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
            💼
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Latest Role</h3>
            <h2 style={{ fontSize: '1.2rem' }}>{latestExp.role}</h2>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-accent)', background: 'rgba(0,255,204,0.1)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
            {latestExp.period}
          </span>
        </div>
      </div>
      
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', alignSelf: 'flex-start', borderLeft: '2px solid var(--border-highlight)', paddingLeft: '1rem', marginLeft: '0.5rem' }}>
        {latestExp.company}
      </p>
      
      {/* We take just the first bullet to keep bento clean */}
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
        {latestExp.description[0]}
      </div>
    </GlassCard>
  );
};

export default ExperienceCard;
