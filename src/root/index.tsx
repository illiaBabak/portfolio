import { JSX, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About } from 'src/components/About';
import { Contact } from 'src/components/Contact';
import { Header } from 'src/components/Header';
import { Home } from 'src/components/Home';
import { getCurrentTheme } from 'src/utils/getCurrentTheme';

export const App = (): JSX.Element => {
  // set theme
  useEffect(() => {
    document.documentElement.classList.add(getCurrentTheme());
  });

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Contact />
    </BrowserRouter>
  );
};
