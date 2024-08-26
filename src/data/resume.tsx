// import { Icons } from "@/components/icons";

import {
  File,
  Github,
  Globe,
  HomeIcon,
  Linkedin,
  Mail,
  NotebookIcon,
} from "lucide-react";

export const DATA = {
  name: "Dhruwang Akbari",
  initials: "DA",
  url: "https://www.linkedin.com/in/dhruwang-akbari",
  location: "Canada",
  locationLink: "https://www.google.com/maps/place/toronto",
  summary:
    "Started my journey at the peak of _[COVID-19](https://en.wikipedia.org/wiki/COVID-19)_, absolutely clueless, I started pursuing Computer Science since I knew I wanted to be on 💻 since childhood. I recently graduated from the _[University of Western Ontario](https://www.uwo.ca/)_ in the summer of 2024, where I was able to learn from the best and participate in hackathons. I have interned at some of the tech and retail companies, and I am currently working as a Software Engineer for AI Training at Outlier AI.",
  avatarUrl: "/me.png",
  interests: [
    "Machine Learning",
    "Artificial Intelligence",
    "Software Engineering",
    "Entrepreneurship",
    "Product Management",
  ],
  skills: [
    "Python",
    "Go",
    "Next.js",
    "Typescript",
    "Node.js",
    "React",
    "MongoDB",
    "Postgres",
    "Docker",
    "AWS",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https:github.com/dhruwanga19",
        icon: Github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruwang-akbari",
        icon: Linkedin,

        navbar: true,
      },
      Mail: {
        name: "Send Email",
        url: "mailto:dakbari2@uwo.ca",
        icon: Mail,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Dhruwang2024T.pdf",
        icon: File,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Outlier AI",
      href: "https://outlier.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer for AI Training",
      logoUrl: "/outlier_logo.svg",
      start: "Jun 2024",
      end: "Present",
      description:
        " Implemented Reinforcement Learning with Human Feedback (RLHF) to improve AI-generated code accuracy by 30% through writing over 150 robust test cases in Swift and Python, rigorous evaluation of human-readable summaries and feedback chain of 200+ developers.",
    },
    {
      company: "Rahil Flexipack - Rhyno Group of Companies",
      badges: [],
      href: "https://www.rahilflexipack.com/",
      location: "Rajkot, India",
      title: "Front End Developer",
      logoUrl: "/Rhyno_logo.png",
      start: "May 2023",
      end: "September 2023",
      description:
        "Maintained and updated new services page and product portfolios, ensuring accurate information was presented to potential clients, resulting in a 15% increase in inquiries. Used Jest to test react components using react-testing-library and mock API calls. Utilized Next.js and React.js with Framer Motion and Tailwind CSS for developing a dynamic and responsive front-end.",
    },
  ],
  education: [
    {
      school: "University of Western Ontario",
      href: "https://uwo.ca",
      degree:
        "Bachelor's in Computer Science, Specialization with Minor in Software Engineering",
      logoUrl: "/westernuniv.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2018",
      end: "2020",
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
          icon: "-",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
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
          href: "https://magicui.design",
          icon: "-",
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: "-",
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: "-",
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: "-",
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: "-",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
