import { JSX } from 'react';
import { STACK } from 'src/utils/constants';

export const About = (): JSX.Element => {
  return (
    <section
      id='About'
      className='About flex min-h-screen flex-col items-center pt-16 pb-6 sm:pb-2 dark:bg-neutral-950'
    >
      <h1 className='mt-8 text-4xl font-bold text-black md:mt-12 md:text-5xl dark:text-white'>
        About me
      </h1>

      <div className='mt-12 flex w-[80%] flex-col items-center md:items-start'>
        <h2 className='text-2xl font-semibold text-violet-600 dark:text-violet-500'>
          A little bit about me
        </h2>
        <p className='mt-3 text-center text-gray-500 md:text-left'>
          My name is Illia Babak, a front-end developer from Ukraine, currently
          studying in Poland to become a technical programmer at the School of
          Electronic and Automotive in Zielona Gora. Passionate about crafting
          modern and dynamic web experiences, I’ve been honing my skills through
          self-study, developing innovative pet projects, and working with
          clients on freelance projects. With a strong foundation in web
          technologies and a drive for continuous growth, I strive to create
          intuitive and high-performing user interfaces that bring ideas to
          life.
        </p>
      </div>

      <h3 className='mt-12 text-4xl font-semibold text-violet-600 dark:text-violet-500'>
        Stack
      </h3>
      <div className='mt-4 flex flex-row flex-wrap items-center justify-center'>
        {STACK.map((tech, index) => (
          <div
            key={`tech-${tech.name}-${index}`}
            className='m-2 flex flex-row items-center rounded-sm bg-white px-4 py-3 shadow-xl md:m-3'
          >
            <img
              className='h-[32px] min-w-[32px] md:h-[40px] md:min-w-[40px]'
              src={tech.url}
              alt={`${tech.name} logo`}
              loading='lazy'
              decoding='async'
            />
            <h5 className='ms-3'>{tech.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};
