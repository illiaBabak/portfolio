import { JSX } from 'react';
import { STACK } from 'src/utils/constants';

export const About = (): JSX.Element => {
  return (
    <section className='About flex min-h-screen flex-col items-center pt-16 dark:bg-neutral-950'>
      <h1 className='mt-8 text-4xl font-bold text-black md:mt-12 md:text-5xl dark:text-white'>
        About me
      </h1>

      <div className='mt-12 flex w-[80%] flex-col items-center md:items-start'>
        <h2 className='text-2xl font-semibold text-violet-600 dark:text-violet-500'>
          A little bit about me
        </h2>
        <p className='mt-3 text-center text-gray-500 md:text-left'>
          My name is Illia Babak. I'm an 18-year-old front-end developer from
          Ukraine but currently studying in Poland to become a technical
          programmer at the School of Electronic and Automotive in Zielona Gora.
          I have just started my journey in web development and am gaining
          experience from self-studying programming, creating pet projects and,
          more recently, freelancing with orders
        </p>
      </div>

      <h3 className='mt-12 text-4xl font-semibold text-violet-600 dark:text-violet-500'>
        Stack
      </h3>
      <div className='mt-4 flex flex-row flex-wrap items-center justify-center'>
        {STACK.map((tech, index) => (
          <div
            key={`tech-${tech.name}-${index}`}
            className='m-2 flex flex-row items-center rounded-md bg-white px-4 py-3 shadow-xl md:m-3'
          >
            <img
              className='h-[32px] min-w-[32px] md:h-[40px] md:min-w-[40px]'
              src={tech.url}
              alt='tech-icon'
            />
            <h5 className='ms-3'>{tech.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};
