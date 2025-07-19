import { Toaster } from 'react-hot-toast';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </>
  );
}

export default App;
