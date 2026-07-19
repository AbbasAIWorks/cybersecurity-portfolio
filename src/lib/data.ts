// ---------------------------------------------------------------------------
// Central content file. Everything here is honest by design: no fabricated
// clients, certifications, earnings, or years of experience. Replace the
// PLACEHOLDER values (links, email, resume) with your real information
// before deploying.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Syed Muhammad Abbas Ali",
  role: "Junior Cybersecurity Specialist",
  ...
  location: " Punjab, Pakistan",
  email: "abbasalijafari110@gmail.com",
  github: "https://github.com/AbbasAIWorks",
  linkedin: "www.linkedin.com/in/abbasjafari1",
  resumeUrl: "/resume-placeholder.pdf",
};

export const aboutParagraphs = [
  "I'm early in my cybersecurity journey, and I'd rather be upfront about that than pretend otherwise. What I bring is genuine curiosity, consistent hands-on practice, and a habit of documenting what I learn as I learn it.",
  "Most days involve a home lab, a stack of write-ups, or a small tool I'm building to understand a concept better — networking fundamentals, Linux administration, web application security, and the early stages of ethical hacking are where I currently spend most of my time.",
  "I'm not claiming to be an expert. I'm claiming to be someone who shows up, tests things carefully, reads the documentation, and gets a little better every week — and who would rather under-promise and over-deliver on a small project than the reverse.",
];

export type Skill = {
  name: string;
  category: "Foundations" | "Offensive Security" | "Tools & Recon";
  status: "Learning" | "Practicing" | "Comfortable";
};

export const skills: Skill[] = [
  { name: "Networking", category: "Foundations", status: "Practicing" },
  { name: "Linux", category: "Foundations", status: "Practicing" },
  { name: "Windows", category: "Foundations", status: "Comfortable" },
  { name: "Python", category: "Foundations", status: "Practicing" },
  { name: "Bash", category: "Foundations", status: "Practicing" },
  { name: "HTML", category: "Foundations", status: "Comfortable" },
  { name: "CSS", category: "Foundations", status: "Comfortable" },
  { name: "JavaScript", category: "Foundations", status: "Practicing" },
  { name: "Git", category: "Tools & Recon", status: "Comfortable" },
  { name: "GitHub", category: "Tools & Recon", status: "Comfortable" },
  { name: "Nmap", category: "Tools & Recon", status: "Practicing" },
  { name: "Wireshark", category: "Tools & Recon", status: "Learning" },
  { name: "Burp Suite", category: "Tools & Recon", status: "Learning" },
  { name: "OWASP Top 10", category: "Offensive Security", status: "Practicing" },
  { name: "SQL Injection Basics", category: "Offensive Security", status: "Learning" },
  { name: "XSS Testing", category: "Offensive Security", status: "Learning" },
  { name: "Directory Enumeration", category: "Offensive Security", status: "Practicing" },
  { name: "Subdomain Enumeration", category: "Offensive Security", status: "Learning" },
  { name: "Basic API Testing", category: "Offensive Security", status: "Learning" },
  { name: "Risk Assessment", category: "Offensive Security", status: "Learning" },
];

export type Service = {
  title: string;
  audience: string;
  included: string[];
  toolsUsed: string[];
};

