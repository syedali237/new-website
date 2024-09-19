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
    "A curiosity-driven-coder dedicated to crafting efficient and elegant solutions. Continuously learning and adapting to new technologies.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "Firebase",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "TailwindCSS",
    "React Native",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "syedaliulhasan19@gmail.com",
    tel: "+91-9838794319",
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
      Youtube: {
        name: "Youtube",
        url: "https://youtu.be/dQw4w9WgXcQ?si=kMIzv8RRbnHtU59e&t=1",
        icon: Icons.youtube,
        navbar: true,
      },
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
      company: "Branding360",
      href: "https://branding360.ae/",
      badges: [],
      location: "Lucknow, IN",
      title: "Front End Developer Intern",
      logoUrl: "/branding360.jpeg",
      start: "October 2023",
      end: "November 2023",
      description:
        "Collaborated closely with UI designers to transform design concepts into interactive webpages, ensuring optimal user experiences.  Applied responsive design principles for consistent performance and visual appeal across diverse devices.- Collaborated closely with UI designers to transform design concepts into interactive webpages, ensuring optimal user experiences. - Applied responsive design principles for consistent performance and visual appeal across diverse devices.",
    },      
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "",
      end: "2024",
    },
    {
      school: "Aligarh Muslim Univeristy",
      href: "https://www.amu.ac.in/",
      degree: "Bachelor's of Technology (B.Tech) in Mechanical Engg.",
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
