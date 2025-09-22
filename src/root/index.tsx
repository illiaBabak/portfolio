import { JSX, Suspense, lazy, useEffect } from 'react';
import { Header } from 'src/components/Header';
import { Home } from 'src/components/Home';
import { getCurrentTheme } from 'src/utils/getCurrentTheme';

const About = lazy(() =>
  import('src/components/About').then((m) => ({ default: m.About }))
);
const Projects = lazy(() =>
  import('src/components/Projects').then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import('src/components/Contact').then((m) => ({ default: m.Contact }))
);

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
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
};
