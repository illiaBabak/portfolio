export type NavItem = {
  label: string;
  id: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
};

export type Skill = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: readonly Skill[];
};

export type ProjectLink = {
  href: string;
  label: string;
  isPlaceholder?: boolean;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  images: readonly string[];
  previewVariant: 'mobile' | 'desktop';
  features: readonly string[];
  stack: readonly string[];
  highlights: readonly string[];
  github: ProjectLink;
};

export type Experience = {
  company: string;
  role: string;
  employmentType?: string;
  location?: string;
  dateRange: string;
  description: string;
  achievements: readonly string[];
  stack: readonly string[];
  logoText?: string;
};

export const navItems: readonly NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export const personalInfo = {
  name: 'Illia Babak',
  title: 'Full-Stack & Mobile Developer',
  email: 'illiababak776@gmail.com',
  phone: '+48 884 959 918',
  portrait: '/photo.jpg',
  shortIntro:
    'Fullstack Developer with 2 years of commercial experience across React, TypeScript, React Query, React Native, PHP, and Node.js/Express.',
  about:
    'I am a Fullstack Developer with a strong frontend background and commercial experience building web, mobile, and backend solutions. My work spans logistics, insurance, video services, internal tools, estimation platforms, and real-time communication products. I focus on scalable architecture, maintainable code, clear user workflows, and reliable delivery across product layers.',
  buildFocus:
    'I build responsive interfaces, mobile-ready product flows, API integrations, dashboards, internal tools, and backend services that support real business workflows.',
  learningFocus:
    'I continue strengthening my full-stack engineering skills across React, React Native, Node.js/Express, PHP, databases, testing, performance, and production support.',
  lookingFor:
    'I am looking for frontend, full-stack, or mobile roles where I can contribute to production features, collaborate with product teams, and keep growing as an engineer.',
};

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/illiaBabak',
    icon: '/github.webp',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/illia-babak-4a8664289/',
    icon: '/linkedin.png',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: 'Phone',
    href: 'tel:+48884959918',
  },
];

export const skillCategories: readonly SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Interfaces, state, styling, and fast client-side workflows.',
    skills: [
      { name: 'SCSS', icon: '/scss.png' },
      { name: 'Less', icon: '/less.webp' },
      { name: 'Tailwind CSS', icon: '/tailwind.svg' },
      { name: 'Bootstrap', icon: '/bootstrap.svg' },
      { name: 'JavaScript', icon: '/js.webp' },
      { name: 'TypeScript', icon: '/ts.png' },
      { name: 'React', icon: '/react.png' },
      { name: 'Next.js', icon: '/nextjs.png' },
      { name: 'Redux', icon: '/redux.png' },
      { name: 'React Query', icon: '/react-query.png' },
      {name: 'Babylon.js', icon: '/babylon.png'}
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, server logic, and practical application foundations.',
    skills: [
      { name: 'Node.js', icon: '/node.png' },
      { name: 'Express', icon: '/express.png' },
      { name: 'Prisma', icon: '/prisma.svg' },
      { name: 'PHP', icon: '/php.png' },
    ],
  },
    {
    title: 'Mobile',
    description: 'Cross-platform product flows and app-ready integrations.',
    skills: [
      { name: 'React Native', icon: '/react.png' },
      { name: 'Expo', icon: '/expo.png' },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational, document, and backend-as-a-service storage.',
    skills: [
      { name: 'PostgreSQL', icon: '/postgresql.webp' },
      { name: 'MySQL', icon: '/mysql.avif' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'Supabase', icon: '/supabase.png' },
      { name: 'Firebase', icon: '/firebase.png' },
    ],
  },
  {
    title: 'DevOps / Tools',
    description: 'Version control, package managers, testing, and deploys.',
    skills: [
      { name: 'Docker', icon: 'docker.png'},
      { name: 'Cypress', icon: '/cypress.png' },
      { name: 'Jest', icon: '/jest.png' },
      { name: 'Linux', icon: '/linux.png' },
      { name: 'pnpm', icon: '/pnpm.webp' },
    ],
  },
];

