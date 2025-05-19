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
  { name: 'React Bootstrap', url: '/react-bootstrap.jpeg' },
  { name: 'Tailwind', url: '/tailwind.svg' },
  { name: 'JavaScript', url: '/js.webp' },
  { name: 'TypeScript', url: '/ts.png' },
  { name: 'React', url: '/react.png' },
  { name: 'Redux', url: '/redux.png' },
  { name: 'React Query', url: '/react-query.png' },
  { name: 'React Native', url: '/react.png' },
  { name: 'Expo', url: '/expo.png' },
  { name: 'Cypress', url: '/cypress.png' },
  { name: 'Jest', url: '/jest.png' },
  { name: 'Node.js', url: '/node.png' },
  { name: 'Express', url: '/express.png' },
  { name: 'PHP', url: '/php.png' },
  { name: 'Python', url: '/python.png' },
  { name: 'NPM', url: '/npm.webp' },
  { name: 'PNPM', url: '/pnpm.webp' },
  { name: 'Yarn', url: '/yarn.webp' },
  { name: 'Axios', url: '/axios.png' },
  { name: 'Git', url: '/git.png' },
  { name: 'Firebase', url: '/firebase.png' },
  { name: 'Supabase', url: '/supabase.png' },
  { name: 'PostgreSQL', url: '/postgresql.webp' },
  { name: 'MySQL', url: '/mysql.avif' },
  { name: 'MongoDB', url: '/mongodb.svg' },
  { name: 'Windows', url: '/windows.png' },
  { name: 'Linux', url: '/linux.png' },
  { name: 'MacOS', url: '/macos.png' },
] as const;

export const PROJECTS = [
  {
    name: 'Fit Form',
    img: '/fit-form.png',
    description:
      'Fit Form is a modern web application for exploring exercises and creating personalized workout plans. Plan your training easily and efficiently right in your browser! 💪🌐',
    githubLink: 'https://github.com/illiaBabak/fit-form',
    link: 'https://github.com/illiaBabak/fit-form',
    stack: ['REACT.JS', 'RTK', 'FIREBASE', 'TAILWIND', 'CYPRESS'],
  },
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
      'Film library using the Movies API. This web application is written to learn how to work with TMDB API and how to work deeply with React Query, Less',
    githubLink: 'https://github.com/illiaBabak/Movies',
    link: 'https://illiababak.github.io/Movies/',
    stack: ['REACT.JS', 'REACT QUERY', 'LESS', 'TYPESCRIPT'],
  },
] as const;
