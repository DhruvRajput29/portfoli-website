import clutterThumbnail from "../assets/project-thumbnail/clutter-thumbnail.webp";
import musicfyThumbnail from "../assets/project-thumbnail/musicfy-thumbnail.webp";
import weatherThumbnail from "../assets/project-thumbnail/myfirstwebsite-thumbnail.webp";
import portfolioThumbnail from "../assets/project-thumbnail/portfolio-thumbnail.webp";
import myFirstWebsiteThumbnail from "../assets/project-thumbnail/weather-forecast-thumbnail.webp";

const projects = [
  {
    id: 1,
    title: "File Organizer",

    description:
      "Node.js application that automatically organizes files according to their extensions.",

    image: clutterThumbnail,

    technologies: ["Node.js", "JavaScript"],

    github: {
      enabled: true,
      link:
        "https://github.com/DhruvRajput29/projects/blob/main/clear-the-clutter/sort.js",
    },

    demo: {
      enabled: false,
      link: "",
    },
  },

  {
    id: 2,
    title: "MusicFY",

    description:
      "MusicFY is a music streaming platform that lets you discover and enjoy songs based on your mood.",

    image: musicfyThumbnail,

    technologies: ["React.js", "PHP", "MYSQL"],

    github: {
      enabled: true,
      link: "https://github.com/DhruvRajput29/Musicfy.git",
    },

    demo: {
      enabled: true,
      link: "https://musicfy.dhruv-rajput.workers.dev/",
    },
  },

  {
    id: 3,
    title: "Weather App",

    description:
      "Weather forecasting application using real-time weather APIs.",

    image: weatherThumbnail,

    technologies: ["API", "JavaScript"],

    github: {
      enabled: true,
      link:
        "https://github.com/DhruvRajput29/projects/tree/main/weather%20forecast",
    },

    demo: {
      enabled: true,
      link: "/weather-forecast/index.html",
    },
  },

  {
    id: 4,
    title: "Portfolio Website",

    description:
      "Personal portfolio website with responsive modern UI design.",

    image: portfolioThumbnail,

    technologies: ["HTML", "CSS", "JavaScript"],

    github: {
      enabled: false,
      link: "",
    },

    demo: {
      enabled: true,
      link: "https://portfolio.dhruv-rajput.workers.dev/",
    },
  },

  {
    id: 5,
    title: "My First Website",

    description:
      "This is my first website which I built when I was learning HTML and CSS. It is a simple website with basic styling and layout with some validation.",

    image: myFirstWebsiteThumbnail,

    technologies: ["HTML", "CSS", "JavaScript"],

    github: {
      enabled: true,
      link:
        "https://github.com/DhruvRajput29/projects/tree/main/my%20personal%20website",
    },

    demo: {
      enabled: true,
      link: "/myfirstwebsite/index.html",
    },
  },
];



export default projects;