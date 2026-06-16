import { JSX } from 'react';
import { TechBadge } from 'src/components/TechBadge';
import { Experience } from 'src/data/portfolio';

type ExperienceCardProps = {
  entry: Experience;
  index: number;
};

export const ExperienceCard = ({
  entry,
  index,
}: ExperienceCardProps): JSX.Element => {
  return (
    <article
      className='reveal-up relative rounded-3xl border border-slate-900/10 bg-white/80 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/50'
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className='absolute top-8 -left-[2.2rem] hidden h-5 w-5 rounded-full border-4 border-white bg-violet-600 shadow-lg shadow-violet-900/20 lg:block' />

      <div className='flex flex-col gap-5 sm:flex-row sm:items-start'>
        <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-500 to-blue-500 text-lg font-black text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/60'>
          {entry.logoText ?? entry.company.slice(0, 2).toUpperCase()}
        </div>

        <div className='min-w-0 flex-1'>
          <div className='flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between'>
            <div>
              <h3 className='text-2xl font-black text-slate-950'>
                {entry.role}
              </h3>
              <p className='mt-1 text-base font-semibold text-violet-700'>
                {entry.company}
              </p>
            </div>
            <div className='flex flex-wrap gap-2 lg:justify-end'>
              <span className='rounded-full bg-slate-950/5 px-3 py-1 text-xs font-bold text-slate-600'>
                {entry.dateRange}
              </span>
              {entry.employmentType ? (
                <span className='rounded-full bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-700'>
                  {entry.employmentType}
                </span>
              ) : null}
              {entry.location ? (
                <span className='rounded-full border border-slate-900/10 px-3 py-1 text-xs font-semibold text-slate-500'>
                  {entry.location}
                </span>
              ) : null}
            </div>
          </div>

          <p className='mt-5 text-sm leading-7 text-slate-600'>
            {entry.description}
          </p>

          <ul className='mt-5 grid gap-3 text-sm text-slate-600'>
            {entry.achievements.map((achievement) => (
              <li className='flex gap-3' key={`${entry.company}-${achievement}`}>
                <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500' />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className='mt-6 flex flex-wrap gap-2'>
            {entry.stack.map((tech) => (
              <TechBadge name={tech} compact={true} key={`${entry.company}-${tech}`} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
