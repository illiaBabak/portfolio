import { JSX } from 'react';
import { PROJECTS } from 'src/utils/constants';

export const Projects = (): JSX.Element => {
  return (
    <section className='Projects flex min-h-screen flex-col items-center bg-violet-100 pt-24 pb-12 dark:bg-slate-950'>
      <h1 className='text-5xl font-bold dark:text-white'>My projects</h1>
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div
            className={`mt-12 flex min-h-[250px] w-[90%] flex-col items-center md:flex-row md:items-stretch lg:h-[250px] xl:h-[350px] ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative rounded-md bg-white p-4 shadow-md outline outline-black/10 sm:p-8 dark:bg-zinc-900`}
            key={`project-${index}-${project.name}`}
          >
            <img
              className='h-[150px] w-[300px] rounded-md sm:h-[200px] sm:w-[400px] xl:h-[300px] xl:min-w-[600px]'
              src={project.img}
              alt='project-icon'
            />
            <div
              className={`relative mt-4 justify-between md:mt-0 ${index % 2 == 0 ? 'ms-4' : 'me-4'} flex flex-col`}
            >
              <div className='text-center md:text-left'>
                <h2 className='text-2xl font-bold text-purple-700 dark:text-violet-400'>
                  {project.name}
                </h2>
                <p className='mt-3 text-gray-500'>{project.description}</p>
              </div>

              <div className='relative bottom-0 mt-4 flex flex-row flex-wrap items-center justify-center md:justify-normal lg:mt-0'>
                {project.stack.map((tech, index) => (
                  <div
                    className='z-10 m-2 rounded-md bg-gray-300 p-3 text-[10px] text-gray-600 shadow-md lg:mx-2 lg:my-0'
                    key={`project-stack-${index}-${tech}`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <a href={project.githubLink}>
                <img
                  className='absolute top-[-20px] right-[-12px] h-[30px] min-w-[30px] cursor-pointer rounded-4xl bg-white duration-300 hover:scale-125 sm:right-[-20px] sm:h-[40px] sm:min-w-[40px]'
                  src='/github.webp'
                  alt='github-icon'
                />
              </a>

              <a href={project.link}>
                <img
                  className='absolute top-[-22.5px] right-[30px] h-[35px] min-w-[35px] cursor-pointer rounded-4xl bg-white duration-300 hover:scale-125 sm:h-[45px] sm:min-w-[45px]'
                  src='/link.png'
                  alt='link-icon'
                />
              </a>
            </div>
          </div>
        ))}

        <a
          href='https://github.com/illiaBabak'
          className='mt-12 flex items-center justify-center rounded-md bg-purple-700 px-4 py-2 text-white duration-300 hover:scale-125 dark:bg-zinc-800'
        >
          More projects on my GitHub
        </a>
      </div>
    </section>
  );
};
