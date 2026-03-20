import React from 'react';
import GlassCard from '../GlassCard';
import { portfolioData } from '../../data/content';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectsCard: React.FC = () => {
  const topProjects = portfolioData.projects.slice(0, 2);

  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Featured Work</h2>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Scroll to view</span>
      </div>

      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem', flex: 1, scrollbarWidth: 'none' }}>
        {topProjects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            style={{ 
              minWidth: '280px', 
              background: 'rgba(0,0,0,0.3)', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {project.description}
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--bg-dark)', background: 'var(--text-accent)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontWeight: 600 }}>
                    <FaExternalLinkAlt size={10} /> View Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectsCard;
