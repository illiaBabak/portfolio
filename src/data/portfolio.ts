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
  badgeUrl?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: readonly Skill[];
  wide?: boolean;
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
    title: 'Styling',
    description:
      'Responsive, maintainable interfaces with polished visual detail.',
    skills: [
      {
        name: 'Tailwind CSS',
        badgeUrl:
          'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
      },
      {
        name: 'Bootstrap',
        badgeUrl:
          'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white',
      },
      {
        name: 'Sass',
        badgeUrl:
          'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
      },
      {
        name: 'Less',
        badgeUrl:
          'https://img.shields.io/badge/Less-1D365D?style=for-the-badge&logo=less&logoColor=white',
      },
    ],
  },
  {
    title: 'Frontend',
    description:
      'Modern web applications, state management, and 3D experiences.',
    skills: [
      {
        name: 'JavaScript',
        badgeUrl:
          'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000',
      },
      {
        name: 'TypeScript',
        badgeUrl:
          'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      },
      {
        name: 'React',
        badgeUrl:
          'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000',
      },
      {
        name: 'Next.js',
        badgeUrl:
          'https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white',
      },
      {
        name: 'Redux Toolkit',
        badgeUrl:
          'https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white',
      },
      {
        name: 'TanStack Query',
        badgeUrl:
          'https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white',
      },
      {
        name: 'Babylon.js',
        badgeUrl:
          'https://img.shields.io/badge/Babylon.js-BB464B?style=for-the-badge&logo=babylondotjs&logoColor=white',
      },
      {
        name: 'Vite',
        badgeUrl:
          'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white',
      },
    ],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform mobile products and native-feeling workflows.',
    skills: [
      {
        name: 'React Native',
        badgeUrl:
          'https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=000',
      },
      {
        name: 'Expo',
        badgeUrl:
          'https://img.shields.io/badge/Expo-000?style=for-the-badge&logo=expo&logoColor=white',
      },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, server logic, payments, and application foundations.',
    skills: [
      {
        name: 'Node.js',
        badgeUrl:
          'https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white',
      },
      {
        name: 'Express',
        badgeUrl:
          'https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white',
      },
      {
        name: 'Prisma',
        badgeUrl:
          'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white',
      },
      {
        name: 'PHP',
        badgeUrl:
          'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
      },
      {
        name: 'Laravel',
        badgeUrl:
          'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white',
      },
      {
        name: 'Stripe',
        badgeUrl:
          'https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white',
      },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational, document, and backend-as-a-service storage.',
    skills: [
      {
        name: 'PostgreSQL',
        badgeUrl:
          'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white',
      },
      {
        name: 'MySQL',
        badgeUrl:
          'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
      },
      {
        name: 'MongoDB',
        badgeUrl:
          'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
      },
      {
        name: 'Redis',
        badgeUrl:
          'https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white',
      },
      {
        name: 'Supabase',
        badgeUrl:
          'https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white',
      },
      {
        name: 'Firebase',
        badgeUrl:
          'https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white',
      },
    ],
  },
  {
    title: 'Testing',
    description:
      'Confidence through component, integration, and end-to-end tests.',
    skills: [
      {
        name: 'Cypress',
        badgeUrl:
          'https://img.shields.io/badge/Cypress-69D3A7?style=for-the-badge&logo=cypress&logoColor=white',
      },
      {
        name: 'Jest',
        badgeUrl:
          'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
      },
      {
        name: 'Testing Library',
        badgeUrl:
          'https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white',
      },
      {
        name: 'Pest',
        badgeUrl:
          'https://img.shields.io/badge/Pest-000000?style=for-the-badge&logo=pestphp&logoColor=white',
      },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    description:
      'Delivery, automation, source control, and production infrastructure.',
    wide: true,
    skills: [
      {
        name: 'Docker',
        badgeUrl:
          'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
      },
      {
        name: 'Git',
        badgeUrl:
          'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      },
      {
        name: 'Linux',
        badgeUrl:
          'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=000',
      },
      {
        name: 'CircleCI',
        badgeUrl:
          'https://img.shields.io/badge/CircleCI-343434?style=for-the-badge&logo=circleci&logoColor=white',
      },
      {
        name: 'Nginx',
        badgeUrl:
          'https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white',
      },
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
      '/grocery-shop-1.webp',
      '/grocery-shop-2.webp',
      '/grocery-shop-3.webp',
      '/grocery-shop-4.webp',
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
