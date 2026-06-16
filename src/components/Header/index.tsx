import { JSX, useEffect, useState } from 'react';
import { navItems, personalInfo } from 'src/data/portfolio';

const getNavLinkClass = (isActive: boolean) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-950/5 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ${
    isActive ? 'bg-violet-600 text-white' : 'text-slate-600'
  }`;

const getMobileNavLinkClass = (isActive: boolean) =>
  `rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 hover:bg-slate-950/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ${
    isActive ? 'bg-violet-600 text-white' : 'text-slate-700'
  }`;

export const Header = (): JSX.Element => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpenedMenu(false);
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpenedMenu(false);

  return (
    <header className='fixed top-4 right-0 left-0 z-50 px-4'>
      <nav
        className='mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-slate-900/10 bg-white/80 px-4 shadow-2xl shadow-slate-950/10 backdrop-blur-xl sm:px-5'
        aria-label='Primary navigation'
      >
        <a
          href='#home'
          className='group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500'
          onClick={closeMenu}
        >
          <span className='flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/10 bg-white text-sm font-black text-slate-950 shadow-sm shadow-slate-950/5 transition duration-300 group-hover:border-violet-400/50 group-hover:text-violet-700'>
            IB
          </span>
          <span className='hidden flex-col leading-none sm:flex'>
            <span className='font-bold text-slate-950'>
              {personalInfo.name}
            </span>
            <span className='mt-1 text-xs text-slate-500'>
              Developer portfolio
            </span>
          </span>
        </a>

        <div className='hidden items-center gap-1 lg:flex'>
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              className={getNavLinkClass(activeSection === item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <button
            className='relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-slate-950/5 text-slate-700 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 lg:hidden'
            type='button'
            aria-label={isOpenedMenu ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpenedMenu}
            aria-controls='mobile-navigation'
            onClick={() => setIsOpenedMenu((prev) => !prev)}
          >
            <span className='sr-only'>
              {isOpenedMenu ? 'Close menu' : 'Open menu'}
            </span>
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isOpenedMenu ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isOpenedMenu ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isOpenedMenu ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </nav>

      {isOpenedMenu ? (
        <div
          id='mobile-navigation'
          className='mx-auto mt-3 grid max-w-6xl gap-2 rounded-2xl border border-slate-900/10 bg-white/95 p-3 shadow-2xl shadow-slate-950/15 backdrop-blur-xl lg:hidden'
        >
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              onClick={closeMenu}
              className={getMobileNavLinkClass(activeSection === item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              key={`mobile-${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
};
