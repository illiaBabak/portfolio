export const SECTIONS = ['Home', 'About', 'Projects', 'Contact'] as const;

type StackType = {
  name: string;
  url: string;
};

export const STACK: StackType[] = [
  { name: 'HTML', url: '/html5.png' },
  { name: 'CSS', url: '/css.webp' },
  { name: 'SCSS', url: '/scss.png' },
  { name: 'Less', url: '/less.webp' },
  { name: 'Bootstrap', url: '/bootstrap.svg' },
  { name: 'Tailwind', url: '/tailwind.svg' },
  { name: 'JavaScript', url: '/js.webp' },
  { name: 'TypeScript', url: '/ts.png' },
  { name: 'React', url: '/react.png' },
  { name: 'Redux', url: '/redux.png' },
  { name: 'React Query', url: '/react-query.png' },
  { name: 'React Bootstrap', url: '/react-bootstrap.jpeg' },
  { name: 'NPM', url: '/npm.webp' },
  { name: 'PNPM', url: '/pnpm.webp' },
  { name: 'Yarn', url: '/yarn.webp' },
  { name: 'Axios', url: '/axios.png' },
  { name: 'Git', url: '/git.png' },
  { name: 'Supabase', url: '/supabase.png' },
  { name: 'PostgreSQL', url: '/postgresql.webp' },
  { name: 'MySQL', url: '/mysql.avif' },
  { name: 'Windows', url: '/windows.png' },
  { name: 'Linux', url: '/linux.png' },
  { name: 'MacOS', url: '/macos.png' },
] as const;
