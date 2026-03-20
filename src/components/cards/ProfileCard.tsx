import React from 'react';
import GlassCard from '../GlassCard';
import { portfolioData } from '../../data/content';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
// @ts-ignore
import DeveloperResume from '../../assets/Abhishek_Resume.pdf';

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
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { icon: <FaGithub size={18} />, href: personal.github },
            { icon: <FaLinkedin size={18} />, href: personal.linkedin },
            { icon: <FaEnvelope size={18} />, href: `mailto:${personal.email}` },
          ].map((social, i) => (
            social.href && (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-smooth)' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-accent)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '' }}
              >
                {social.icon}
              </a>
            )
          ))}
        </div>
        
        <a 
          href={DeveloperResume} 
          download="Abhishek_Hulage_Resume.pdf"
          style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: 'var(--text-accent)', color: 'var(--bg-dark)', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600, transition: 'var(--transition-smooth)', textDecoration: 'none' }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 255, 204, 0.3)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <FaFileDownload size={16} /> Resume
        </a>
      </div>
    </GlassCard>
  );
};

export default ProfileCard;
