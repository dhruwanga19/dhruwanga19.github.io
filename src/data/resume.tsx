// import { Icons } from "@/components/icons";

import {
  DiamondPlus,
  Github,
  HomeIcon,
  Linkedin,
  Mail,
  NotebookIcon,
} from "lucide-react";
import { prefix } from "@/components/prefix";

export const DATA = {
  name: "Dhruwang Akbari",
  initials: "DA",
  url: "https://www.linkedin.com/in/dhruwang-akbari",
  location: "Canada",
  locationLink: "https://www.google.com/maps/place/toronto",
  summary:
    "Started my journey at the peak of _[COVID-19](https://en.wikipedia.org/wiki/COVID-19)_, started pursuing a Computer Science degree right after my highschool, since I knew I wanted to be on 💻 since childhood. I recently graduated from the _[University of Western Ontario](https://www.uwo.ca/)_ (a proud Mustang) in the summer of 2024, where I was able to learn from the some of best professors and participate in hackathons. I am proud to be a part of Western Cyber Society student club where I led a team of 5 students to represent a Stock Trading algorithm using NLP and ML techniques at CUCAI 2024. I have interned at some of the tech and retail companies, and I am currently working as a Software Engineer for AI Training at Outlier AI.",
  avatarUrl: "./me.png",
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
    "Typescript",
    "C++",
    "Swift",
    "Next.js",

    "Node.js",
    "React",
    "MongoDB",
    "Postgres",
    "Docker",
    "AWS",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhruwanga19",
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
    },
    Resume: {
      name: "Hire Me",
      url: "./Dhruwang2024.pdf",
      icon: DiamondPlus,

      navbar: true,
    },
  },

  work: [
    {
      company: "Outlier AI",
      href: "https://outlier.ai/",
      badges: ["Swift", "Python", "Reinforcement Learning"],
      location: "Remote",
      title: "Software Engineer for AI Training",
      logoUrl: "./outlier_logo.svg",
      start: "Jun 2024",
      end: "Sep 2024",
      description: (
        <ul>
          <li>
            &bull; Implemented Reinforcement Learning with Human Feedback (RLHF)
            to improve AI-generated code accuracy by 30%.
          </li>
          <li>
            &bull; Writing over 150 robust test cases in Swift and Python,
            rigorous evaluation of human-readable summaries and feedback chain
            of 200+ developers.
          </li>
        </ul>
      ),
    },
    {
      company: "Rahil Flexipack",
      badges: ["React", "Next.js", "Tailwind CSS", "Jest"],
      href: "https://www.rahilflexipack.com/",
      location: "Rajkot, India",
      title: "Front End Developer",
      logoUrl: "./Rhyno_logo.png",
      start: "May 2023",
      end: "September 2023",
      description: (
        <ul>
          <li>
            &bull; Maintained and updated new services page and product
            portfolios, ensuring accurate information was presented to potential
            clients, resulting in a 15% increase in inquiries.{" "}
          </li>{" "}
          <li>
            &bull; Used Jest to test react components using
            react-testing-library and mock API calls.
          </li>
          <li>
            &bull; Utilized Next.js and React.js with Framer Motion and Tailwind
            CSS for developing a dynamic and responsive front-end.
          </li>
          <li>
            &bull; Visit:{" "}
            <a className="text-blue-500" href="https://www.rahilflexipack.com/">
              Rahil Flexipack
            </a>
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: "University of Western Ontario",
      href: "https://uwo.ca",
      degree:
        "Bachelor's in Computer Science, Specialization with Minor in Software Engineering",
      logoUrl: "./westernuniv.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "./ib.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "London Navigator",
      href: "https://github.com/dhruwanga19/LondonNavigator",
      dates: "Nov 2023 - Feb 2024",
      active: true,
      description:
        "With the release of the OpenAI's _[ChatGPT](https://chatgpt.com/)_, I decided to build a chatbot which allows newcomers to London, Ontario to navigate around the city with ease. This chatbot provides all the information about the city through a RAG pipeline and directs the user with help of Places API.",
      technologies: [
        "React Native",
        "Expo",
        "Python",
        "Flask",
        "Pinecone Vector Store",
        "Langchain",
        "RAG",
        "Google Places API",
        "OpenAI API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dhruwanga19/LondonNavigator",
          icon: "",
        },
      ],
      image:
        "https://raw.githubusercontent.com/dhruwanga19/my-resume/main/public/londonchatbot.JPG",
      video: "",
    },
    {
      title: "EZCalendar",
      href: "https://ez-calendar.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Helping businesses and personal clients to schedule meetings with ease, one click to change to availabity and share meetings with clients.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ez-calendar.vercel.app/",
          icon: "",
        },
        {
          type: "Source",
          href: "https://github.com/dhruwanga19/EZCalendar",
          icon: "",
        },
      ],
      image:
        "https://raw.githubusercontent.com/dhruwanga19/my-resume/main/public/ezcalendardash.JPG",
      video: "",
    },
    {
      title: "RaspMan - Pacman on Raspberry Pi",
      href: "https://github.com/dhruwanga19/RaspMan",
      dates: "April 2022 - September 2022",
      active: true,
      description:
        "Developed a Pacman game on Raspberry Pi using C++ and Raylib library. The game is controlled using a keyboard bindings and the game is displayed on a 16x2 LCD screen.",
      technologies: ["C++", "C", "Raylib", "Raspberry Pi"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dhruwanga19/RaspMan",
          icon: "",
        },
      ],
      image:
        "https://raw.githubusercontent.com/dhruwanga19/my-resume/main/public/raspman.JPG",
      video: "",
    },
    {
      title: "Hardware Monitor",
      href: "https://github.com/dhruwanga19/go-cpu-info-htmx-ws",
      dates: "July 2024",
      active: true,
      description:
        "A simple hardware monitor built using Go, HTMX, and Websockets to monitor the CPU, memory and disk usage of the system.",
      technologies: ["Go", "HTMX", "Gopsutil", "Websockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dhruwanga19/go-cpu-info-htmx-ws",
          icon: "",
        },
      ],
      image:
        "https://raw.githubusercontent.com/dhruwanga19/my-resume/main/public/hwm_dhr.JPG",
      video: "",
    },
  ],
} as const;
