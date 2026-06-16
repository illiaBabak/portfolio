import { JSX } from 'react';
import { personalInfo, socialLinks } from 'src/data/portfolio';

const primarySocials = socialLinks.filter((link) =>
  ['GitHub', 'LinkedIn'].includes(link.label)
);

export const Home = (): JSX.Element => {
  return (
    <section
      id='home'
      className='relative isolate flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8'
    >
      <div className='absolute inset-0 -z-20 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_48%,#ffffff_100%)]' />
      <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent' />
      <div className='mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12'>
        <article className='reveal-up order-2 max-w-3xl lg:order-1'>
          <h1 className='max-w-4xl text-5xl leading-[0.98] font-black text-slate-950 sm:text-6xl lg:text-7xl'>
            {personalInfo.title}
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl'>
            {personalInfo.shortIntro}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href='#projects'
              className='inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500'
            >
              Contact Me
            </a>
            <div className='flex items-center gap-3 sm:ml-2'>
              {primarySocials.map((link) => (
                <a
                  className='flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 shadow-lg shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500'
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`${link.label} profile`}
                  key={link.label}
                >
                  {link.icon ? (
                    <img
                      className='h-5 w-5 rounded-full object-contain'
                      src={link.icon}
                      alt=''
                      aria-hidden='true'
                      loading='eager'
                      decoding='async'
                    />
                  ) : (
                    <span className='text-sm font-bold'>{link.label[0]}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </article>

        <aside className='reveal-up order-1 w-full max-w-[13.5rem] -translate-x-1 -translate-y-3 justify-self-start sm:max-w-[15.5rem] sm:-translate-x-2 lg:order-2 lg:mr-0 lg:max-w-[23.5rem] lg:-translate-x-4 lg:-translate-y-5 lg:justify-self-end'>
          <div className='hero-portrait-frame relative isolate -rotate-1 rounded-[1.75rem] p-[3px] shadow-2xl shadow-violet-950/15 transition duration-500 hover:rotate-0 lg:rounded-[2rem]'>
            <div className='absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/12 via-cyan-300/10 to-transparent blur-xl lg:-inset-4 lg:rounded-[2.25rem]' />
            <div className='absolute -top-2 -right-2 h-12 w-12 rounded-[1.1rem] border border-white/70 bg-white/45 backdrop-blur-md lg:h-16 lg:w-16 lg:rounded-[1.35rem]' />
            <div className='relative overflow-hidden rounded-[1.55rem] border border-white/80 bg-white/80 p-2 backdrop-blur-xl lg:rounded-[1.8rem] lg:p-3'>
              <div className='overflow-hidden rounded-[1.15rem] bg-slate-950 lg:rounded-[1.35rem]'>
                <img
                  className='aspect-[4/5] w-full object-cover object-[center_42%] opacity-95'
                  src={personalInfo.portrait}
                  alt={`Portrait of ${personalInfo.name}`}
                  loading='eager'
                  decoding='async'
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
