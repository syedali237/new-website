import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Syed Ali Ul Hasan",
  initials: "SY",
  url: "https://dillion.io",
  location: "New Delho, IN",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "Engineer. I love building things and helping people.",
  summary:
    "A curiosity driven coder dedicated to crafting efficient and elegant solutions. Continuously learning and adapting to new technologies.",
  avatarUrl: "/me.png",
  skills: [
    "Java", "Javascript", "Python", "React", "Nodejs", "ExpressJS", "FastAPI", "GraphQL", "Typescript", "MongoDB", "PostgreSQL", "Docker", "Nextjs", "Cypress", "Integration Tests", "AWS", "Postman", "Git/Github", "CI/CD", "Github Actions"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "syedaliulhasan19@gmail.com",
    // tel: "+91-9838794319",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/syedali237",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/syed-ali-ul-hasan-ab2749254/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ali_used",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtu.be/dQw4w9WgXcQ?si=kMIzv8RRbnHtU59e&t=1",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:syedaliulhasan19@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Summer Of Code",
      href: "https://summerofcode.withgoogle.com/programs/2025/projects/dBNdnkCt",
      badges: [],
      location: "Remote",
      title: "Open Source Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9U6Bmi1rYLZjOMmaDjeQsjawxdtIo44Fvg&s",
      start: "May 2025",
      end: "Present",
      description:
        "Enhanced the testing infrastructure across the Talawa ecosystem by introducing a robust, automated, and scalable testing strategy. Implemented End-to-End (E2E) testing for the Talawa Admin and Mobile applications. Implemented AI-integrated unit test automation, improved CI/CD workflows with preventive checks, and a more efficient, maintainable codebase.",
    },
    {
      company: "The Palisadoes Foundation",
      href: "https://branding360.ae/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "https://summerofcode.withgoogle.com/media/org/the-palisadoes-foundation/d9zsxo0idjsl7kug-360.png",
      start: "August 2024",
      end: "February 2025",
      description:
        "Improved test execution time by 80% on Talawa-API by migrating from Jest to Vitest and enabling test parallelism. Enhanced Talawa-Admin by building the Event Registrants tab, implementing robust input validation with Regex, and resolving frontend and GraphQL API issues involving MongoDB membership logic. Developed and integrated CI/CD pipelines using GitHub Actions to automate pre-merge checks and streamline development workflows.",
    },
    {
      company: "Branding360",
      href: "https://branding360.ae/",
      badges: [],
      location: "Lucknow, IN",
      title: "Front End Developer Intern",
      logoUrl: "/branding360.jpeg",
      start: "October 2023",
      end: "November 2023",
      description:
        "Collaborated with UI designers and translated Figma designs into responsive, interactive webpages. Built frontends using ReactJS and TailwindCSS for local businesses. Improved user experience and strengthened online presence through performant UI design.",
    },
  ],
  education: [
    {
      school: "Aligarh Muslim Univeristy",
      href: "https://www.amu.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl: "/amu.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "AMUHACKS 4.0",
      dates: "August 14th - 15th, 2025",
      location: "Aligarh, India",
      description:
        "In an age where every child learns differently, Quizzly gives parents full control to test, track, and train their children at their own pace. Whether it's basic math, science concepts, or general knowledge, Quizzly brings structure, gamification, and AI-driven insights into a child's learning journey.",
      image:
        "https://amuhacks-4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F01f64b1c994d4db5a30fe86b88ed2b80%2Fassets%2Ffavicon%2F405.png&w=1440&q=75",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/rajuljha/Quizzly",
        },
      ],
    },
    {
      title: "OOSC Hackathon, IIT Kanpur",
      dates: "August 25th - 26th, 2024",
      location: "Kanpur, India",
      description:
        "This project develops a system to automatically generate relevant questions from website content. The system scrapes links from a given website, retrieves the content, and creates concise questions related to each webpage. It also selects relevant links from the website and ensures each entry is validated for quality and accuracy. The results are saved in a structured JSON file for easy access and analysis.",
      image:
        "https://events.canonical.com/event/89/logo-739313450.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/tayyab-ilyas/quesgen",
        },
      ],
    },
    {
      title: "AMURoboclub Vercera Hackathon",
      dates: "August 25th - 26th, 2024",
      location: "Aligarh, India",
      description:
        "CareSync - A community health resource platform : Empowering communities by providing accessible and comprehensive healthcare resources.",
      image:
        "https://yt3.googleusercontent.com/DKn-WCPDf4NWgkjSAYlM9OUZFUwchJm-x0oQeor4flmWbqcC-vYI6sPYgRpyWv458k-gKrWXCg=s900-c-k-c0x00ffffff-no-rj",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/syedali237/CareSync",
        },
      ],
    },
  ],
} as const;
