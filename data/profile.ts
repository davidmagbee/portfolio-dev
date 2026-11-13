/**
 * Authored portfolio content, kept separate from presentation for easy review.
 * Past work follows the evidence register in docs/CONTENT-SOURCES.md. Career
 * direction reflects the owner's current goals, rather than a past-work claim.
 */
export const profile = {
  name: 'David Magbee',
  role: 'Senior Software Engineer',
  email: 'david.magbee@me.com',
  github: 'https://github.com/davidmagbee',
  linkedin: 'https://www.linkedin.com/in/davidmagbee/',
  // Existing booking listing, resolved from the approved short link to avoid its interstitial.
  scheduler:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zhseEQuh1nt6ba0PxGEwwmyxD_Fxua2i698EjDwkBTCTzYAVrsVXPqDMGYl4MtVFAIPHnf9_b',
  summary:
    'I build full-stack products with TypeScript, React, and Node.js, from product requirements and system architecture through implementation, testing, and release.',
};

/** Source-reported employment; month-level dates avoid invented precision. */
export interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  summary: string;
  points: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    id: 'cookie-finance',
    company: 'Cookie Finance',
    role: 'Senior Software Engineer',
    dates: 'Mar 2025 — Sep 2026',
    summary:
      'Product and platform engineering across creator services, onboarding, tax recommendations, and financial workflows.',
    points: [
      'Built Creator Business Essentials experiences and the upgrade path to full-service Core accounts.',
      'Reworked onboarding around shared dependencies, with inspection tools, dry-run migrations, and rollback controls.',
      'Co-architected a tax recommendation backend that integrated the data team’s internal model, with strategy-specific mappings and monthly eligibility processing.',
      'Delivered account settings and billing improvements, worked on Plaid/Tight integrations, and supported QA, UAT, and release stabilization.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'freelance',
    company: 'Freelance / Contract',
    role: 'Software Engineer',
    dates: 'Mar 2020 — Present',
    summary: 'Full-stack web and SaaS work for healthcare, nonprofit, and technology clients.',
    points: [
      'Translate client needs and business workflows into product requirements, architecture, and working applications.',
      'Own implementation, testing, deployment, and support while managing scope, timelines, and technical communication.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'enerflo',
    company: 'Enerflo',
    role: 'Senior Software Developer',
    dates: 'Apr 2023 — Jun 2023',
    summary: 'SaaS product development across frontend interfaces and backend integrations.',
    points: [
      'Built React and TypeScript features integrating GraphQL, Nest.js, PostgreSQL, and gRPC APIs.',
      'Reviewed pull requests, contributed to architecture, and worked with product and executive stakeholders.',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    id: 'flare',
    company: 'Flare Network',
    role: 'Head of Developer Relations',
    dates: 'Aug 2021 — Oct 2021',
    summary: 'Developer relations for the Songbird network launch and developer community.',
    points: [
      'Created developer-focused technical documentation and developed a partnership roadmap.',
    ],
    stack: ['Developer relations', 'Technical documentation'],
  },
  {
    id: 'general-assembly',
    company: 'General Assembly',
    role: 'Software Engineering Lead Instructor',
    dates: 'Apr 2020 — Feb 2023',
    summary: 'Full-stack software engineering instruction and student mentorship.',
    points: [
      'Mentored students through the software engineering immersive with individual and group instruction.',
      'Led an instructional team and adapted curriculum delivery to each cohort’s needs.',
    ],
    stack: ['Full-stack development', 'Mentorship', 'Technical instruction'],
  },
  {
    id: 'verden',
    company: 'The Verden Group',
    role: 'Consultant / Web Developer / Special Projects',
    dates: 'May 2016 — Jan 2019',
    summary: 'Healthcare practice launches, provider websites, and operational workflows.',
    points: [
      'Coordinated practice launches and medical board credentialing, built provider websites, and redesigned client onboarding processes.',
    ],
    stack: ['Web development', 'Business analysis', 'Workflow design'],
  },
];

/**
 * Statuses may overlap: a live foundation can still have features in development.
 * An empty list makes no live/development assertion; a public repository can
 * still be shown as source available. Missing destinations are intentional.
 */
export type ProjectStatus = 'Live' | 'In development';

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  statuses: ProjectStatus[];
  summary: string;
  detail: string;
  stack: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  caption: string;
  href?: string;
  repository?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'repairvantage',
    title: 'RepairVantage',
    eyebrow: 'Repair projects, from plan to progress',
    statuses: ['Live', 'In development'],
    summary:
      'A private workspace for repair projects, with owner-controlled sharing and unlisted Showcase links.',
    detail:
      'The live foundation supports project editing, invitations, comments, and unlisted Showcase links. Task assignment, inventory, scheduling, and reports are implemented on the development branch and await release.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Better Auth', 'Prisma', 'PostgreSQL'],
    image: '/projects/repairvantage.jpg',
    imageWidth: 1272,
    imageHeight: 716,
    alt: 'Earlier RepairVantage prototype dashboard with demonstration project totals, deadlines, and activity',
    caption: 'Earlier prototype screenshot · demonstration data',
    href: 'https://repairvantage.davidmagbee.com/',
    repository: 'https://github.com/davidmagbee/RepairVantage',
  },
  {
    id: 'small-wins',
    title: 'Small Wins',
    eyebrow: 'A focused task workspace',
    statuses: ['Live'],
    summary:
      'Private task lists with guest and account workspaces, search and status filters, and keyboard commands.',
    detail:
      'Built with TanStack Start and PostgreSQL. Tasks support priorities, due dates, and tags; email-code sign-in switches to an account list. Guest and account tasks stay separate.',
    stack: ['React', 'TypeScript', 'TanStack Start', 'PostgreSQL', 'Better Auth'],
    image: '/projects/small-wins.jpg',
    imageWidth: 544,
    imageHeight: 858,
    alt: 'Small Wins guest workspace with search, status filters, and a task creation form',
    caption: 'Actual app · guest task workspace',
    href: 'https://small-wins-davidmagbee.vercel.app/',
    repository: 'https://github.com/davidmagbee/small-wins',
  },
  {
    id: 'redwood',
    title: 'Where in the Hell Is Redwood, NY?',
    eyebrow: 'A home for a small community',
    statuses: ['In development'],
    summary:
      'A community website for Redwood, New York, bringing local events and reviewed publishing into one place.',
    detail:
      'The development app includes event search, accounts and roles, staff review, and protected owner access. History, photos, notices, and the fuller calendar experience remain part of the launch roadmap.',
    stack: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Better Auth'],
    image: '/projects/redwood-development.jpg',
    imageWidth: 1280,
    imageHeight: 1942,
    alt: 'Redwood development homepage with a preview notice, community introduction, and event search',
    caption: 'Actual development preview · synthetic demonstration events',
  },
];

