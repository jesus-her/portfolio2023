import React from "react";
import {
  CgMail,
  CgOptions,
  CgSmile,
  CgSmileMouthOpen,
  CgWorkAlt,
} from "react-icons/cg";
import {
  FaCube,
  FaPaperPlane,
  FaPencilAlt,
  FaProjectDiagram,
  FaReact,
  FaSmileBeam,
  FaUserAstronaut,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import { FaHome } from "react-icons/fa";
import {
  BsCheckCircleFill,
  BsMailbox,
  BsPeopleFill,
  BsPuzzleFill,
  BsRocketTakeoffFill,
  BsSpeakerFill,
  BsStack,
} from "react-icons/bs";
import finanz from "@/public/finanz.jpg";
import lilpix from "@/public/lilpix.jpg";
import parkupadmin from "@/public/parkupadmin.jpg";
import quizzed from "@/public/quizzed.png";
import estudihambre from "@/public/estudihambre.jpg";
import parkupappimg from "@/public/parkupapp.jpg";
import artist from "@/public/artist.jpg";
import lilpixweb from "@/public/lilpixweb.jpg";
import { HiHand, HiHome } from "react-icons/hi";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(HiHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(FaUserAstronaut),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(BsStack),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(FaPencilAlt),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(CgWorkAlt),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(CgMail),
  },
] as const;

