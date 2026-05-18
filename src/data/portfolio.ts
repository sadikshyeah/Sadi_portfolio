export const portfolio = {
  name: 'Sadi',
  tagline: 'Building thoughtful digital experiences',
  role: 'Developer & Designer',
  location: 'Available for remote work',
  email: 'hello@sadi.dev',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  about: `I'm a creative developer who loves turning ideas into clean, accessible web experiences. I focus on performance, detail, and interfaces that feel effortless to use.`,
  skills: [
    'React & TypeScript',
    'Node.js',
    'UI / UX Design',
    'Responsive Web',
    'REST APIs',
    'Git & CI/CD',
    'Figma',
    'CSS & Animation',
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack shop with cart, checkout, and admin dashboard built with React and a REST API.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Flow App',
      description:
        'A minimalist productivity app with drag-and-drop boards, dark mode, and offline support.',
      tags: ['TypeScript', 'Vite', 'Local Storage'],
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio CMS',
      description:
        'A headless CMS template for creatives to manage projects and publish a personal site.',
      tags: ['Next.js', 'Tailwind', 'Sanity'],
      link: '#',
      github: '#',
    },
  ],
  experience: [
    {
      period: '2024 — Present',
      title: 'Freelance Developer',
      company: 'Self-employed',
      description: 'Designing and shipping websites and web apps for clients worldwide.',
    },
    {
      period: '2022 — 2024',
      title: 'Frontend Developer',
      company: 'Studio / Agency',
      description: 'Built responsive interfaces, design systems, and marketing sites.',
    },
  ],
} as const
