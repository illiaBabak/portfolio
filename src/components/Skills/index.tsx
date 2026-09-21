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

        <div className='mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5'>
          {skillCategories.map((category, index) => (
            <article
              className={`reveal-up group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_-24px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_20px_45px_-24px_rgba(91,33,182,0.3)] sm:p-7 ${
                index === 0
                  ? 'lg:col-span-7'
                  : index === 1
                    ? 'lg:col-span-5'
                    : 'lg:col-span-6'
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
              key={category.title}
            >
              <div className='pointer-events-none absolute -top-24 -right-20 h-48 w-48 rounded-full bg-violet-100/60 blur-3xl' />

              <div className='relative'>
                <div>
                  <h3 className='text-xl font-bold tracking-tight text-slate-950 sm:text-2xl'>
                    {category.title}
                  </h3>
                  <p className='mt-2 max-w-xl text-sm leading-6 text-slate-600'>
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className='relative mt-6 flex flex-wrap content-start gap-2.5 border-t border-slate-100 pt-5'>
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
