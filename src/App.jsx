import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Mobile from './sections/Mobile/Mobile';
import About from './common/About';
import Contact from './contact/Contact';
function App() {
  return (
    <>
    <Mobile/><br/>
      <Hero />
      <About/>
      <Projects />
      <Skills />
      <Contact/>
      
      <Footer />

    </>
  );
}

export default App;
