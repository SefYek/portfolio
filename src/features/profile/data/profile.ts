import type { Profile } from "@/src/features/profile/types/profile";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const profile: Profile = {
  name: "AmirHossein Mohammadi",
  role: "Front End Developer",
  email: "codesefyek@gmail.com",
  phone: "+98 901-426-0208",
  summary:
    "I build clean, responsive, and scalable web interfaces with a focus on thoughtful user experience and polished implementation.",
  highlights: [
    "Building fast, clean, and scalable user interfaces",
    "Working with React, Next.js, TypeScript, and MUI",
    "Interested in product design and practical user experience",
  ],
  about: [
    "I am a front-end developer who enjoys turning product ideas into precise, usable, and visually balanced interfaces.",
    "This portfolio is structured to grow with real projects, case studies, a resume download, and dedicated pages when needed.",
  ],
  skills: [
    {
      name: "HTML",
      description:
        "Comfortable writing semantic, accessible markup and structuring pages clearly.",
    },
    {
      name: "CSS",
      description:
        "Experienced with responsive layouts, visual polish, spacing systems, and animations.",
    },
    {
      name: "JavaScript",
      description:
        "Confident with modern ES features, DOM logic, async flows, and UI interactions.",
    },
    {
      name: "React",
      description:
        "Strong day-to-day experience building reusable components and managing UI state.",
    },
    {
      name: "Next.js",
      description:
        "Able to build App Router pages, layouts, metadata, and production-ready structure.",
    },
    {
      name: "TypeScript",
      description:
        "Use it to make props, data models, and component contracts safer and clearer.",
    },
    {
      name: "MUI",
      description:
        "Comfortable customizing themes, sx styles, reusable components, and responsive UI.",
    },
    {
      name: "Git",
      description:
        "Use version control for everyday branching, commits, and project maintenance.",
    },
    {
      name: "GitHub",
      description:
        "Comfortable managing repositories, reviewing changes, and sharing project work.",
    },
    {
      name: "Tailwind CSS",
      description:
        "Experienced with utility-first styling and translating designs into responsive views.",
    },
    {
      name: "Figma",
      description:
        "Can read designs, inspect spacing and typography, and collaborate on UI details.",
    },
  ],
  projects: [
    {
      title: "Full-Time Front-End Developer",
      company: "CRoom",
      type: "Current Role",
      year: "06/2025 - Present --> 1 year",
      description:
        "Currently working full-time as a front-end developer, contributing to production interfaces and improving real-world application features.",
    },
    {
      title: "Full Front-End Company Management Platform",
      company: "Persino",
      type: "Front-End Project at Azhman",
      year: "01/2025 - 05/2025 --> 6 months",
      description:
        "Designed the UI/UX and built the full front-end independently for a company management platform. The product had a separate back-end, while my responsibility was the complete client-side experience, including monitoring views and React Flow based interfaces.",
    },

    {
      title: "Front-End Internship",
      company: "FewTech",
      type: "Internship",
      year: "07/2024 - 12/2024 -->6 months",
      description:
        "Continued front-end training in a company environment, focusing on responsive UI development, cleaner implementation, and practical React patterns.",
    },
    {
      title: "Front-End Internship",
      company: "BioArk",
      type: "Internship",
      year: "01/2024 - 06/2024 --> 6 months",
      description:
        "Worked as a front-end intern, practiced real project workflows, improved component-building skills, and gained experience collaborating inside a software team.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};
