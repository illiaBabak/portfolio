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
          description='A practical stack across frontend, mobile, backend, databases, testing, and everyday tooling.'
        />

        <div className='mt-14 grid gap-5 lg:grid-cols-2'>
          {skillCategories.map((category, index) => (
            <article
              className='reveal-up group rounded-3xl border border-slate-900/10 bg-white/75 p-6 shadow-xl shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/10'
              style={{ animationDelay: `${index * 80}ms` }}
              key={category.title}
            >
              <div>
                <h3 className='text-2xl font-black text-slate-950'>
                  {category.title}
                </h3>
                <p className='mt-2 max-w-xl text-sm leading-6 text-slate-600'>
                  {category.description}
                </p>
              </div>

              <div className='mt-6 flex flex-wrap gap-2.5'>
                {category.skills.map((skill) => (
                  <TechBadge
                    name={skill.name}
                    icon={skill.icon}
                    compact={true}
                    key={`${category.title}-${skill.name}`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
