import { Toaster } from 'react-hot-toast';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
      <Projects />
      <Skills />
      <Contact />
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
      {/* You can keep this here to place it wherever you want */}
    </>
  );
}

export default App;
