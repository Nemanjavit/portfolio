import todo from "../assets/projects/todo.png";
import dictionary from "../assets/projects/dictionary.png";
import space from "../assets/projects/space.png";

export const projects = [
  {
    imgUrl: todo,
    id: "todo",
    name: "Full Stack Todo App",
    sourceCode: "https://github.com/Nemanjavit/todo-postgre",
    liveSite: "https://todo-postgre-er6l.vercel.app/register",
    description:
      "Full-stack Todo application built with modern technologies to provide a seamless user experience for task management. User can register log in and add tasks to his to do list. List can be reordered buy using drag and drop. User can switch between dark and light theme.Features: Task Management: Add, edit, delete, and mark tasks as complete. Real-Time Updates: Changes are immediately reflected in the UI. Responsive Design: Optimized for use on both desktop and mobile devices.",
    technologyUsed: [
      "HTML",
      "SCSS",
      "JAVASCRIPT",
      "NODEJS",
      "EXPRESS",
      "POSTGRESQL",
    ],
  },
  {
    imgUrl: dictionary,
    id: "dictionary",
    name: "Dictionary App",
    sourceCode: "https://github.com/Nemanjavit/dictionary-app",
    liveSite: "https://dictionary-app-blond-six.vercel.app/",
    description:
      "This challenge uses dictionaryapi.dev to fetch and display word definitions. The API response is inconsistent since it’s based on freeform wikitext, meaning audio references may appear in different positions. The task also includes theme switching (Sans-serif, Serif, Monospaced, plus day/night modes with system auto-switch). Pronunciations must be playable via a hidden audio element, controlled only through a custom button.",
    technologyUsed: ["HTML", "SCSS", "JAVASCRIPT", "React JS"],
  },
  {
    imgUrl: space,
    id: "space",
    name: "Space Tourism",
    sourceCode: "https://github.com/Nemanjavit/space-tourism",
    liveSite: "https://nemanjavit.github.io/space-tourism/#/home",
    description:
      "Welcome to the Space Tourism multi-page website – a responsive and interactive project inspired by a Frontend Mentor challenge. Explore the vastness of space as you navigate through destinations, meet your crew, and learn about futuristic technology, all in one immersive experience.",
    technologyUsed: ["HTML", "SCSS", "JAVASCRIPT", "React JS"],
  },
];
