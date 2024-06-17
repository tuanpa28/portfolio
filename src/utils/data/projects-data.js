import crefin from "/public/image/crefin.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Social Network App",
    description:
      "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
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
    code: "https://github.com/tuanpa28/insta-app",
    demo: "https://social--insta.vercel.app",
    image: crefin,
  },
  {
    id: 2,
    name: "Travel Agency App",
    description:
      "I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
];