export const petProjects: readonly Project[] = [
  {
    title: 'GroceryShop',
    category: 'Full-stack grocery e-commerce',
    description:
      'A full-stack online grocery store built to deepen Next.js App Router knowledge, learn Prisma ORM, and practice checkout, database, Docker, and testing workflows.',
    images: [
      '/grocery-shop-1.png',
      '/grocery-shop-2.png',
      '/grocery-shop-3.png',
      '/grocery-shop-4.png',
    ],
    previewVariant: 'desktop',
    features: [
      'Product catalog with category, price, rating, search, sorting, and product detail pages',
      'Cart with localStorage persistence, cross-tab sync, guest checkout, and authenticated checkout',
      'Stripe Checkout Sessions, webhook order updates, JWT auth, user profile, order history, and reviews',
      'Dockerized dev/test/prod setup with PostgreSQL, Prisma migrations, Cypress E2E tests, and Mailgun order digest cron',
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Tailwind CSS',
      'Docker',
      'Cypress',
    ],
    highlights: ['payments', 'Docker', 'testing'],
    github: {
      href: 'https://github.com/illiaBabak/grocery-shop',
      label: 'GitHub',
    },
  },
  {
    title: 'E-messenger',
    category: 'Realtime mobile messenger',
    description:
      'A production-like mobile messenger built to practice Expo architecture, Firebase realtime data, rich chat interactions, media sharing, privacy controls, and LiveKit audio/video calls.',
    images: [
      '/e-mess-1.jpg',
      '/e-mess-2.jpg',
      '/e-mess-3.jpg',
      '/e-mess-4.jpg',
    ],
    previewVariant: 'mobile',
    features: [
      'Phone OTP and Google authentication with profile onboarding',
      'Realtime one-to-one chats with replies, edits, forwarding, pinned messages, typing state, and unread counters',
      'Media workflow for photos, videos, files, voice messages, previews, downloads, and Skia image editing',
      'LiveKit audio/video calls backed by Firebase call records, Cloud Functions, and call history messages',
    ],
    stack: [
      'Expo',
      'React Native',
      'TypeScript',
      'Firebase',
      'Firestore',
      'LiveKit',
      'Cloud Functions',
      'Reanimated',
    ],
    highlights: ['authentication', 'realtime', 'media/files'],
    github: {
      href: 'https://github.com/illiaBabak/e-messanger',
      label: 'GitHub',
    },
  },
];

export const experienceEntries: readonly Experience[] = [
  {
    company: 'Novage',
    role: 'Fullstack Developer',
    employmentType: 'Commercial',
    location: 'Zhytomyr, Ukraine / Remote',
    dateRange: 'May 2024 - May 2026',
    description:
      'Worked on web, mobile, and backend applications across logistics, insurance, and video services domains, contributing to production features, integrations, performance improvements, and support.',
    achievements: [
      'Developed React, TypeScript, and React Query features for interactive interfaces, employee dashboards, internal tools, and user workflows.',
      'Contributed to a moving and transportation estimation platform that calculates relocation costs from item data, route distance, stops, packaging requirements, value, and transport type.',
      'Built modules for item-based estimation, route-related calculations, and data exchange with external systems.',
      'Integrated APIs and contributed to backend services using PHP and Node.js/Express microservices.',
      'Worked on a real-time video communication platform connecting operators with customers and supporting media-based transportation data collection.',
      'Contributed to AI-assisted object recognition flows, PDF and Excel export services, stability improvements, and on-call production issue resolution.',
    ],
    stack: [
      'React',
      'TypeScript',
      'React Query',
      'React Native',
      'PHP',
      'Node.js',
      'Express',
      'PDF/Excel',
      'AI integrations',
    ],
    logoText: 'NV',
  },
  {
    company: 'Freelancehunt',
    role: 'Frontend Developer',
    employmentType: 'Freelance',
    location: 'Ukraine / Remote',
    dateRange: 'Jan 2024 - May 2024',
    description:
      'Delivered responsive and dynamic web applications for freelance clients, turning design files into polished React interfaces with attention to performance and user experience.',
    achievements: [
      'Developed responsive React and TypeScript applications from Figma, Adobe XD, and Sketch designs.',
      'Converted UI designs into pixel-perfect, interactive pages with reusable components and clean styling.',
      'Improved frontend performance with code splitting, lazy loading, memoization, and careful rendering decisions.',
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'Performance', 'Figma'],
    logoText: 'FH',
  },
];
