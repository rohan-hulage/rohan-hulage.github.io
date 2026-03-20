import React from 'react';
import GlassCard from '../GlassCard';
import { portfolioData } from '../../data/content';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ProfileCard: React.FC = () => {
  const { personal } = portfolioData;
  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ padding: '0.25rem 0.75rem', background: 'rgba(0, 255, 204, 0.1)', border: '1px solid rgba(0, 255, 204, 0.3)', borderRadius: '2rem', fontSize: '0.8rem', color: 'var(--text-accent)' }}>
            Available for Hiring
          </div>
        </div>
        
        <h1 style={{ marginTop: '1.5rem', fontSize: '2.5rem', lineHeight: '1.1' }}>
          Hi, I'm <br />
          <span className="text-gradient">{personal.name}</span>
        </h1>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          {personal.title}
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        {[
          { icon: <FaGithub size={20} />, href: personal.github },
          { icon: <FaLinkedin size={20} />, href: personal.linkedin },
          { icon: <FaEnvelope size={20} />, href: `mailto:${personal.email}` },
        ].map((social, i) => (
          social.href && (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noreferrer"
              style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-smooth)' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-accent)' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '' }}
            >
              {social.icon}
            </a>
          )
        ))}
      </div>
    </GlassCard>
  );
};

export default ProfileCard;
