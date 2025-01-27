import { JSX, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About } from 'src/components/About';
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
    </BrowserRouter>
  );
};
