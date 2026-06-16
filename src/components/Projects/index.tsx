import { JSX } from 'react';
import { ProjectCard } from 'src/components/ProjectCard';
import { SectionHeading } from 'src/components/SectionHeading';
import { petProjects, socialLinks } from 'src/data/portfolio';

const githubLink = socialLinks.find((link) => link.label === 'GitHub');

export const Projects = (): JSX.Element => {
  return (
    <section
      id='projects'
      className='relative overflow-hidden bg-slate-100 px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
          <SectionHeading
            align='left'
            eyebrow='Pet projects'
            title='Product-shaped pet projects'
            description='Selected web and mobile projects that show product thinking, polished interfaces, real integrations, and practical full-stack workflows.'
          />

          {githubLink ? (
            <a
              className='reveal-up inline-flex w-fit items-center justify-center rounded-full border border-slate-900/10 bg-white/80 px-5 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500'
              href={githubLink.href}
              target='_blank'
              rel='noreferrer'
            >
              More on GitHub
            </a>
          ) : null}
        </div>

        <div className='mt-12 grid gap-8'>
          {petProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
