// import { address } from "framer-motion/client";

export const nav_links = [
  {
    href: "#",
    title: "About",
  },
  {
    href: "#",
    title: "Skills",
  },
  {
    href: "#",
    title: "Home",
  },
  {
    href: "#",
    title: "Projects",
  },
  {
    href: "#",
    title: "Contact",
  },
];

export const role: string[] = [
  "React developer h",
  "Nodejs Developer h",
  "FreeLancer h",
  "React Native Developer h",
  "Python Developer h",
];

export const contacts = {
  email: "vineetraj2k3@gmail.com",
  instagram: "https://www.instagram.com/mr_vineetraj/",
  linkedin: "https://www.linkedin.com/in/mrvineetraj/",
  github: "https://www.github.com/MrvineetRaj",
};

export const skills: {
  title: string;
  skills: {
    label: string;
    icon: string;
  }[];
}[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        label: "C++", // not found
        icon: "./icons/cpp.svg",
      },
      {
        label: "Python",
        icon: "./icons/python.svg",
      },

      {
        label: "Javascript",
        icon: "./icons/js.svg",
      },
      {
        label: "Typescript",
        icon: "./icons/ts.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { label: "Docker", icon: "./icons/docker.svg" },
      {
        label: "AWS",
        icon: "./icons/aws.svg",
      },
    ],
  },
  {
    title: "Development",
    skills: [
      {
        label: "React",
        icon: "./icons/react.svg",
      },
      {
        label: "Node",
        icon: "./icons/node.svg",
      },
      {
        label: "Next.JS", // not found
        icon: "./icons/next.svg",
      },
      {
        label: "Express",
        icon: "./icons/express.svg",
      },
      {
        label: "React Native", // not found
        icon: "./icons/react-native.svg",
      },
      {
        label: "MongoDB",
        icon: "./icons/mongodb.svg",
      },
      {
        label: "PostgreSQL",
        icon: "./icons/postgres.svg",
      },
      {
        label: "Firebase",
        icon: "./icons/firebase.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { label: "Github", icon: "./icons/github.svg" },
      { label: "VS code", icon: "./icons/vscode.svg" },
      { label: "Postman", icon: "./icons/postman.svg" },
      { label: "Figma", icon: "./icons/figma.svg" },
    ],
  },
];

export const internship_roles = ["Fullstack Developer"];
export const internships = [
  {
    role: "fullstack Developer",
    company: "Unlock Discount",
    duration: "July 2024 - October 2024",
    description:
      "Worked as a fullstack Developer in a team of 5 developers to build a web application using React and Node.",
    address: "Work from Home",
  },
];

export const projects_categories = [
  "fullstack",
  "frontend",
  "backend",
  "Mobile Apps",
];

export const projects = [
  {
    title: "XORA",
    category: "frontend",
    description: "A modern Landing page for a saas product",
    tech_stack: ["React", "Tailwind CSS"],
    image: "/images/xora.png",
    demo: "https://xoraai.vercel.app/",
    github: "#",
  },
  {
    title: "Imaginify",
    category: "fullstack",
    description:
      "A fullstack application to edit images with ai powered tool provided by cloudinary",
    tech_stack: ["React", "Node", "MongoDB"],
    image: "/images/imaginify.png",
    demo: "https://imaginify-azure-omega.vercel.app/",
    github: "",
  },
  {
    title: "Trackify",
    category: "fullstack",
    description:
      "A mobile app to track your daily calorie intake, finance and much more",
    tech_stack: ["React Native", "Node", "MongoDB"],
    image: "/images/xora.png",
    demo: "https://imaginify-azure-omega.vercel.app/",
    github: "",
  },
  {
    title: "Interviewer",
    category: "backend",
    description:
      "A backend application that can be used to conduct interviews for a user on localhost powered by GEMINI",
    tech_stack: ["Node", "Express", "MongoDB"],
    image: "/images/imaginify.png",
    demo: "",
    github: "https://imaginify-azure-omega.vercel.app/",
  },
];
