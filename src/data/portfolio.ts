import profilePhoto from '../assets/profile.png'

export const portfolio = {
  name: 'Sadi Parajuli',
  shortName: 'Sadi',
  profilePhoto,
  profilePhotoAlt: 'Professional headshot of Sadi Parajuli',
  tagline:
    'Final-year IT student building full-stack apps — open to internship opportunities',
  role: 'Information Technology Student',
  location: 'Helsinki, Finland · Haaga-Helia',
  school: 'Haaga-Helia University of Applied Sciences',
  degree: 'Bachelor of Information Technology (final year)',
  about: `I'm Sadi Parajuli, a final-year Information Technology student at Haaga-Helia in Helsinki. I enjoy building reliable backend services and clean, responsive frontends — from Spring Boot APIs with PostgreSQL to React + TypeScript UIs.

I've shipped course projects and a Scrum-based team app, and I'm actively looking for internship opportunities where I can learn, contribute, and grow as a developer.`,
  social: {
    github: 'https://github.com/sadikshyeah',
    linkedin: 'https://www.linkedin.com/in/sadi-parajuli-96a6a125a/',
  },
  skills: [
    'Java & Spring Boot',
    'Spring Security & JPA',
    'PostgreSQL',
    'React & TypeScript',
    'REST APIs',
    'Thymeleaf',
    'HTML & CSS',
    'Git & GitHub',
    'Scrum & Team Projects',
    'Vercel & Render',
  ],
  projects: [
    {
      title: 'Sadiverse',
      context: 'Backend Development course',
      description:
        'A full-stack learning app focused on backend development where users practice Finnish vocabulary by level (A1–C2). Includes secure authentication, email verification, and admin tooling. Built with Spring Boot 4, Thymeleaf, Spring Security, Spring Data JPA, and PostgreSQL.',
      tags: [
        'Spring Boot',
        'PostgreSQL',
        'Spring Security',
        'Thymeleaf',
        'JPA',
      ],
      link: 'https://sadiverse.com/login',
      github: null,
    },
    {
      title: 'Personal Trainer',
      context: 'Frontend Development course',
      description:
        'A React + TypeScript app for managing customers and training sessions. Manage customers and sessions (add, edit, delete), view all trainings in a calendar, see activity-based training statistics, and a dashboard with totals.',
      tags: ['React', 'TypeScript', 'Vite', 'Calendar', 'Dashboard'],
      link: 'https://personal-trainer-vercel-fawn.vercel.app/',
      github: null,
    },
    {
      title: 'Quizzer UI',
      context: 'Group project · Scrum',
      description:
        'The user interface for Quizzer — a web app that helps teachers and students learn through interactive quizzes. Connects to the Quizzer backend REST API with a responsive UI for managing and completing quizzes. Delivered iteratively in a Scrum team aligned with the Product Owner’s vision.',
      tags: ['React', 'TypeScript', 'REST API', 'Scrum', 'Render'],
      link: 'https://quizzer-ui.onrender.com/',
      github: 'https://github.com/The-Five-Stack/quizzer-ui',
    },
  ],
  experience: [
    {
      period: '2022 — Present',
      title: 'Bachelor of Information Technology',
      company: 'Haaga-Helia University of Applied Sciences',
      description:
        'Final-year student in Helsinki, studying software development, databases, backend and frontend technologies, and agile team delivery.',
    },
    {
      period: 'Coursework',
      title: 'Full-stack & team projects',
      company: 'Haaga-Helia',
      description:
        'Built Sadiverse (Spring Boot backend focus), Personal Trainer (React frontend), and Quizzer UI (group Scrum project) — see Projects for details and live demos.',
    },
  ],
  highlights: [
    { value: 'Final year', label: 'At Haaga-Helia' },
    { value: '3', label: 'Shipped projects' },
    { value: 'Open', label: 'To internships' },
  ],
} as const
