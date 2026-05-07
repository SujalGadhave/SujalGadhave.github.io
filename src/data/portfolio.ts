import type {
  HeroStat,
  JourneyMilestone,
  NavItem,
  PhilosophyPoint,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const portfolioIdentity = {
  name: "Sujal Gadhave",
  role: "Backend-Focused Full-Stack Engineer",
  location: "Maharashtra, India",
  github: "https://github.com/SujalGadhave",
  email: "mailto:sujalgadhave009@gmail.com",
  linkedin: "https://www.linkedin.com/in/sujalgadhave",
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "philosophy", label: "Philosophy" },
  { id: "skills", label: "Skills" },
  { id: "stack-wall", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: portfolioIdentity.github },
  { label: "LinkedIn", href: portfolioIdentity.linkedin },
  { label: "Email", href: portfolioIdentity.email },
];

export const heroStats: HeroStat[] = [
  { label: "Public Repositories", value: "22+" },
  { label: "Primary Domain", value: "Java + Spring Boot" },
  { label: "Focus", value: "Security-First Backend" },
];

export const aboutPoints = [
  "Software engineering student building backend-heavy systems with practical architecture discipline.",
  "Strong focus on Java and Spring Boot, with full-stack integration experience using React.",
  "Interested in resilient APIs, authentication boundaries, and maintainable service-layer design.",
  "Currently sharpening system design, microservices readiness, and production engineering fundamentals.",
];

