import type {
  JourneyMilestone,
  NavItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const portfolioIdentity = {
  name: "Sujal Gadhave",
  role: "Full-Stack Java Developer",
  location: "Maharashtra, India",
  github: "https://github.com/SujalGadhave",
  email: "mailto:sujalgadhave009@gmail.com",
  linkedin: "https://www.linkedin.com/in/sujalgadhave",
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: portfolioIdentity.github },
  { label: "LinkedIn", href: portfolioIdentity.linkedin },
  { label: "Email", href: portfolioIdentity.email },
];

export const aboutPoints = [
  "Engineering student and builder focused on practical, secure software systems.",
  "Core strength in Java, Spring Boot, and backend architecture, with growing full-stack execution using React.",
  "Currently learning deeper system design, microservices patterns, and production-quality authentication flows.",
  "Interests: Java, Spring Boot, React, Full Stack Development, Backend Systems, Authentication Systems, Gaming, and Problem Solving.",
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    level: "Intermediate",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    level: "Advanced",
    items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    level: "Intermediate",
    items: ["MySQL", "JPA/Hibernate", "SQL", "H2"],
  },
  {
    title: "Tools",
    level: "Intermediate",
    items: ["Git", "Postman", "Swagger", "Maven", "IntelliJ IDEA"],
  },
  {
    title: "Languages",
    level: "Advanced",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "DevOps Basics",
    level: "Learning",
    items: ["Docker", "GitHub Actions", "CI/CD", "Containerized services"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Stayfinder",
    repo: "https://github.com/SujalGadhave/Stayfinder",
    summary:
      "Production-style Spring Boot backend for a hotel booking platform with secure auth, pricing strategy modules, and Stripe integration.",
    stack: [
      "Java 17",
      "Spring Boot 3.4",
      "Spring Security",
      "MySQL",
      "JWT",
      "Stripe",
      "Swagger",
    ],
    architecture: [
      "Layered architecture (Controller/Service/Repository)",
      "Strategy pattern for smart pricing engine",
      "Role-based route protection with Spring Security",
    ],
    features: [
      "Access + refresh token auth flow",
      "Inventory-aware booking lifecycle",
      "Payment webhook handling",
      "OpenAPI docs and standardized error handling",
    ],
    category: "backend",
  },
  {
    name: "AI Smart Crop Advisory",
    repo: "https://github.com/SujalGadhave/AI-Smart-Crop-Advisory",
    summary:
      "Three-tier full-stack prototype combining Spring Boot APIs, React frontend, and FastAPI-based disease prediction flow.",
    stack: [
      "Spring Boot",
      "React + Vite",
      "FastAPI",
      "MySQL",
      "Tailwind CSS",
      "JWT",
      "Docker Compose",
    ],
    architecture: [
      "Frontend/backend/AI service split",
      "JWT-secured APIs with advisory + market + weather modules",
      "Demo-friendly seeded model pipeline",
    ],
    features: [
      "Crop disease detection with confidence output",
      "Rule-based advisory recommendations",
      "Localized UX support (English/Hindi/Marathi)",
      "Containerized local demo environment",
    ],
    category: "fullstack",
  },
  {
    name: "Employee Management System",
    repo: "https://github.com/SujalGadhave/employee-management-system",
    summary:
      "Full-stack employee management platform with role-aware operations and JWT-protected APIs.",
    stack: ["Spring Boot", "Spring Security", "React", "Vite", "MySQL", "JWT"],
    architecture: [
      "Separated backend and frontend modules",
      "Role-based access control for admin/user actions",
      "Axios interceptor-based auth handling",
    ],
    features: [
      "Employee CRUD with validation",
      "Pagination, sorting, and search",
      "Protected routes with role-aware UI",
    ],
    category: "fullstack",
  },
  {
    name: "Auth Service Encrypt Decrypt",
    repo: "https://github.com/SujalGadhave/auth-service-encrypt-decrypt",
    summary:
      "Security-focused authentication service with encryption/decryption endpoints and RBAC-oriented design.",
    stack: ["Java", "Spring Boot", "Spring Security", "JPA", "AES", "JWT"],
    architecture: [
      "Modular controller/service/repository structure",
      "Cryptographic utility layer for secure transforms",
      "Token-based authentication boundary",
    ],
    features: [
      "Auth endpoints for login and token issuance",
      "Dedicated encrypt/decrypt API flows",
      "Password hashing and input validation",
    ],
    category: "backend",
  },
  {
    name: "Stats.fm Clone",
    repo: "https://github.com/SujalGadhave/stats-fm-clone",
    summary:
      "Next.js learning project used to explore modern frontend architecture, layout systems, and component composition.",
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    architecture: [
      "App Router project structure",
      "Component-driven page composition",
      "Client-side UI interaction patterns",
    ],
    features: ["Modern dashboard-style UI", "Responsive layout foundations"],
    category: "frontend",
  },
  {
    name: "Core Java Learnings",
    repo: "https://github.com/SujalGadhave/core-java-learnings",
    summary:
      "Focused Java problem-solving and language fundamentals repository covering OOP and core backend logic practice.",
    stack: ["Java"],
    architecture: [
      "Modular topic-wise exercises",
      "Practice-driven repository structure",
    ],
    features: [
      "Hands-on Java fundamentals",
      "Problem-solving oriented implementations",
    ],
    category: "backend",
  },
];

export const journey: JourneyMilestone[] = [
  {
    title: "Started with Core Java",
    time: "Foundation Phase",
    details: "Built console and desktop-style applications while strengthening OOP and DSA basics.",
  },
  {
    title: "Moved into Spring Boot",
    time: "Backend Growth",
    details: "Focused on REST architecture, security, data persistence, and production-minded API design.",
  },
  {
    title: "Expanded to Full Stack",
    time: "Execution Phase",
    details: "Integrated React frontends with Java backends to build complete, deployable applications.",
  },
  {
    title: "Current Focus",
    time: "Now",
    details: "System design, authentication robustness, microservices readiness, and engineer-level code quality.",
  },
];

