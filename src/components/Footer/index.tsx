import { JSX } from 'react';
import { personalInfo, socialLinks } from 'src/data/portfolio';

const footerLinks = socialLinks.filter((link) =>
  ['GitHub', 'LinkedIn', 'Email'].includes(link.label)
);

export const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-slate-900/10 bg-white px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
        <p>
          © {year} {personalInfo.name}. Built with React, TypeScript, and Vite.
        </p>
        <div className='flex flex-wrap gap-4'>
          {footerLinks.map((link) => (
            <a
              className='font-semibold transition duration-300 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500'
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              key={`footer-${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
