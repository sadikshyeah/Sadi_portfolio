import profilePhoto from '../assets/profile.png'
import sadiverseWelcome from '../assets/sadiverse-welcome.png'
import sadiverseLearn from '../assets/sadiverse-learn.png'
import sadiverseAdmin from '../assets/sadiverse-admin.png'
import sadiverseEdit from '../assets/sadiverse-edit.png'
import personalTrainerDashboard from '../assets/personal-trainer-dashboard.png'
import personalTrainerCustomers from '../assets/personal-trainer-customers.png'
import personalTrainerStats from '../assets/personal-trainer-stats.png'
import quizzerQuizzes from '../assets/quizzer-quizzes.png'
import quizzerCreateQuiz from '../assets/quizzer-create-quiz.png'
import quizzerCategories from '../assets/quizzer-categories.png'
import quizzerAddCategory from '../assets/quizzer-add-category.png'

export const portfolio = {
  name: 'Sadi Parajuli',
  shortName: 'Sadi',
  profilePhoto,
  profilePhotoAlt: 'Professional headshot of Sadi Parajuli',
  tagline:
    'Final-year IT student building full-stack apps, open to internship opportunities',
  role: 'Information Technology Student',
  location: 'Helsinki, Finland · Haaga-Helia',
  school: 'Haaga-Helia University of Applied Sciences',
  degree: 'Bachelor of Information Technology (final year)',
  about: `I'm Sadi Parajuli, a final-year Information Technology student at Haaga-Helia in Helsinki. I enjoy building reliable backend services and clean, responsive frontends, from Spring Boot APIs with PostgreSQL to React + TypeScript UIs.

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
      images: [
        {
          src: sadiverseWelcome,
          alt: 'Sadiverse welcome screen with Finnish level selection',
        },
        {
          src: sadiverseLearn,
          alt: 'Sadiverse vocabulary learning view with Finnish word and example',
        },
        {
          src: sadiverseAdmin,
          alt: 'Sadiverse admin word list with edit and delete actions',
        },
        {
          src: sadiverseEdit,
          alt: 'Sadiverse admin edit word form',
        },
      ],
    },
    {
      title: 'Personal Trainer',
      context: 'Frontend Development course',
      description:
        'A React + TypeScript app for managing customers and training sessions. Manage customers and sessions (add, edit, delete), view all trainings in a calendar, see activity-based training statistics, and a dashboard with totals.',
      tags: ['React', 'TypeScript', 'Vite', 'Calendar', 'Dashboard'],
      link: 'https://personal-trainer-vercel-fawn.vercel.app/',
      github: null,
      images: [
        {
          src: personalTrainerDashboard,
          alt: 'Personal Trainer dashboard with daily motivation and key metrics',
        },
        {
          src: personalTrainerCustomers,
          alt: 'Personal Trainer customer list with add customer form',
        },
        {
          src: personalTrainerStats,
          alt: 'Personal Trainer dashboard with customer and training statistics',
        },
      ],
    },
    {
      title: 'Quizzer UI',
      context: 'Group project · Scrum',
      description:
        'The user interface for Quizzer — a web app that helps teachers and students learn through interactive quizzes. Connects to the Quizzer backend REST API with a responsive UI for managing and completing quizzes. Delivered iteratively in a Scrum team aligned with the Product Owner’s vision.',
      tags: ['React', 'TypeScript', 'REST API', 'Scrum', 'Render'],
      link: 'https://quizzer-ui.onrender.com/',
      github: 'https://github.com/The-Five-Stack/quizzer-ui',
      images: [
        {
          src: quizzerQuizzes,
          alt: 'Quizzer quiz management dashboard with published and draft quizzes',
        },
        {
          src: quizzerCreateQuiz,
          alt: 'Quizzer create quiz form with course code and category',
        },
        {
          src: quizzerCategories,
          alt: 'Quizzer category management table',
        },
        {
          src: quizzerAddCategory,
          alt: 'Quizzer add category form',
        },
      ],
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
        'Built Sadiverse (Spring Boot backend focus), Personal Trainer (React frontend), and Quizzer UI (group Scrum project), see Projects for details and live demos.',
    },
  ],
  highlights: [
    { value: 'Final year', label: 'At Haaga-Helia' },
    { value: '3', label: 'Shipped projects' },
    { value: 'Open', label: 'To internships' },
  ],
} as const
