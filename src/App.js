import './App.css';
import Header from './components/Header/Header';
import Ellipse from './components/Shapes/Ellipse/Ellipse';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import LSWT from './components/LSWT/LSWT'; 
import { useTranslation } from 'react-i18next'; 

function App() {
  const { t } = useTranslation(); 

  return (
    <div className="App">
      <Header />
      <LSWT /> 
      
      <main id="about" className="about"> 
        <Ellipse />
        <About />
      </main>

      <section className="info-section">
        <h2 className="info-title">{t('infoTitle')} </h2> 
        <p className="info-text">{t('infoText')}</p>
      </section>
      <div className="line"></div>
      
      <section className='skills-section' id="skills">
        <h2 className="info-project">{t('hardSkills')}</h2> 
        <Skills />
      </section>
      <div className="line"></div>
      
      <h2 className="info-project">{t('projects')}</h2> 
      <div id="projects" className="project-section">
        <Project />
        <div id="contact" className="line"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
