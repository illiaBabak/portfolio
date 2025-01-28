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

export const PROJECTS = [
  {
    name: 'Blog',
    img: '/blog.png',
    description:
      'Blog project with users, posts, comments and etc. This web application is written to learn how to work with Supabase',
    githubLink: 'https://github.com/illiaBabak/blog',
    link: 'https://blog-illiababaks-projects.vercel.app',
    stack: ['REACT.JS', 'REACT QUERY', 'SUPABASE', 'REACT BOOTSTRAP'],
  },
  {
    name: 'Music Player',
    img: '/spotify.png',
    description:
      'Web application for listening to music. This project written to sum up my experience in technology and create something with a real full functionality Web API',
    githubLink: 'https://github.com/illiaBabak/Music-player',
    link: 'https://music-player-hc8h.vercel.app',
    stack: ['REACT.JS', 'REACT QUERY', 'REACT BOOTSTRAP', 'TYPESCRIPT'],
  },
  {
    name: 'Movies',
    img: '/movies.png',
    description:
      'Film library using the Movies API. This web application is written to learn how to work with TMDB Api and how to work deeply with React Query, Less',
    githubLink: 'https://github.com/illiaBabak/Movies',
    link: 'https://illiababak.github.io/Movies/',
    stack: ['REACT.JS', 'REACT QUERY', 'LESS', 'TYPESCRIPT'],
  },
] as const;
