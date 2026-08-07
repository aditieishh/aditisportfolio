import { Project, SkillCategory, Education, Achievement, Certification, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Aditi Pallai",
  title: "Software Development Engineer Aspirant",
  subtitle: "Full Stack & Real-Time Web Developer",
  email: "aditipallai2@gmail.com",
  phone: "+91 7750802721",
  location: "India",
  github: "https://github.com/aditieishh",
  githubUsername: "aditieishh",
  linkedin: "https://linkedin.com/in/aditi-pallai",
  leetcode: "https://leetcode.com/u/aditipallai2",
  resumeUrl: "https://drive.google.com/file/d/1UMd1-d36iywI7nM1MtNbJgtVrsnRZlBy/view?usp=sharing",
  status: "Seeking SDE / Full Stack Developer Roles",
  about: `Software Development Engineer aspirant with hands-on development experience building real-time, API-driven web applications. Strong foundation in Data Structures, Algorithms, OOP,System Design and Database Management. Passionate about engineering clean, scalable, production-grade software with seamless user experiences.`,
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "orvexa",
    title: "Orvexa",
    subtitle: "Real-Time Collaborative Code Editor",
    description: "A real-time collaborative coding workspace featuring Socket.io synchronization for live code edits and cursor tracking across connected clients.",
    longDescription: "Orvexa empowers developers to code together synchronously in isolated rooms with syntax highlighting, custom theme support, and room-based session management.",
    category: "Real-Time",
    githubUrl: "https://github.com/aditieishh/Orvexa",
    liveUrl: "https://orvexa-2.onrender.com",
    technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "JavaScript", "HTML5", "CSS3"],
    keyHighlights: [
      "WebSocket-based synchronization via Socket.io broadcasting live edits and cursor updates",
      "Room-based session management with unique room IDs for private coding sessions",
      "Integrated React code editor supporting multi-language syntax highlighting",
      "Deployed on Render with responsive layout for modern desktop and mobile browsers"
    ],
    featured: true,
    demoType: "code-editor"
  },
  {
    id: "code-reviewer",
    title: "Code Reviewer Site",
    subtitle: "AI Powered Automated Code Reviewer",
    description: "Full-stack AI platform that analyzes submitted code snippets and generates instant, structured feedback on bugs, security, and best practices.",
    longDescription: "Leverages the Google Gemini API to parse source code, detect potential vulnerabilities, recommend optimization refactors, and provide clean Markdown feedback.",
    category: "AI Powered",
    githubUrl: "https://github.com/aditieishh/code-reviewer-site",
    liveUrl: "https://code-reviewer-site.vercel.app",
    technologies: ["React.js", "Gemini API", "Node.js", "Express.js", "REST APIs", "JavaScript", "CSS3"],
    keyHighlights: [
      "Google Gemini API integration on Express backend to process and audit code submissions",
      "Structured feedback categorization (Bug detection, Security risks, Performance, Best practices)",
      "Decoupled Architecture with React frontend deployed on Vercel & Node backend on Render",
      "Clean syntax-highlighted review interface for seamless developer workflows"
    ],
    featured: true,
    demoType: "ai-reviewer"
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    subtitle: "Full Stack Web Application",
    description: "High-performance URL shortening service with REST API architecture, custom short links, usage tracking, and MongoDB persistence.",
    longDescription: "Features automatic unique hash generation, instant short link copying, usage metrics, and fast redirection middleware.",
    category: "Full Stack",
    githubUrl: "https://github.com/aditieishh/url-shortener",
    liveUrl: "https://frontend-kzzz.onrender.com",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"],
    keyHighlights: [
      "RESTful Backend APIs for short code generation and instant URL redirection mapping",
      "MongoDB database modeling with schema validation for original URLs and analytics",
      "Responsive React & Tailwind CSS dashboard enabling users to generate, copy, and manage links",
      "Click tracking and usage statistics per shortened URL"
    ],
    featured: true,
    demoType: "url-shortener"
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: 90, badge: "OOP & DSA" },
      { name: "Python", level: 85, badge: "ML & Scripting" },
      { name: "JavaScript (ES6+)", level: 92, badge: "Async & Modern JS" },
      { name: "SQL", level: 88, badge: "Queries & Joins" },
      { name: "HTML5 & CSS3", level: 95, badge: "Responsive UI" }
    ]
  },
  {
    title: "Web & Backend Development",
    iconName: "Server",
    skills: [
      { name: "React.js", level: 90, badge: "Frontend Framework" },
      { name: "Node.js", level: 88, badge: "Runtime Environment" },
      { name: "Express.js", level: 88, badge: "REST Framework" },
      { name: "REST APIs", level: 92, badge: "Architecture" },
      { name: "Fast API", level: 85, badge: "Real-Time Comms" },
      { name: "Tailwind CSS", level: 90, badge: "Utility-First Styling" }
    ]
  },
  {
    title: "Databases & Cloud",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: 85, badge: "NoSQL & Mongoose" },
      { name: "MySQL", level: 85, badge: "Relational Schema" },
      { name: "Vercel", level: 88, badge: "Frontend Deployment" },
      { name: "Render", level: 88, badge: "Backend Hosting" }
    ]
  },
  
  {
    title: "Tools & Developer Platforms",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 92, badge: "Version Control" },
      { name: "Jupyter Notebook", level: 85, badge: "Data Analysis" },
      { name: "Google Colab", level: 85, badge: "Cloud ML Notebooks" },
      { name: "Gemini API", level: 88, badge: "LLM Integration" }
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "BookOpen",
    skills: [
      { name: "Data Structures & Algorithms", level: 92, badge: "100+ LeetCode Solved" },
      { name: "Object-Oriented Programming (OOP)", level: 90, badge: "Solid Design" },
      { name: "Database Management Systems (DBMS)", level: 88, badge: "Relational & NoSQL" },
      { name: "Operating Systems", level: 85, badge: "Process & Threads" },
      { name: "Computer Networks", level: 85, badge: "TCP/IP & HTTP" },
      { name: "System Design", level: 85, badge: "Architecture" },
      
    ]
  }
];

