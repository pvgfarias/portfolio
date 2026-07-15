import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
