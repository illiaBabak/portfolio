import { JSX } from 'react';
import { ExperienceCard } from 'src/components/ExperienceCard';
import { SectionHeading } from 'src/components/SectionHeading';
import { experienceEntries } from 'src/data/portfolio';

export const Experience = (): JSX.Element => {
  return (
    <section
      id='experience'
      className='relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-6xl'>
        <SectionHeading
          eyebrow='Professional journey'
          title='Commercial experience across product domains'
          description='Production work across logistics, insurance, video services, freelance client projects, internal tools, integrations, and performance-focused frontend delivery.'
        />

        <div className='relative mt-14 lg:pl-10'>
          <div className='absolute top-0 bottom-0 left-2 hidden w-px bg-gradient-to-b from-violet-500 via-cyan-300 to-transparent lg:block' />
          <div className='grid gap-6'>
            {experienceEntries.map((entry, index) => (
              <ExperienceCard
                entry={entry}
                index={index}
                key={`${entry.company}-${entry.role}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
