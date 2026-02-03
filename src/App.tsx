

import { ThemeProvider } from './context/ThemeContext';


import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FloatingNav from './components/FloatingNav';
import SectionWrapper from './components/SectionWrapper';
function App() {
  return (
    <ThemeProvider>
      <div style={{ paddingTop: '100px' }}>


        <main style={{ flex: 1, paddingBottom: '4rem' }}>
          <SectionWrapper id="hero" delay={100}><Hero /></SectionWrapper>
          <SectionWrapper id="experience" delay={200}><Experience /></SectionWrapper>
          <SectionWrapper id="education" delay={200}><Education /></SectionWrapper>
          <SectionWrapper id="skills" delay={200}><Skills /></SectionWrapper>
          <SectionWrapper id="projects" delay={200}><Projects /></SectionWrapper>
        </main>
        <FloatingNav />


      </div>
    </ThemeProvider>
  );
}

export default App;
