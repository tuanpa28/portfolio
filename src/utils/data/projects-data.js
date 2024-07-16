import crefin from "/public/image/crefin.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Website Social Network",
    description:
      "Manage authentication with JWT, Post articles with video or photo, Follow user, Like article, Comment article, Search, User suggestions, Auto play video, Auto download more articles,...",
    tools: [
      "NextJS",
      "TanStack Query",
      "Tailwind CSS",
      "Shadcn UI",
      "NestJS",
      "TypeScript",
      "MongoDB",
    ],
    role: "Full Stack Developer",
    demo: "https://social--insta.vercel.app",
    codeFrontend: "https://github.com/tuanpa28/insta-app",
    codeBackend: "https://github.com/tuanpa28/insta-server",
    image: crefin,
  },
  {
    id: 2,
    name: "Website Soccer Field Booking",
    description:
      "Manage authentication with JWT, Booking, Payments, Find opponents, Filter soccer fields by location,...",
    tools: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "NodeJS",
      "SocketIO",
      "TypeScript",
      "MongoDB",
    ],
    role: "Full Stack Developer",
    demo: "https://fsport.vercel.app",
    codeFrontend: "https://github.com/tuanpa28/DATN_FE",
    codeBackend: "https://github.com/tuanpa28/DATN_BE",
    image: travel,
  },
  {
    id: 3,
    name: "Website Selling Fashion",
    description: "",
    tools: [
      "React",
      "Redux Toolkit",
      "HTML CSS",
      "Ant Design",
      "NodeJS",
      "TypeScript",
      "MongoDB",
    ],
    role: "Full Stack Developer",
    demo: "https://coza-store-fe.vercel.app",
    code: "https://github.com/tuanpa28/coza-store",
    image: travel,
  },
];