export const services: Service[] = [
  {
    title: "Website Security Assessment",
    audience: "Small business owners with a live website or landing page",
    included: [
      "Manual review against the OWASP Top 10",
      "Plain-language report of what was checked",
      "Prioritized list of findings with suggested fixes",
    ],
    toolsUsed: ["Burp Suite", "OWASP ZAP", "Nmap"],
  },
  {
    title: "Basic Vulnerability Assessment",
    audience: "Small teams who want a first-pass health check",
    included: [
      "Surface-level scan of exposed services and endpoints",
      "Screenshot-backed evidence for every finding",
      "No exploitation of production systems without written consent",
    ],
    toolsUsed: ["Nmap", "OWASP ZAP"],
  },
  {
    title: "OWASP Top 10 Security Review",
    audience: "Developers who want a second pair of eyes before launch",
    included: [
      "Checklist-driven review mapped to each OWASP category",
      "Notes on what's already handled well",
      "Clear, non-alarmist write-up of gaps",
    ],
    toolsUsed: ["Burp Suite", "Manual testing"],
  },
  {
    title: "Website Security Recommendations",
    audience: "Anyone who wants practical next steps, not just a scan",
    included: [
      "Review of headers, cookies, and basic configuration",
      "Concrete, ranked recommendations",
      "Follow-up call to walk through the report",
    ],
    toolsUsed: ["Browser dev tools", "Manual testing"],
  },
  {
    title: "Security Awareness Consultation",
    audience: "Small teams without a dedicated security contact",
    included: [
      "One session covering common attack patterns",
      "Simple habits that reduce risk day-to-day",
      "A short reference document to keep on hand",
    ],
    toolsUsed: ["No tools — conversation-based"],
  },
  {
    title: "Linux Server Basic Hardening",
    audience: "Small businesses running a single Linux server",
    included: [
      "Review of users, permissions, and open services",
      "SSH and firewall configuration check",
      "Written summary of changes made or recommended",
    ],
    toolsUsed: ["Linux CLI", "ufw / iptables"],
  },
  {
    title: "Network Security Review",
    audience: "Small offices with a simple local network",
    included: [
      "Inventory of visible devices and open ports",
      "Identification of obviously risky configurations",
      "Straightforward remediation checklist",
    ],
    toolsUsed: ["Nmap", "Wireshark"],
  },
  {
    title: "Basic API Security Review",
    audience: "Teams shipping a small internal or public API",
    included: [
      "Review of authentication and authorization basics",
      "Check for common misconfigurations",
      "Notes on rate limiting and input validation",
    ],
    toolsUsed: ["Burp Suite", "Postman"],
  },
  {
    title: "Security Best Practices Report",
    audience: "Anyone who wants a baseline to work from",
    included: [
      "A written, prioritized checklist tailored to your setup",
      "Explained in plain language, not jargon",
      "Free of upsell — just the recommendations",
    ],
    toolsUsed: ["Manual review"],
  },
];

export type Project = {
  title: string;
  description: string;
  problemSolved: string;
  tech: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Home Lab",
    description:
      "A self-hosted lab environment used to practice networking, Linux administration, and safe, contained security testing.",
    problemSolved:
      "Gives me a controlled space to break things and learn without touching production systems.",
    tech: ["VirtualBox", "Kali Linux", "pfSense"],
    tags: ["Home Lab", "Networking"],
    githubUrl: "https://github.com/PLACEHOLDER/home-lab",
    featured: true,
  },
  {
    title: "Web Vulnerability Scanner",
    description:
      "A lightweight scanner that checks a target URL for common misconfigurations and OWASP Top 10 indicators.",
    problemSolved:
      "Automates the repetitive first pass of a manual review so I can spend more time on analysis.",
    tech: ["Python", "Requests", "BeautifulSoup"],
    tags: ["Python", "Web Security"],
    githubUrl: "https://github.com/PLACEHOLDER/web-vuln-scanner",
    liveUrl: "PLACEHOLDER",
    featured: true,
  },
  {
    title: "Password Strength Checker",
    description:
      "A small web tool that scores password strength against entropy and common-pattern rules, entirely client-side.",
    problemSolved:
      "Teaches users why a password is weak instead of just saying it is.",
    tech: ["JavaScript", "HTML", "CSS"],
    tags: ["JavaScript", "Web App"],
    githubUrl: "https://github.com/PLACEHOLDER/password-strength-checker",
    liveUrl: "PLACEHOLDER",
  },
  {
    title: "Port Scanner",
    description:
      "A command-line TCP port scanner built from scratch to understand how tools like Nmap work under the hood.",
    problemSolved:
      "Built to understand socket-level scanning mechanics, not to replace existing tools.",
    tech: ["Python", "Sockets"],
    tags: ["Python", "Networking"],
    githubUrl: "https://github.com/PLACEHOLDER/port-scanner",
  },
  {
    title: "Network Scanner",
    description:
      "A local-network discovery tool that identifies live hosts, open ports, and basic service banners.",
    problemSolved:
      "Helps map a small network before doing any deeper review.",
    tech: ["Python", "Scapy"],
    tags: ["Python", "Networking"],
    githubUrl: "https://github.com/PLACEHOLDER/network-scanner",
  },
  {
    title: "Security Checklist Generator",
    description:
      "A small app that generates a tailored security checklist based on a few questions about a website or server.",
    problemSolved:
      "Turns a vague 'am I secure?' question into a concrete, actionable list.",
    tech: ["Next.js", "TypeScript"],
    tags: ["Web App", "TypeScript"],
    githubUrl: "https://github.com/PLACEHOLDER/security-checklist-generator",
    liveUrl: "PLACEHOLDER",
  },
  {
    title: "Simple SIEM Dashboard",
    description:
      "A minimal log-ingestion dashboard that surfaces suspicious patterns from sample log data in near real time.",
    problemSolved:
      "Built to understand the basic mechanics of log correlation and alerting.",
    tech: ["Python", "Flask", "SQLite"],
    tags: ["SIEM", "Dashboard"],
    githubUrl: "https://github.com/PLACEHOLDER/simple-siem-dashboard",
  },
  {
    title: "Log Analyzer",
    description:
      "A CLI tool that parses server logs and flags patterns associated with brute-force attempts and scanning activity.",
    problemSolved:
      "Practice project for pattern recognition in raw log data.",
    tech: ["Python", "Regex"],
    tags: ["Python", "Log Analysis"],
    githubUrl: "https://github.com/PLACEHOLDER/log-analyzer",
  },
  {
    title: "Website Security Audit Demo",
    description:
      "A walkthrough project demonstrating a full, non-destructive security audit on a purposefully vulnerable test site.",
    problemSolved:
      "Shows my assessment process end-to-end using a legal, intended-for-testing target.",
    tech: ["Burp Suite", "OWASP ZAP"],
    tags: ["Web Security", "Case Study"],
    githubUrl: "https://github.com/PLACEHOLDER/website-security-audit-demo",
    featured: true,
  },
  {
    title: "Linux Hardening Guide",
    description:
      "A written, step-by-step guide documenting the hardening steps I apply to a fresh Linux server install.",
    problemSolved:
      "Turns personal notes into a reusable reference — for myself and for anyone else learning the same thing.",
    tech: ["Linux", "Bash"],
    tags: ["Linux", "Documentation"],
    githubUrl: "https://github.com/PLACEHOLDER/linux-hardening-guide",
  },
];

