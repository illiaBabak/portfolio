import { JSX } from 'react';

type TechBadgeProps = {
  name: string;
  icon?: string;
  compact?: boolean;
};

export const TechBadge = ({
  name,
  icon,
  compact = false,
}: TechBadgeProps): JSX.Element => (
  <span
    className={`inline-flex min-h-9 items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 text-sm font-medium text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-violet-700 ${
      compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2'
    }`}
  >
    {icon ? (
      <img
        className={compact ? 'h-4 w-4 object-contain' : 'h-5 w-5 object-contain'}
        src={icon}
        alt=''
        loading='lazy'
        decoding='async'
        aria-hidden='true'
      />
    ) : null}
    {name}
  </span>
);
