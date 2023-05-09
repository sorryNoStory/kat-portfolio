import {
  FaNodeJs,
  FaReact,
  FaPhoneAlt,
  FaUser,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kate-medush-15a88a262/",
  },
  {
    icon: <BsGithub />,
    link: "https://github.com/sorryNoStory/",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Kateryna",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "kateryna.medush@gmail.com",
  },
];

export const icons = [
  <SiMongodb />,
  <SiExpress />,
  <FaReact />,
  <FaNodeJs />,
  <DiJavascript1 />,
  <SiRedux />,
  <SiTailwindcss />,
  <SiNextdotjs />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Software Developer",
    company: "Singsys Apps & web development agency",
  },
  {
    di: 2,
    year: "2021",
    position: "Trainee Software Developer",
    company: "Singsys Apps & web development agency",
  },
  {
    id: 3,
    year: "2015-2021",
    position: "Product marketing",
    company: "",
  },
];
export const finishes = [
  {
    id: 1,
    number: "7+",
    itemName: "Years in IT",
  },
  {
    id: 2,
    number: "2+",
    itemName: "Software Development",
  },
  {
    id: 3,
    number: "1+",
    itemName: "Year Backend",
  },
  {
    id: 4,
    number: "30+",
    itemName: "Apps developed",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "Next.Js",
    link: "https://trafifly-next-tw.vercel.app/",
    gitLink: "https://github.com/sorryNoStory/trafifly",
    desc: "A fully animated landing page developed with React and Next.js 13. The page was designed using Tailwind for styling and Framer Motion for animations. It features a React Swiper for testimonials and an FAQ section with an accordion-style layout.",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "Next.Js",
    link: "https://dashboard-seven-kappa.vercel.app/",
    gitLink: "https://github.com/sorryNoStory/nextjs-dashboard",
    desc: "Modern admin dashboard app featuring a vertical menu, developed with Next.js. The project was built using a range of technologies, including React, Next.js, JavaScript, and Tailwind. Additionally, the dashboard incorporates various React add-ons, such as React Icons and Charts.js, to enhance the user experience.",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "",
    link: "https://hotel-blush.vercel.app/",
    gitLink: "https://github.com/sorryNoStory/book-hotel",
    desc: "A hotel web application built with React and Tailwind. The app incorporates various React features, such as React DatePicker, Headless Menu, React Icons, and React Swiper, to enhance the user experience. Users can select the number of travelers and view available room offers based on this filter",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "Node.Js",
    link: "https://helpy-client.vercel.app/",
    gitLink: "https://github.com/sorryNoStory/helpy-server",
    desc: "This project is a fully functional full-stack application inspired by Chat GPT, developed with React and Node.js, and integrated with the OpenAI API. Tailwind CSS was used for styling, and Vite.js served as the build tool. To fetch and update server data, the Tanstack Query library was employed.",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "Node.Js",
    link: "https://mern-blog-curd.netlify.app/",
    gitLink: "https://github.com/sorryNoStory/yourblog-mern",
    desc: "Fully functional blog developed with the MERN stack and Redux. Users can register, log in, create and edit their own blog posts, like posts, and view all posts and by category. Built with Node.js and MongoDB, the blog follows fundamental CRUD principles for content management. *The server is free, it takes time to upload the data, sorry.",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "Node.Js",
    link: "https://ecom-client-six.vercel.app/",
    gitLink: "https://github.com/sorryNoStory/ecom-client",
    desc: `Full-stack eCommerce web application developed with React, and SCSS for the frontend, and Redux for state management. Strapi (headless CMS) for backend and content management, Stripe for payments. 
    Users can view products, filter by category and price, add  to  cart, and complete the payment. *The server is free, it takes time to upload the data, sorry.`,
  },
];

export const workNavs = ["all", "Next.js", "Node.js"];

export const contacts = [
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "kateryna.medush@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "WhatsApp: +606981410801",
  },
];
