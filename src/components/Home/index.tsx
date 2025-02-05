import { JSX } from 'react';

export const Home = (): JSX.Element => {
  return (
    <section
      className={`Home flex h-screen flex-col-reverse items-center justify-center bg-[url(/light-home.jpg)] bg-cover px-12 pt-[120px] md:flex-row md:justify-between lg:px-24 dark:bg-[url(/dark-home.jpg)]`}
    >
      <article className='mb-[15%] flex w-[70%] flex-col items-center text-center md:items-baseline md:text-left'>
        <h1 className='w-fit text-2xl font-bold md:text-4xl xl:text-6xl dark:text-white'>
          Hey, I'm Illia
        </h1>
        <p className='animate-typing w-fit overflow-hidden border-r-5 text-2xl font-bold whitespace-nowrap text-violet-600 md:text-4xl xl:text-6xl dark:text-violet-300'>
          Frontend Developer
        </p>
        <p className='mt-5 w-full text-xs sm:text-base md:w-[70%] lg:text-lg dark:text-white'>
          an eighteen-year-old student from Ukraine studying in Poland
        </p>

        <div className='mt-5 flex flex-row items-center'>
          <a className='h-[35px] w-[35px]' href='https://github.com/illiaBabak'>
            <img className='rounded-3xl' src='/github.webp' alt='github-icon' />
          </a>
          <a
            className='mx-2 h-[35px] w-[35px]'
            href='https://www.linkedin.com/in/illia-babak-4a8664289/'
          >
            <img
              className='rounded-3xl'
              src='/linkedin.png'
              alt='linkedin-icon'
            />
          </a>
        </div>
      </article>
      <img
        className='mb-[5%] h-[170px] min-w-[170px] rounded-md object-cover sm:h-[220px] sm:min-w-[220px] md:me-20 md:mb-[15%] md:h-[250px] md:min-w-[250px] lg:h-[350px] lg:min-w-[350px] xl:h-[400px] xl:min-w-[400px]'
        src='/photo.jpg'
        alt='photo'
      />
    </section>
  );
};