export const philosophy: PhilosophyPoint[] = [
  {
    title: "Clean Architecture Before Complexity",
    description:
      "Controllers stay lean, business logic stays in services, and data access stays explicit. Structure is treated as a feature.",
  },
  {
    title: "Security Is Not a Patch",
    description:
      "JWT flow design, role-based authorization, and encryption decisions are integrated early instead of added late.",
  },
  {
    title: "Scale Through Clarity",
    description:
      "Readable modules, predictable APIs, and clear naming conventions are used to support future growth and onboarding.",
  },
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

export const stackWall = [
  "Java 17",
  "Spring Boot",
  "Spring Security",
  "JPA/Hibernate",
  "JWT",
  "AES Encryption",
  "MySQL",
  "REST APIs",
  "OpenAPI / Swagger",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Docker Compose",
  "GitHub Actions",
];

export const projects: ProjectItem[] = [
  {
    name: "Stayfinder",
    repo: "https://github.com/SujalGadhave/Stayfinder",
    status: "private-demo",
    summary:
      "Production-style hotel booking backend with modular pricing logic, secure authentication, and payment workflow integration.",
    problem:
      "Booking systems require dependable authentication, pricing flexibility, and a secure transaction flow across multiple user roles.",
    architectureSummary:
      "Layered Spring Boot architecture with dedicated auth, booking, room, inventory, and reporting boundaries.",
    complexity:
      "High: multi-step booking lifecycle, strategy-driven pricing, webhook events, and RBAC enforcement.",
    backendStrength:
      "Advanced service orchestration and domain modeling for inventory, bookings, pricing, and role-protected operations.",
    securityHighlights: [
      "JWT access and refresh token pipeline",
      "Role-based route protection for admin and user surfaces",
      "Controlled webhook handling for payment confirmations",
    ],
    keyFeatures: [
      "Strategy pattern for dynamic room pricing",
      "Inventory-aware room availability handling",
      "Swagger/OpenAPI documentation with standardized errors",
    ],
    stack: [
      "Java 17",
      "Spring Boot 3.4",
      "Spring Security",
      "MySQL",
      "Stripe",
      "Swagger",
    ],
    category: "backend",
    gradient: "from-cyan-500/30 via-sky-500/10 to-transparent",
  },
  {
    name: "AI Smart Crop Advisory",
    repo: "https://github.com/SujalGadhave/AI-Smart-Crop-Advisory",
    status: "private-demo",
    summary:
      "Three-tier engineering prototype connecting Spring Boot APIs, React UX, and FastAPI-based crop disease inference.",
    problem:
      "Farm advisory tools need a reliable way to combine detection, contextual guidance, and multilingual access in one workflow.",
    architectureSummary:
      "Split architecture with React frontend, Spring Boot service layer, and dedicated FastAPI prediction microservice.",
    complexity:
      "High: multi-service orchestration, domain-specific responses, and operational local setup using Docker Compose.",
    backendStrength:
      "Secure endpoint design for auth, advisory, weather, and market data under one API platform.",
    securityHighlights: [
      "JWT-protected application endpoints",
      "Service-to-service interaction boundaries",
      "Controlled demo data fallback behavior",
    ],
    keyFeatures: [
      "Disease detection with confidence scoring",
      "Rule-based crop advisories and market data integration",
      "Localized UI flow (English, Hindi, Marathi)",
    ],
    stack: [
      "Spring Boot",
      "React + Vite",
      "FastAPI",
      "MySQL",
      "Tailwind CSS",
      "Docker Compose",
    ],
    category: "ai",
    gradient: "from-emerald-500/30 via-cyan-500/10 to-transparent",
  },
  {
    name: "Employee Management System",
    repo: "https://github.com/SujalGadhave/employee-management-system",
    status: "private-demo",
    summary:
      "Full-stack employee platform with role-aware operations, secured API access, and structured CRUD workflows.",
    problem:
      "Typical admin systems fail when role restrictions and clean access boundaries are not enforced from API to UI.",
    architectureSummary:
      "Spring Boot backend and React frontend split into independent modules with JWT-aware API communication.",
    complexity:
      "Medium-High: authorization-sensitive CRUD, search/pagination flows, and multi-role interface behavior.",
    backendStrength:
      "Strong API layer with protected endpoints, validation, and clear role-ownership boundaries.",
    securityHighlights: [
      "JWT filter with role-based authorization",
      "Admin-only write operations",
      "Client-side token interceptors aligned with backend policy",
    ],
    keyFeatures: [
      "Employee CRUD with validation pathways",
      "Search, sorting, and pagination controls",
      "Role-aware frontend action rendering",
    ],
    stack: ["Spring Boot", "Spring Security", "React", "Vite", "MySQL", "JWT"],
    category: "fullstack",
    gradient: "from-indigo-500/30 via-cyan-500/10 to-transparent",
  },
  {
    name: "Auth Service Encrypt Decrypt",
    repo: "https://github.com/SujalGadhave/auth-service-encrypt-decrypt",
    status: "private-demo",
    summary:
      "Security-centered auth service designed for credential validation, role enforcement, and encrypted payload operations.",
    problem:
      "Sensitive application domains need reliable encryption endpoints and role-safe token workflows in a unified service.",
    architectureSummary:
      "Modular controller-service-repository flow with dedicated cryptography and authentication layers.",
    complexity:
      "Medium-High: auth concerns and cryptographic operations combined within one bounded service.",
    backendStrength:
      "Focused backend module design with token handling, password security, and encrypted data endpoints.",
    securityHighlights: [
      "Password hashing strategy for stored credentials",
      "RBAC enforcement patterns",
      "AES-based encrypt/decrypt endpoint pipeline",
    ],
    keyFeatures: [
      "Auth login/logout endpoint design",
      "Encryption and decryption APIs",
      "Extensible algorithm support structure",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JPA", "AES", "JWT"],
    category: "backend",
    gradient: "from-violet-500/25 via-cyan-500/10 to-transparent",
  },
];

export const timeline: JourneyMilestone[] = [
  {
    title: "Core Java Foundations",
    time: "Phase 01",
    details:
      "Built console and desktop-style applications while strengthening OOP fundamentals and problem-solving structure.",
  },
  {
    title: "Spring Boot Backend Depth",
    time: "Phase 02",
    details:
      "Moved into API-first development, persistence modeling, and secure request handling with Spring Security.",
  },
  {
    title: "Full-Stack Integration",
    time: "Phase 03",
    details:
      "Integrated React frontends with Java backends to deliver complete engineering workflows from UI to service layer.",
  },
  {
    title: "Current Engineering Direction",
    time: "Now",
    details:
      "Focusing on scalable architecture patterns, authentication resilience, and production deployment discipline.",
  },
];
