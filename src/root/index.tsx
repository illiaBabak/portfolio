import { JSX, useEffect } from 'react';
import { About } from 'src/components/About';
import { Contact } from 'src/components/Contact';
import { Header } from 'src/components/Header';
import { Home } from 'src/components/Home';
import { Projects } from 'src/components/Projects';
import { getCurrentTheme } from 'src/utils/getCurrentTheme';

export const App = (): JSX.Element => {
  // set theme
  useEffect(() => {
    const img = new Image();
    img.src = '/dark-home.jpg';

    document.documentElement.classList.add(getCurrentTheme());
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