export const experiencesData = [
  {
    company: "UPTx",
    title: "IT engineering ",
    location: "Universidad Politécnica de Tlaxcala",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer at Atomic32.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    company: "Atomic32",
    title: "Front-End Developer",
    location: "CDMX, Mexico",
    description:
      "Mobile Application Developer (Android and iOS) At Atomic32, I developed applications for Android and iOS using React Native. I also contributed to the development of an administrative dashboard. I acquired solid skills in mobile app development and worked collaboratively with multidisciplinary teams. https://www.atomic32.com/",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    company: "IT Nora",
    title: "Full-Stack Developer",
    location: "Mexicali, Mexico",
    description:
      "Fullstack web and mobile application developer My main focus was mobile app development using React Native, Node.js and MongoDB, along with implementing Firebase Authentication for user authentication. In addition, I took on the responsibility of leading the UI/UX design and user experience for both the mobile app and the administrative dashboard. My experience in UI/UX design allowed me to create intuitive and attractive interfaces, improving usability and user satisfaction. I used DigitalOcean to carry out the deployment, configuring and managing the servers to ensure efficient and secure operation of the applications.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;
export const projectsData = [
  {
    title: "Fintech App",
    description:
      "A UI/UX mobile app, made with React Native (Expo CLI). It is an application created to make your investment more comfortable to manage, without long explanations, with a portfolio of modern instruments trying to balance your risk. It is an application with which you can automate your purchases and sales of cryptocurrencies, besides that, it includes the benefits of a Fintech and connects you directly to the website 'CETES'.",
    tags: ["React Native", "Expo CLI", "TypeScript"],
    imageUrl: "https://i.imgur.com/T2gBwxf.png",
    date: "2021 - present",
    link: "https://github.com/jesus-her/finanz",
  },
  {
    title: "ParkUp",
    description:
      "Simple and user friendly parking payment application that saves our users both time and money. ParkUp is LA’s premier and largest network smart parking platform.",
    tags: [
      "React Native",
      "Firebase",
      "MongoDB",
      "Node js",
      "Express",
      "DigitalOcean",
      "TypeScript",
      "Nativebase",
    ],
    imageUrl: "https://i.imgur.com/Y0m4s0h.jpg",
    date: "2021 - present",
    link: "",
  },

  {
    title: "ParkUp Dashboard",
    description:
      "Web app to manage all the data of ParkUp App. ParkUp is a mobile application developed to streamline the parking experience.  ",
    tags: [
      "React",
      "MongoDB",
      "Node js",
      "Express",
      "DigitalOcean",
      "TypeScript",
      "Material UI",
    ],
    imageUrl: "https://i.imgur.com/H5iZAPA.png",
    date: "2021 - present",
    link: "https://parkupadmin.blackcloud.app/",
  },
  {
    title: "Estudihambre",
    description:
      "Web app to publish and find food in the University. Helps students to discover variety of products that other students offers in the University and also make it easy to publish any food or product.",
    tags: ["React", "Next.js", "Next Auth", "Tailwindcss", "TypeScript"],
    imageUrl: "https://i.imgur.com/YGRrWy7.png?1",
    date: "2021 - present",
    link: "https://estudihambre.vercel.app/",
  },
  {
    title: "Quizzed App",
    description:
      "A fully functional mobile app, made with React Native and firebase. It is an application in which you can create your own quiz and it will be published for everyone who has the app, you can play and answer other people's quizzes and get a place on the leaderboar.",
    tags: ["React Native", "Expo CLI", "Firebase", "Typescript"],
    imageUrl: "https://i.imgur.com/Xf2Dvg0.png",
    date: "2021 - present",
    link: "https://github.com/jesus-her/MeetMe",
  },
  {
    title: "Wallpaper App",
    description:
      "A mobile application, made with React Native in which you can download my wallpapers.",
    tags: ["React Native", "Expo CLI", "Strapi"],
    imageUrl: "https://i.imgur.com/GSZUID3.png",
    date: "2021 - present",
    link: "https://github.com/jesus-her/the_lilpix_app",
  },

  {
    title: "Photograph and 3D Art",
    description:
      "In my free time I like to learn a variety of things, among them, digital art. I started with photography, then I moved on to image manipulation with Adobe Photoshop, and today I am in the world of 3D graphics using Blender, which together with Photoshop has helped me to create everything that is shown in the @lilpix_px.",
    tags: ["instagram: @lilpix_px"],
    imageUrl: "https://i.imgur.com/2bMFTmH.png",
    date: "2021 - present",
    link: "https://www.instagram.com/lilpix_px/",
  },
  {
    title: "Lilpix",
    description:
      "My really first web app using React. This website is a image gallery of my artwork",
    tags: ["React", "CSS", "Strapi"],
    imageUrl: "https://i.imgur.com/FTqP56t.png",
    date: "2021 - present",
    link: "",
  },
] as const;

// export const projectsData = [
//   {
//     title: "Fintech App",
//     description:
//       "A UI/UX mobile app, made with React Native (Expo CLI). It is an application created to make your investment more comfortable to manage, without long explanations, with a portfolio of modern instruments trying to balance your risk. It is an application with which you can automate your purchases and sales of cryptocurrencies, besides that, it includes the benefits of a Fintech and connects you directly to the website 'CETES'.",
//     tags: ["React Native", "Expo CLI", "TypeScript"],
//     imageUrl: " https://i.imgur.com/T2gBwxfh.png",
//     date: "2021 - present",
//     link: "https://github.com/jesus-her/finanz",
//   },
//   {
//     title: "Wallpaper App",
//     description:
//       "A mobile application, made with React Native in which you can download my wallpapers.",
//     tags: ["React Native", "Expo CLI", "Strapi"],
//     imageUrl: "https://i.imgur.com/GSZUID3h.png",
//     date: "2021 - present",
//     link: "https://github.com/jesus-her/the_lilpix_app",
//   },
//   {
//     title: "ParkUp Dashboard",
//     description:
//       "Web app to manage all the data of ParkUp App. ParkUp is a mobile application developed to streamline the parking experience.  ",
//     tags: [
//       "React",
//       "MongoDB",
//       "Node js",
//       "Express",
//       "DigitalOcean",
//       "TypeScript",
//       "Material UI",
//     ],
//     imageUrl: "https://i.imgur.com/H5iZAPAh.png",
//     date: "2021 - present",
//     link: "https://parkupadmin.blackcloud.app/",
//   },
//   {
//     title: "Quizzed App",
//     description:
//       "A fully functional mobile app, made with React Native and firebase. It is an application in which you can create your own quiz and it will be published for everyone who has the app, you can play and answer other people's quizzes and get a place on the leaderboar.",
//     tags: ["React Native", "Expo CLI", "Firebase", "Typescript"],
//     imageUrl: "https://i.imgur.com/Xf2Dvg0h.png",
//     date: "2021 - present",
//     link: "https://github.com/jesus-her/MeetMe",
//   },
//   {
//     title: "Estudihambre",
//     description:
//       "Web app to publish and find food in the University. Helps students to discover variety of products that other students offers in the University and also make it easy to publish any food or product.",
//     tags: ["React", "Next.js", "Next Auth", "Tailwindcss", "TypeScript"],
//     imageUrl: "https://i.imgur.com/YGRrWy7h.png",
//     date: "2021 - present",
//     link: "https://estudihambre.vercel.app/",
//   },
//   {
//     title: "ParkUp",
//     description:
//       "Simple and user friendly parking payment application that saves our users both time and money. ParkUp is LA’s premier and largest network smart parking platform.",
//     tags: [
//       "React Native",
//       "Firebase",
//       "MongoDB",
//       "Node js",
//       "Express",
//       "DigitalOcean",
//       "TypeScript",
//       "Nativebase",
//     ],
//     imageUrl: "https://i.imgur.com/Y0m4s0hh.jpg",
//     date: "2021 - present",
//     link: "",
//   },

//   {
//     title: "Photograph and 3D Art",
//     description:
//       "In my free time I like to learn a variety of things, among them, digital art. I started with photography, then I moved on to image manipulation with Adobe Photoshop, and today I am in the world of 3D graphics using Blender, which together with Photoshop has helped me to create everything that is shown in the @lilpix_px.",
//     tags: ["instagram: @lilpix_px"],
//     imageUrl: "https://i.imgur.com/2bMFTmHl.png",
//     date: "2021 - present",
//     link: "https://www.instagram.com/lilpix_px/",
//   },
//   {
//     title: "Lilpix",
//     description:
//       "My really first web app using React. This website is a image gallery of my artwork",
//     tags: ["React", "CSS", "Strapi"],
//     imageUrl: "https://i.imgur.com/FTqP56th.png",
//     date: "2021 - present",
//     link: "https://lilpix.netlify.app/",
//   },
// ] as const;

export const skillsData = [
  {
    title: "React",
    color: "primary",
  },
  {
    title: "Next.js",
    color: "default",
  },
  {
    title: "React Native",
    color: "primary",
  },
  {
    title: "Vue",
    color: "success",
  },
  {
    title: "Express",
    color: "danger",
  },
  {
    title: "Node.js",
    color: "default",
  },
  {
    title: "MongoDB",
    color: "success",
  },
  {
    title: "MySQL",
    color: "danger",
  },
  {
    title: "Firebase",
    color: "warning",
  },
  {
    title: "Django",
    color: "primary",
  },
  {
    title: "DigitalOcean",
    color: "primary",
  },
  {
    title: "Prisma",
    color: "default",
  },
] as const;

export const cards = [
  {
    title: "Problem-solving ability",
    description: "I am committed to make each project have a unique design.",
    icon: React.createElement(FaCube),
  },

  {
    title: "Teamwork skills",
    description: "I am committed to make each project have a unique design.",
    icon: React.createElement(BsPeopleFill),
  },
  {
    title: "Effective communication",
    description: "I am committed to make each project have a unique design.",
    icon: React.createElement(FaPaperPlane),
  },
  {
    title: "Agility and continuous learning",
    description: "I am committed to make each project have a unique design.",
    icon: React.createElement(BsRocketTakeoffFill),
  },

  {
    title: "Positive attitude",
    description: "I am committed to make each project have a unique design.",
    icon: React.createElement(FaSmileBeam),
  },

  {
    title: "Responsibility",
    description:
      "I always deliver on the objectives that are set from the beginning and accept the challenges that come with them.",
    icon: React.createElement(BsCheckCircleFill),
  },
] as const;
