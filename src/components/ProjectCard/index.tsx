import { JSX } from 'react';
import { TechBadge } from 'src/components/TechBadge';
import { Project } from 'src/data/portfolio';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
} as const;

export const ProjectCard = ({
  project,
  index,
}: ProjectCardProps): JSX.Element => {
  const isMobilePreview = project.previewVariant === 'mobile';
  const carouselStepDuration = 4;
  const carouselFadeLead = 0.8;
  const carouselDuration = project.images.length * 4;
  const layoutClass = isMobilePreview
    ? 'lg:grid-cols-[0.72fr_1fr]'
    : 'lg:grid-cols-[1fr_1.18fr]';
  const previewOrderClass = isMobilePreview ? 'lg:order-1' : 'lg:order-2';
  const contentOrderClass = isMobilePreview ? 'lg:order-2' : 'lg:order-1';
  const previewPanelClass = isMobilePreview
    ? 'bg-slate-950 px-6 py-8 sm:px-10 lg:px-8'
    : 'bg-[#f5f7fb] p-4 sm:p-6 lg:p-8';
  const categoryPillClass = isMobilePreview
    ? 'bg-cyan-500/10 text-cyan-700'
    : 'bg-emerald-500/10 text-emerald-700';
  const accentDotClass = isMobilePreview ? 'bg-cyan-500' : 'bg-emerald-500';
  const featureGridClass = isMobilePreview
    ? 'grid gap-3'
    : 'grid gap-3 xl:grid-cols-2';

  return (
    <article
      className='reveal-up group overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white shadow-2xl shadow-slate-950/10 transition duration-500 hover:-translate-y-1 hover:border-slate-900/20 hover:shadow-slate-950/15'
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`grid ${layoutClass}`}>
        <div
          className={`relative flex min-h-[24rem] items-center overflow-hidden ${previewPanelClass} ${previewOrderClass}`}
        >
          {isMobilePreview ? (
            <>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(14,165,233,0.28),transparent_32%),linear-gradient(135deg,#020617_0%,#111827_58%,#0f172a_100%)]' />
              <div className='absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent' />
              <div className='project-phone-float relative mx-auto h-[34.5rem] w-full max-w-[17rem] rounded-[2.4rem] border border-white/15 bg-slate-950 p-3 shadow-2xl shadow-cyan-950/40 transition duration-700 group-hover:scale-[1.02] group-hover:-rotate-1'>
                <span className='absolute top-3 left-1/2 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20' />
                <div className='relative h-full w-full overflow-hidden rounded-[1.9rem] bg-slate-900'>
                  {project.images.map((image, imageIndex) => (
                    <img
                      className={`project-carousel-image absolute inset-0 h-full w-full object-cover object-center ${
                        imageIndex === 0 ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: `${
                          imageIndex * carouselStepDuration - carouselFadeLead
                        }s`,
                        animationDuration: `${carouselDuration}s`,
                      }}
                      src={image}
                      width={589}
                      height={1280}
                      alt={
                        imageIndex === 0
                          ? `${project.title} mobile app preview`
                          : ''
                      }
                      aria-hidden={imageIndex !== 0}
                      loading='lazy'
                      decoding='async'
                      key={`${project.title}-${image}`}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#eefdf5_55%,#f8fafc_100%)]' />
              <div className='project-preview-float relative mx-auto w-full max-w-[47rem] transition duration-700 group-hover:scale-[1.015]'>
                <div className='overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-white shadow-2xl shadow-emerald-950/15'>
                  <div className='flex h-9 items-center gap-2 border-b border-slate-900/10 bg-slate-50 px-4'>
                    <span className='h-2.5 w-2.5 rounded-full bg-red-400' />
                    <span className='h-2.5 w-2.5 rounded-full bg-amber-300' />
                    <span className='h-2.5 w-2.5 rounded-full bg-emerald-400' />
                    <span className='ml-2 h-2 w-24 rounded-full bg-slate-200' />
                  </div>
                  <div className='bg-white p-2'>
                    <div className='relative aspect-video overflow-hidden rounded-[1rem] bg-white'>
                      {project.images.map((image, imageIndex) => (
                        <img
                          className={`project-carousel-image absolute inset-0 h-full w-full object-cover object-center ${
                            imageIndex === 0 ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            animationDelay: `${
                              imageIndex * carouselStepDuration - carouselFadeLead
                            }s`,
                            animationDuration: `${carouselDuration}s`,
                          }}
                          src={image}
                          width={1600}
                          height={900}
                          alt={
                            imageIndex === 0
                              ? `${project.title} web app preview`
                              : ''
                          }
                          aria-hidden={imageIndex !== 0}
                          loading='lazy'
                          decoding='async'
                          key={`${project.title}-${image}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={`flex flex-col p-6 sm:p-8 lg:p-10 ${contentOrderClass}`}
        >
          <div className='flex flex-wrap items-center gap-2'>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${categoryPillClass}`}
            >
              {project.category}
            </span>
            {project.highlights.map((highlight) => (
              <span
                className='rounded-full border border-slate-900/10 px-3 py-1 text-xs font-semibold text-slate-500'
                key={`${project.title}-${highlight}`}
              >
                {highlight}
              </span>
            ))}
          </div>

          <h3 className='mt-6 max-w-xl text-3xl leading-tight font-black text-slate-950'>
            {project.title}
          </h3>
          <p className='mt-4 max-w-2xl text-sm leading-7 text-slate-600'>
            {project.description}
          </p>

          <ul className={`mt-6 text-sm text-slate-600 ${featureGridClass}`}>
            {project.features.map((feature) => (
              <li className='flex gap-3' key={`${project.title}-${feature}`}>
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentDotClass}`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className='mt-7 flex flex-wrap gap-2'>
            {project.stack.map((tech) => (
              <TechBadge
                name={tech}
                compact={true}
                key={`${project.title}-${tech}`}
              />
            ))}
          </div>

          <div className='mt-auto pt-8'>
            <a
              className='inline-flex min-h-11 w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 sm:w-fit'
              href={project.github.href}
              {...externalLinkProps}
            >
              {project.github.label}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