/** Grouped capabilities describe context, without invented proficiency scores. */
export const skillGroups: { title: string; items: string[]; note: string }[] = [
  {
    title: 'Interfaces',
    items: ['TypeScript', 'React', 'Next.js', 'HTML / CSS', 'Tailwind CSS'],
    note: 'Customer-facing products, account flows, and reusable interfaces.',
  },
  {
    title: 'Systems & data',
    items: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'Prisma'],
    note: 'Workflow architecture, integrations, data access, and migration tooling.',
  },
  {
    title: 'Product & delivery',
    items: ['System architecture', 'Business analysis', 'Testing', 'QA / UAT', 'Mentorship'],
    note: 'From understanding a problem through implementation and release.',
  },
  {
    title: 'AI-assisted development',
    items: ['Codex', 'Agent skills', 'Engineering harnesses', 'Context management'],
    note: 'Current development practice and a direction I’m continuing to deepen.',
  },
];

/**
 * Curated, authored navigation answers. This guide performs no generation,
 * screening, or retrieval, and must not be presented as an AI conversation.
 */
export const guideEntries: {
  id: string;
  question: string;
  answer: string;
  href: string;
  label: string;
}[] = [
  {
    id: 'work',
    question: 'What kind of work do you do?',
    answer:
      'I work across the stack: product interfaces, backend workflows, integrations, and delivery. At Cookie Finance, that included creator services, dependency-driven onboarding, and tax recommendations.',
    href: '#experience',
    label: 'Explore my experience',
  },
  {
    id: 'projects',
    question: 'What are you building now?',
    answer:
      'RepairVantage is a repair-project workspace. Small Wins is a private task app. I’m also developing a community website for Redwood, New York. Each project below distinguishes live work from development.',
    href: '#work',
    label: 'See the projects',
  },
  {
    id: 'ai',
    question: 'How does AI fit into your work?',
    answer:
      'I use Codex for implementation, debugging, testing, review, and research, supported by agent skills and engineering harnesses. At Cookie Finance, I co-architected a recommendation backend integrating the data team’s internal model. I’m continuing toward deeper AI engineering work.',
    href: '#direction',
    label: 'See where I’m heading',
  },
  {
    id: 'next',
    question: 'What are you looking for next?',
    answer:
      'Senior full-stack and product engineering work, with room to grow in AI engineering and system architecture.',
    href: '#direction',
    label: 'Explore my direction',
  },
  {
    id: 'teams',
    question: 'How do you work with a team?',
    answer:
      'My background includes client delivery, code review, developer relations, and leading software engineering instruction. I’ve worked with product and executive stakeholders to turn product goals into shipped features.',
    href: '#contact',
    label: 'Start a conversation',
  },
];
