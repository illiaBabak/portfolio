import { JSX } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverted';
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
}: SectionHeadingProps): JSX.Element => {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'mx-auto items-center text-center';

  const titleColor =
    tone === 'inverted'
      ? 'text-white'
      : 'text-slate-950';
  const descriptionColor =
    tone === 'inverted'
      ? 'text-slate-200'
      : 'text-slate-600';

  return (
    <div className={`reveal-up flex max-w-3xl flex-col ${alignment}`}>
      <p className='mb-3 w-fit rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-violet-700 uppercase'>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};
