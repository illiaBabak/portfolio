import { JSX } from 'react';
import { About } from 'src/components/About';
import { Contact } from 'src/components/Contact';
import { Experience } from 'src/components/Experience';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Home } from 'src/components/Home';
import { Projects } from 'src/components/Projects';
import { Skills } from 'src/components/Skills';

export const App = (): JSX.Element => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased'>
      <Header />
      <main>
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
