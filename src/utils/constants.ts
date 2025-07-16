import { Project, Skill } from "@/types";

// Default projects data for development
// BalanceBox, Attendance Manager, Blogs, AMYC, Don't Be Sad, Movie Recommendation mobile, vampire akinator
export const defaultProjects: Project[] = [
  // TODO: make balance box to be one repository
  {
    id: "1",
    title: "BalanceBox",
    description:
      "A finance management application for budgeting saving and keeping your finances in check",
    thumbnail:
      "/balanceboxsmall.png",
    category: "fullstack",
    technologies: ["React", "Express.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/bushraaksoy/BalanceBox.git",
    images: [
      "/balancebox3.png",
      "/balancebox2.png",
    ],
    fullDescription: "A mobile web application where users can manage their finances by budgeting all incomes, expenses and transactions. Users create virtual cards and assign them to incomes. Integrated with a personalized AI chatbot assistant for quick finance related questions.",
    challenges:
      "Implementing a responsive design that works across all devices while maintaining performance was challenging. Also had to optimize image loading for better user experience.",
  },
  {
    id: "2",
    title: "Attendance Manager",
    description:
      "University student portal with attendance management",
    thumbnail:
      "/attendanceportalcourse.png",
    category: "fullstack",
    technologies: ["React.js", "Node.js", "Express.js", "PostreSQL"],
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/bushraaksoy/AttendancePortal.git",
    images: [
      "/attendanceportalcourse.png",
      "/attendanceportaladmin.png",
    ],
    fullDescription: "A University portal for admins, teachers and students where they can manage their course schedules and students can log their attendance using a QR system.",
    challenges:
      "Implementing real-time updates using Socket.io while ensuring data consistency across multiple users was a significant challenge.",
  },
  {
    id: "3",
    title: "Personal Blogs",
    description:
      "A personal blogs publishing website",
    thumbnail:
      "/blogsblogpage.png",
    category: "frontend",
    technologies: ["React.js", "react markdown"],
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/bushraaksoy/Thoughts-Of-The-Heart.git",
    images: [
      "/blogsblogpage.png",
      "/blogshome.png",
    ],
    fullDescription:"A blogs reading website that shows blogs with their estimated reading time and utilizes markdown to html for styling.",
    challenges:
      "Creating intuitive and responsive data visualizations that work across different screen sizes was challenging.",
  },
  {
    id: "4",
    title: "BookWorm",
    description:
      "A library application where users can manage their personal book collections.",
    thumbnail:
      "/bookwormhome.png",
    category: "fullstack",
    technologies: ["React.js", "Node.js", "Express.js", "CSS"],
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/bushraaksoy/BookWorm.git",
    images: [
      "/bookwormhome.png",
      "/bwaddbook.png",
      "/bwafilter.png",
    ],
    fullDescription: "A personal library application where users can view their books, add new books, edit, delete and search books.",
    challenges:
      "Designing an intuitive recipe creation interface that works well for both novice and experienced users was a key challenge.",
  },
  {
    id: "5",
    title: "QuranBot",
    description:
      "A comforting AI chatbot that uses suitable verses from the quran to comfort.",
    thumbnail:
      "/quranbot2.png",
    category: "Machine Learning",
    technologies: ["Python", "Streanlit", "Pytorch", "Pandas"],
    demoUrl: "/quranbot1.png",
    sourceUrl: "/quranbot2.png",
    images: [
      "",
    ],
    fullDescription:"",
    challenges:
      "An AI chatbot that was trained using pre-trained models along with a custom dataset. The bot gives comforting verses from the quran in response to the user input.",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    category: "frontend",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/bushraaksoy/Portfolio.git",
    images: [
    ],
    fullDescription:
      "A modern portfolio website built with React and animated with Framer Motion. Features include project showcases, skills section, contact form, and responsive design.",
    challenges:
      "Creating smooth animations that enhance the user experience without being distracting was a key focus of this project.",
  },
];

  export const placeholderProject = {
    id: "1",
    title: "E-commerce Website Redesign",
    thumbnail:       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    fullDescription:
      "This project involved a comprehensive redesign of an existing e-commerce platform. The goal was to improve user experience, increase conversion rates, and modernize the visual design while maintaining brand identity. The redesign included a streamlined checkout process, improved product filtering, and a responsive design that works seamlessly across all devices.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    challenges:
      "The main challenge was maintaining the existing functionality while completely overhauling the user interface. Additionally, we needed to ensure the site remained fast and responsive despite adding new features.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
    demoUrl: "https://example.com",
    sourceUrl: "https://github.com/example/project",
  };


  export const defaultSkills: Skill[] = [
  // Frontend
  { name: "React", level: 90, years: 2, category: "frontend" },
  { name: "TypeScript", level: 70, years: 1, category: "frontend" },
  { name: "JavaScript", level: 85, years: 2, category: "frontend" },
  { name: "HTML/CSS", level: 98, years: 4, category: "frontend" },
  { name: "Bootstrap", level: 80, years: 2, category: "frontend" },
  { name: "Tailwind CSS", level: 90, years: 2, category: "frontend" },
  // { name: "Next.js", level: 85, years: 2, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, years: 1, category: "backend" },
  { name: "Express", level: 85, years: 1, category: "backend" },
  { name: "PostgreSQL", level: 85, years: 1, category: "backend" },
  { name: "Prisma ORM", level: 80, years: 1, category: "backend" },
  // { name: "MongoDB", level: 75, years: 3, category: "backend" },
  // { name: "GraphQL", level: 65, years: 1, category: "backend" },
  // { name: "Firebase", level: 80, years: 3, category: "backend" },

  // Design
  { name: "Figma", level: 65, years: 1, category: "design" },
  // { name: "Adobe XD", level: 75, years: 2, category: "design" },
  // { name: "UI/UX Design", level: 80, years: 4, category: "design" },
  { name: "Responsive Design", level: 85, years: 3, category: "design" },

  // Tools
  { name: "Git", level: 80, years: 3, category: "tools" },
  { name: "VS Code", level: 95, years: 3, category: "tools" },
  // { name: "Docker", level: 70, years: 2, category: "tools" },
  // { name: "Jest", level: 75, years: 3, category: "tools" },
  // { name: "CI/CD", level: 65, years: 2, category: "tools" },
  // { name: "Webpack", level: 70, years: 3, category: "tools" },
];