export const EDUCATION_DATA: Education = {
  institution: "Maharaja Vijayaram Gajapathi Raj College Of Engineering",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2023 - 2027",
  cgpa: "8.67 / 10",
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks"
  ]
};

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ted-talk",
    title: "2nd Position - TED Talk Competition",
    role: "Speaker & Presenter",
    description: "Delivered an impactful presentation titled 'AI Revolution and Women in STEM Fields' during the Women's Day Celebration event.",
    category: "Competition",
    badge: "2nd Place Winner"
  },
  {
    id: "guest-speaker",
    title: "Guest Speaker Host",
    role: "Tech Presenter",
    description: "Hosted and conducted a guest lecture on 'Wi-Fi Technology Evolution' covering protocols, spectrums, and modern networking.",
    category: "Speaker",
    badge: "Keynote Host"
  },
  {
    id: "techsprint",
    title: "Techsprint-2025 Organizer",
    role: "Hackathon Organizer & Evaluator",
    description: "Conducted and evaluated a college-level hackathon organized under Google Developer Group (GDG MVGR).",
    category: "Hackathon",
    badge: "GDG MVGR Leader"
  },
  {
    id: "team-lead",
    title: "Coding Camp Team Lead",
    role: "Team Lead (4 Members)",
    description: "Led a 4-person engineering team to organize and conduct a 'Basic Coding Camp for School Students' to foster early STEM learning.",
    category: "Leadership",
    badge: "Team Lead"
  },
  {
    id: "leetcode",
    title: "100+ DSA Problems Solved",
    role: "Problem Solver",
    description: "Active LeetCode practitioner with 100+ Data Structures & Algorithms problem solutions solved across arrays, dynamic programming, graphs, and trees.",
    category: "Problem Solving",
    badge: "100+ Solved"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { title: "AI-ML Virtual Internship", provider: "Eduskills", badgeColor: "bg-pink-100 text-pink-700 border-pink-200" },
  { title: "Java Full Stack Internship", provider: "Eduskills", badgeColor: "bg-rose-100 text-rose-700 border-rose-200" },
  { title: "ServiceNow Virtual Internship", provider: "ServiceNow", badgeColor: "bg-amber-100 text-amber-800 border-amber-200" },
  { title: "Python Certificate", provider: "HackerRank", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { title: "SQL Certificate", provider: "HackerRank", badgeColor: "bg-sky-100 text-sky-800 border-sky-200" },
  { title: "Java Certificate", provider: "HackerRank", badgeColor: "bg-orange-100 text-orange-800 border-orange-200" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/aditieishh", icon: "Github", handle: "@aditieishh" },
  { name: "LinkedIn", url: "https://linkedin.com/in/aditi-pallai", icon: "Linkedin", handle: "Aditi Pallai" },
  { name: "Email", url: "mailto:aditipallai2@gmail.com", icon: "Mail", handle: "aditipallai2@gmail.com" },
  { name: "LeetCode", url: "https://leetcode.com/u/aditipallai2", icon: "Code", handle: "aditipallai2" }
];
