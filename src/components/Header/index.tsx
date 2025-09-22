import { JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SECTIONS } from 'src/utils/constants';
import { getCurrentTheme } from 'src/utils/getCurrentTheme';
import { Link } from 'react-scroll';

export const Header = (): JSX.Element => {
  const [theme, setTheme] = useState(getCurrentTheme());

  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.remove('light', 'dark');

    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', JSON.stringify('dark'));
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
      localStorage.setItem('portfolio_theme', JSON.stringify('light'));
    }
  };

  return (
    <header className='fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-white px-3 shadow-md md:px-8 dark:bg-zinc-900'>
      <h1 className='text-xl text-black dark:text-white'>Illia Babak</h1>

      <div className='flex w-[90px] flex-row items-center md:w-auto'>
        <div className='hidden md:flex'>
          {SECTIONS.map((section, index) => (
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              className={`dark:hover:bg-stale-500 mx-5 w-[100px] cursor-pointer rounded-md p-2 text-center hover:bg-purple-700 hover:text-white dark:text-white dark:hover:bg-zinc-700 [&.active]:bg-purple-700 [&.active]:text-white [&.active]:outline [&.active]:outline-black/10 [&.active]:dark:bg-zinc-700`}
              key={`section-${section}-${index}`}
            >
              {section}
            </Link>
          ))}
        </div>

        <img
          onClick={toggleTheme}
          className='h-[30px] cursor-pointer object-cover duration-150 hover:scale-110'
          src={theme === 'light' ? '/sun.png' : '/moon.png'}
          alt={
            theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
          }
          loading='eager'
          decoding='async'
        />

        <div className='mx-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center md:hidden'>
          <button
            className='relative h-[40px] w-[40px] cursor-pointer rounded-md bg-white text-gray-500 focus:outline-none dark:bg-zinc-700 dark:text-white'
            onClick={() => setIsOpenedMenu((prev) => !prev)}
          >
            <div className='absolute top-1/2 left-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer'>
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                  isOpenedMenu ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                  isOpenedMenu ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                  isOpenedMenu ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {isOpenedMenu && (
        <div className='fixed top-[80px] right-0 m-4 flex flex-col rounded-md bg-white py-2 shadow-md md:hidden dark:bg-zinc-900'>
          {SECTIONS.map((section, index) => (
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              onClick={() => setIsOpenedMenu(false)}
              className={`mx-5 my-2 w-[100px] cursor-pointer rounded-md p-2 text-center text-black hover:bg-purple-700 hover:text-white dark:text-white dark:hover:bg-zinc-700 [&.active]:bg-purple-700 [&.active]:text-white [&.active]:outline [&.active]:outline-black/10 [&.active]:dark:bg-zinc-700`}
              key={`section-${section}-${index}`}
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
