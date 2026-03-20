import React from 'react';
import { motion } from 'framer-motion';

// specific card components (we'll implement them below or inside another file)
import ProfileCard from './cards/ProfileCard';
import TechCard from './cards/TechCard';
import ExperienceCard from './cards/ExperienceCard';
import ProjectsCard from './cards/ProjectsCard';
import LocationCard from './cards/LocationCard';
import GithubCard from './cards/GithubCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const BentoGrid: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '220px',
          gap: '1.5rem',
          width: '100%'
        }}
      >
        <motion.div variants={itemVariants} style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
          <ProfileCard />
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
          <LocationCard />
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ gridColumn: 'span 1', gridRow: 'span 2' }}>
          <TechCard />
        </motion.div>

        <motion.div variants={itemVariants} style={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
          <GithubCard />
        </motion.div>

        <motion.div variants={itemVariants} style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
          <ExperienceCard />
        </motion.div>

        <motion.div variants={itemVariants} style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
          <ProjectsCard />
        </motion.div>

        <style>{`
          @media (max-width: 1024px) {
            .bento-grid {
              gridTemplateColumns: 'repeat(2, 1fr)' !important;
            }
            .bento-grid > div {
              gridColumn: 'span 2' !important;
            }
          }
          @media (max-width: 640px) {
            .bento-grid {
              gridTemplateColumns: '1fr' !important;
              gridAutoRows: 'minmax(200px, auto)' !important;
            }
            .bento-grid > div {
              gridColumn: 'span 1' !important;
              gridRow: 'auto' !important;
            }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default BentoGrid;
