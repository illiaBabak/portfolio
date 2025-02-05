import { JSX } from 'react';

export const Contact = (): JSX.Element => {
  return (
    <section className='Contact flex h-screen w-full flex-col items-center justify-center px-16 dark:bg-neutral-950'>
      <h1 className='text-3xl font-bold md:text-5xl dark:text-white'>
        Contact me
      </h1>
      <div className='flex flex-col items-center'>
        <div className='flex w-full flex-col items-center text-center md:text-base dark:text-white'>
          <div className='my-4 mt-10 flex flex-row items-center'>
            <a
              className='flex h-[32px] max-w-[180px] flex-row items-center duration-300 hover:scale-125 md:h-[45px]'
              href='https://github.com/illiaBabak'
            >
              <img
                className='h-[32px] rounded-3xl md:h-[45px]'
                src='/github.webp'
                alt='github-icon'
              />

              <p className='ms-2 text-xl'>My Github</p>
            </a>
          </div>

          <div className='my-4 flex flex-row items-center'>
            <a
              className='flex h-[32px] max-w-[180px] flex-row items-center duration-300 hover:scale-125 md:h-[45px]'
              href='https://www.linkedin.com/in/illia-babak-4a8664289/'
            >
              <img
                className='h-[32px] rounded-3xl md:h-[45px]'
                src='/linkedin.png'
                alt='linkedin-icon'
              />

              <p className='ms-2 text-xl'>My Linkedin</p>
            </a>
          </div>

          <p className='mt-4 flex flex-col text-lg md:flex-row'>
            <strong className='me-2'>My email:</strong> illiababak776@gmail.com
          </p>
          <p className='mt-4 flex flex-col text-lg md:flex-row'>
            <strong className='me-2'>My phone:</strong> +48 884 959 918
          </p>
        </div>
      </div>
    </section>
  );
};