export type TimelineItem = {
  title: string;
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "Started Learning Networking",
    detail: "Began with the fundamentals — TCP/IP, subnetting, and how traffic actually moves.",
  },
  {
    title: "Built Linux Lab",
    detail: "Set up a virtualized environment to practice administration and hardening safely.",
  },
  {
    title: "Learned Burp Suite",
    detail: "Started working through intercepting requests and understanding web traffic manipulation.",
  },
  {
    title: "Built First Security Tool",
    detail: "Wrote a simple Python script to solve a real problem I kept running into manually.",
  },
  {
    title: "Completed OWASP Practice",
    detail: "Worked through OWASP Top 10 categories against intentionally vulnerable test applications.",
  },
  {
    title: "Built This Portfolio",
    detail: "Brought the projects, tools, and progress together into one honest, organized place.",
  },
  {
    title: "Working Toward Professional Certification",
    detail: "Currently studying toward a recognized certification — details to be added once complete.",
  },
];

export type Tool = {
  name: string;
  learning?: boolean;
};

export const tools: Tool[] = [
  { name: "Nmap" },
  { name: "Burp Suite" },
  { name: "Wireshark" },
  { name: "OWASP ZAP" },
  { name: "Kali Linux" },
  { name: "VirtualBox" },
  { name: "VMware" },
  { name: "Git" },
  { name: "VS Code" },
  { name: "Linux" },
  { name: "Windows" },
  { name: "Python" },
  { name: "Docker", learning: true },
];

export const whyWorkWithMe = [
  {
    title: "Affordable",
    detail: "Rates that reflect where I am in my career — fair for a small business budget.",
  },
  {
    title: "Dedicated",
    detail: "I treat every project, no matter how small, as worth doing properly.",
  },
  {
    title: "Always Learning",
    detail: "Every engagement feeds back into my own practice — I stay current on purpose.",
  },
  {
    title: "Attention to Detail",
    detail: "I'd rather flag ten small things than miss one important one.",
  },
  {
    title: "Transparent Communication",
    detail: "You'll always know what I checked, what I found, and what I didn't get to.",
  },
  {
    title: "Focused on Practical Results",
    detail: "Findings come with plain-language fixes, not just a wall of jargon.",
  },
];
