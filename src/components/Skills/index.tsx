import { JSX } from 'react';
import { SectionHeading } from 'src/components/SectionHeading';
import { TechBadge } from 'src/components/TechBadge';
import { skillCategories } from 'src/data/portfolio';

export const Skills = (): JSX.Element => {
  return (
    <section
      id='skills'
      className='relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-6xl'>
        <SectionHeading
          eyebrow='Tech arsenal'
          title='Skills grouped for real product work'
          description='A README-style overview of the technologies I use to build, test, and ship products.'
        />

        <div className='mt-14 grid gap-5 md:grid-cols-2'>
          {skillCategories.map((category, index) => (
            <article
              className={`reveal-up group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/85 p-6 shadow-lg shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/10 ${
                category.wide ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
              key={category.title}
            >
              <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/55 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />

              <div>
                <h3 className='text-xl font-black text-slate-950 sm:text-2xl'>
                  {category.title}
                </h3>
                <p className='mt-1 max-w-xl text-sm leading-6 text-slate-600'>
                  {category.description}
                </p>
              </div>

              <ul className='mt-6 flex list-none flex-wrap gap-2.5 p-0'>
                {category.skills.map((skill) => (
                  <li key={`${category.title}-${skill.name}`}>
                    <TechBadge
                      name={skill.name}
                      icon={skill.icon}
                      badgeUrl={skill.badgeUrl}
                      compact={true}
                    />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
