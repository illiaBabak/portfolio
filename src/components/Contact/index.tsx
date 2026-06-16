import { JSX } from 'react';
import { SectionHeading } from 'src/components/SectionHeading';
import { personalInfo, socialLinks } from 'src/data/portfolio';

const contactLinks = socialLinks.filter((link) =>
  ['Email', 'GitHub', 'LinkedIn'].includes(link.label)
);

export const Contact = (): JSX.Element => {
  return (
    <section
      id='contact'
      className='relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='reveal-up overflow-hidden rounded-[2rem] border border-slate-900/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/20'>
          <div className='relative px-6 py-14 sm:px-10 lg:px-14'>
            <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.35),rgba(14,165,233,0.18)_45%,rgba(2,6,23,0)_100%)]' />
            <div className='relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end'>
              <SectionHeading
                align='left'
                tone='inverted'
                eyebrow='Contact'
                title="Let's build something great"
                description='Have an opportunity, freelance project, internship, or product idea? I am open to conversations about web, mobile, and full-stack work.'
              />

              <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
                {contactLinks.map((link) => (
                  <a
                    className='group flex min-h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200'
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    key={link.label}
                  >
                    <span className='flex items-center gap-3'>
                      {link.icon ? (
                        <img
                          className='h-6 w-6 rounded-full object-contain'
                          src={link.icon}
                          alt=''
                          aria-hidden='true'
                          loading='lazy'
                          decoding='async'
                        />
                      ) : (
                        <span className='flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-slate-950'>
                          @
                        </span>
                      )}
                      {link.label === 'Email' ? personalInfo.email : link.label}
                    </span>
                    <span
                      className='text-lg transition duration-300 group-hover:translate-x-1'
                      aria-hidden='true'
                    >
                      →
                    </span>
                  </a>
                ))}

                <a
                  className='group flex min-h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:col-span-2 lg:col-span-1'
                  href='tel:+48884959918'
                >
                  <span>{personalInfo.phone}</span>
                  <span
                    className='text-lg transition duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
