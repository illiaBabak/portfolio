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
  title: 'Full-Stack Developer',
  email: 'illiababak776@gmail.com',
  phone: '+48 884 959 918',
  portrait: '/photo.jpg',
  shortIntro:
    'Full-Stack Developer with over 3 years of commercial experience building web, mobile, and backend applications with React, TypeScript, React Native, PHP, and Node.js/Express.',
  about:
    'I build complete features, from user interfaces and APIs to business logic, integrations, and deployment. I have hands-on experience with production systems, microservices, Docker, Kubernetes, Terraform, and AWS. I focus on scalability, performance, code quality, and system reliability.',
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
        name: 'Tailwind CSS',
        badgeUrl:
          'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
      },
    ],
  },

  {
    title: 'Backend',
    description: 'APIs, server logic and application foundations.',
    skills: [
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
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    description:
      'Delivery, automation, source control, and production infrastructure.',
    skills: [
      {
        name: 'AWS',
        badgeUrl:
          'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white',
      },
      {
        name: 'Kubernetes',
        badgeUrl:
          'https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white',
      },
      {
        name: 'Terraform',
        badgeUrl:
          'https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white',
      },
      {
        name: 'Docker',
        badgeUrl:
          'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
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
    location: 'Zhytomyr, Ukraine',
    dateRange: 'May 2023 - May 2026',
    description:
      'Built and supported web applications and backend services for transportation estimates, real-time video communication, and production workflows.',
    achievements: [
      'Developed React, TypeScript, and React Query interfaces, employee dashboards, internal tools, and workflows integrated with data from multiple services.',
      'Co-developed a moving and transportation cost estimation platform using item weight, volume, value, packing requirements, route parameters, and other operational data.',
      'Built PHP and Node.js/Express services with business logic, APIs, validation, data processing, external integrations, and communication between microservices.',
      'Developed calculation, item management, and quotation modules connected to the main application and external systems.',
      'Worked on a real-time video platform that let operators gather information from customers for accurate transportation estimates.',
      'Co-developed image and video processing that turned call recordings into structured item inventories.',
      'Integrated an AI object recognition service and used its results to estimate item type, quantity, weight, value, and packaging requirements.',
      'Developed PDF and Excel exports for quotations, transportation data, and automatically prepared item inventories.',
      'Participated in service deployment with Docker and Kubernetes, and worked with Terraform and AWS infrastructure.',
      'Supported production applications through log analysis, incident response, and on-call diagnosis of backend, integration, and service communication issues.',
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
      'Docker',
      'Kubernetes',
      'Terraform',
      'AWS',
    ],
    logoText: 'NV',
  },
  {
    company: 'Freelancehunt',
    role: 'Frontend Developer',
    employmentType: 'Freelance',
    location: 'Ukraine',
    dateRange: 'Jan 2023 - May 2023',
    description:
      'Developed responsive and dynamic React and TypeScript applications for freelance clients.',
    achievements: [
      'Developed responsive and dynamic web applications using React and TypeScript.',
      'Optimized performance with code splitting, lazy loading, and memoization.',
      'Translated Figma, Adobe XD, and Sketch designs into pixel-perfect, interactive React applications.',
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'Performance', 'Figma'],
    logoText: 'FH',
  },
];
