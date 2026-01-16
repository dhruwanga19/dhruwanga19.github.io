// import "from "@/components/icons";

import {
  DiamondPlus,
  Github,
  HomeIcon,
  Linkedin,
  Mail,
  NotebookIcon,
} from "lucide-react";
import { prefix } from "@/components/prefix";
import { describe } from "node:test";

export const DATA = {
  name: "Dhruwang Akbari",
  initials: "DA",
  url: "https://www.linkedin.com/in/dhruwang-akbari",
  location: "Canada",
  locationLink: "https://www.google.com/maps/place/toronto",
  summary:
    "Started my journey at the peak of _[COVID-19](https://en.wikipedia.org/wiki/COVID-19)_, pursuing a Computer Science degree right after my highschool, since I knew I wanted to be on 💻 since childhood. Graduated from the _[University of Western Ontario](https://www.uwo.ca/)_ (a proud Mustang) in the summer of 2024. Took on a contract to develop an e-commerce solution for Maple Delight Pizza in Ottawa. Previously interned at some of the tech and retail companies.",
  avatarUrl: "./me.png",
  interests: [
    "Web Development 💻",
    "Cloud Computing ☁️",
    "DevOps 🛠️",
    "Mobile Development 📱",
    "Artificial Intelligence 🤖",
    "Open Source 📦",
  ],
  skillsOther: [
    "System Architecture",
    "Product Development",
    "Cloud Technologies",
    "Agile Methodologies",
    "Technical Problem Solving",
    "Machine Learning",
    "DevOps",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Express",
    "Langchain",
    "Git",
    "Linux",
    "Bash",
    "Terraform",
    "Jenkins",
    "ArgoCD",
    "Github Actions",
    "AWS",
    "S3",
    "Lambda",
    "DynamoDB",
    "CloudFormation",
    "CloudFront",
    "VPC",
    "Route53",
    "EC2",
    "RDS",
    "WordPress",
  ],
  skills: {
    Core: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Go", icon: "go" },
      { name: "TypeScript", icon: "typescript" },
      { name: "C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "Git", icon: "git" },
    ],

    Backend: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Postgres", icon: "postgres" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Firebase", icon: "firebase" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Flask", icon: "flask" },
      { name: "Node.js", icon: "nodejs" },
    ],
    Frontend: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React.js", icon: "reactjs" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Expo", icon: "expo" },
      { name: "Express.js", icon: "express" },
      { name: "React Native", icon: "reactnative" },
      { name: "TailWindCSS", icon: "tailwindcss" },
    ],
  },
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
      url: "./Dhruwang2024Pub.pdf",
      icon: DiamondPlus,

      navbar: true,
    },
  },

  work: [
    {
      company: "Maple Delight Pizza",
      href: "https://mapledelightpizza.ca/",
      badges: ["React", "WordPress", "PHP", "HTML", "CSS"],
      location: "Ottawa, ON, Canada",
      title: "Full Stack Web Developer (Contract)",
      logoUrl: "./mapledelight.png",
      start: "Jul 2024",
      end: "Jul 2025",
      summary:
        "Developed and maintained the e-commerce website for Maple Delight Pizza, an online pizza store based in Ottawa, Canada.",
      description: (
        <div>
          <ul>
            <li>
              &bull; Responsible for architecting, developing and maintaining
              the e-commerce pizza store.
            </li>
            <li>
              &bull; Developed the store website using WordPress and PHP
              plugins. I also integrated the WooCommerce plugin for payments and
              a secured checkout flow.
            </li>
            <li>
              &bull; Implemented SEO best practices to improve the
              website&apos;s search engine ranking, resulting in a 25% increase
              in organic traffic.
            </li>
          </ul>
        </div>
      ),
    },
    {
      company: "Western University",
      href: "https://www.uwo.ca/",
      badges: ["Python", "React Native", "OpenAI", "Langchain", "Pinecone"],
      location: "London, Canada",
      title: "Software Engineer Intern",
      logoUrl: "./westernuniv.jpg",
      start: "Oct 2023",
      end: "May 2024",
      summary:
        "Full-Stack application of mobile chatbot application using OpenAI's ChatGPT",
      description: (
        <ul>
          <li>
            &bull; Part of the WINGS Lab under{" "}
            <a
              className="text-blue-500 underline"
              href="https://www.csd.uwo.ca/~ahaque32/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Anwar Haque
            </a>
          </li>
          <li>
            &bull; Developed a mobile chatbot application using OpenAI&apos;s
            ChatGPT to help newcomers to London, Ontario to navigate around the
            city with ease.
          </li>
          <li>
            &bull; This chatbot provides all the information about the city
            through a RAG pipeline and directs the user with help of Places API.
          </li>
          <li>
            &bull; Built re-usable agents and tools with Langchain and
            OpenAI&apos;s GPT-4 model to interact with the user queries.
          </li>
          <li>&bull; Contributed 3k+ lines of code to the project.</li>
        </ul>
      ),
    },
    {
      company: "Western Cyber Society",
      href: "https://www.westerncybersociety.ca/",
      badges: ["Python", "HuggingFace", "Matplotlib"],
      location: "London, Canada",
      title: "Machine Learning Developer",
      logoUrl:
        "https://www.westerncybersociety.ca/_next/image?url=%2FwcsLogo.png&w=256&q=75",
      start: "Oct 2023",
      end: "Mar 2024",
      summary:
        "Sentiment analysis pipeline between Twitter sentiments and stock price movements.",
      description: (
        <ul>
          <li>
            &bull; Collaborated in a team of 4 to process financial data from
            Yahoo Finance API and Twitter API
          </li>
          <li>
            &bull; Developed a sentiment analysis pipeline using
            Twitter-RoBERTa-base model from HuggingFace
          </li>
          <li>
            &bull; Normalized tweet data & built linear regression models using
            scikit-learn to analyze correlation between tweet sentiments and
            stock price movement
          </li>
          <li>
            &bull; Visualized the data using Matplotlib to present the findings
            at{" "}
            <a
              className="underline"
              href="https://cucai.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CUCAI 2024
            </a>
          </li>
        </ul>
      ),
    },
    {
      company: "Rahil Flexipack",
      badges: ["React", "Next.js", "Tailwind CSS", "Jest"],
      href: "https://www.rahilflexipack.com/",
      location: "Rajkot, India",
      title: "Full Stack Developer Intern",
      logoUrl: "./Rhyno_logo.png",
      start: "May 2023",
      end: "Sep 2023",
      summary:
        "Developed and updated the new services page and product portfolios.",
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
            <a
              className="text-blue-500"
              href="https://www.rahilflexipack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rahil Flexipack
            </a>
          </li>
        </ul>
      ),
    },
    {
      company: "Computer Science Undergraduate Society",
      href: "https://csus.csd.uwo.ca/",
      badges: ["Python", "Java", "Web 2.0"],
      location: "London, Canada",
      title: "Academic Tutor",
      logoUrl: "./csus_logo.jpg",
      start: "Sep 2022",
      end: "Dec 2022",
      summary: "Provided tutoring services for first-year CS courses.",
      description: (
        <ul>
          <li>
            &bull; Mentored 150+ students with Web Development, Python, Java
            fundamentals
          </li>
          <li>
            &bull; Held interactive sessions teaching best practices in coding,
            probem solving and helped in debugging assignments
          </li>
          <li>
            &bull; Maintained the website for society and updated the content
            for the upcoming events and workshops
          </li>
          <li>
            &bull; Acted as a Discord Moderator for the society and onboarding
            new students and keeping members engaged
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: "University of Western Ontario",
      href: "https://uwo.ca",
      degree: "Bachelor's in Computer Science",
      logoUrl: "./westernuniv.jpg",
      start: "2020",
      end: "2024",
      summary: "Explore. Learn. Grow. Repeat.",
      description: (
        <ul>
          <li>
            &bull; Specialization in Computer Science, Minor in Software
            Engineering
          </li>

          <li>&bull; Major Coursework:</li>

          <table width="100%">
            <tbody>
              <tr>
                <td width="50%">
                  <li>- Operating Systems</li>
                  <li>- Database Management</li>
                  <li>- Data Structures & Algorithms</li>
                  <li>- Distributed Systems</li>
                </td>
                <td width="50%">
                  <li>- Computer Networks</li>
                  <li>- System Design</li>
                  <li>- Requirements Engineering</li>
                  <li>- AI & ML</li>
                </td>
              </tr>
            </tbody>
          </table>

          <li>&bull; 🏆 Achievements: Dean&apos;s Honour List</li>
          <li>
            &bull; Activites & Leadership:{" "}
            <a
              className="underline"
              href="https://www.westerncybersociety.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Western Cyber Society
            </a>{" "}
            (Lead ML Developer),{" "}
            <a
              href="https://www.westernuai.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Western AI
            </a>{" "}
            (Member),{" "}
            <a
              href="https://csus.csd.uwo.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Computer Science Undergraduate Society
            </a>{" "}
            (Tutor, Website Maintainer)
          </li>
        </ul>
      ),
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "./ib.png",
      start: "2018",
      end: "2020",
      summary: "Made lifelong friends and truly enjoyed the experience.",
      description: (
        <ul>
          <li>&bull; Higher Level: Physics, Computer Science, Mathematics</li>
          <li>
            &bull; Activites & Leadership:{" "}
            <a
              href="https://www.rotary.org/en/get-involved/interact-clubs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Interact Club @ Rotary
            </a>{" "}
            (School Representative)
          </li>
        </ul>
      ),
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
