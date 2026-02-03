

import { ThemeProvider } from './context/ThemeContext';
import './styles/app-container.css';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FloatingNav from './components/FloatingNav';
function App() {
  return (
    <ThemeProvider>
      <div className="app-container">


        <main style={{ flex: 1, paddingBottom: '4rem' }}>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <FloatingNav />


      </div>
    </ThemeProvider>
  );
}

export default App;
