import { Menu } from "@/types/menu";


const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "History",
        path: "/history",
        newTab: false,
      },
      {
        id: 22,
        title: "Our Experience",
        path: "/our-experience",
        newTab: false,
      },
      {
        id: 23,
        title: "Leadership",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 24,
        title: "Corporate Social Responsibility",
        path: "/corporate-social-responsibility",
        newTab: false,
      },
      // {
      //   id: 25,
      //   title: "ISO Certifications",
      //   path: "/iso-certifications",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 33,
    title: "What We Do",
    path: "what-we-do",
    newTab: false,
    submenu: [
      {
        id: 34,
        title: "Engineering",
        path: "/engineering",
        newTab: false,
      },
      {
        id: 35,
        title: "Modular",
        path: "/modular",
        newTab: false,
      },
      {
        id: 36,
        title: "Capital Project Services",
        path: "/capital-project-services",
        newTab: false,
      },
      {
        id: 37,
        title: "Water",
        path: "/water",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "News",
    path: "/news",
    newTab: false,
  },
  {
    id: 4,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Language",
    newTab: false,
    isLanguageMenu: true,
    submenu: [
      {
        id: 61,
        title: "English",
        path: "#",
        newTab: false,
      },
      {
        id: 62,
        title: "Spanish",
        path: "#",
        newTab: false,
      },
      {
        id: 63,
        title: "Arabic",
        path: "#",
        newTab: false,
      },
      {
        id: 64,
        title: "German",
        path: "#",
        newTab: false,
      },
      {
        id: 65,
        title: "Italian",
        path: "#",
        newTab: false,
      },
      {
        id: 66,
        title: "Turkish",
        path: "#",
        newTab: false,
      },
    ],
  },
];
export default menuData;
