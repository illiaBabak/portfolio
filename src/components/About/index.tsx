import { JSX } from 'react';
import { SectionHeading } from 'src/components/SectionHeading';
import { personalInfo } from 'src/data/portfolio';

const aboutCards = [
  {
    title: 'What I build',
    text: personalInfo.buildFocus,
  },
  {
    title: 'What I am learning',
    text: personalInfo.learningFocus,
  },
  {
    title: 'What I am looking for',
    text: personalInfo.lookingFor,
  },
] as const;

export const About = (): JSX.Element => {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-slate-100 px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start'>
          <SectionHeading
            align='left'
            eyebrow='About'
            title='Full-stack delivery across web, mobile, and backend'
            description={personalInfo.about}
          />

          <div className='grid gap-4'>
            {aboutCards.map((card, index) => (
              <article
                className='reveal-up rounded-3xl border border-slate-900/10 bg-white/80 p-6 shadow-xl shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/50'
                style={{ animationDelay: `${index * 90}ms` }}
                key={card.title}
              >
                <h3 className='text-xl font-black text-slate-950'>
                  {card.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
