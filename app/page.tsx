import About from './components/About';
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
    </>
  );
}
