import { JSX, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'src/components/Header';
import { getCurrentTheme } from 'src/utils/getCurrentTheme';

export const App = (): JSX.Element => {
  // set theme
  useEffect(() => {
    document.documentElement.classList.add(getCurrentTheme());
  });

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
