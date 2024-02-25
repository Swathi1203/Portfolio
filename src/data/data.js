import webDesignAnimation from "../Images/web_design_animation.json";
import webResponsiveAnimation from "../Images/web_app_animation.json";
import webAppAnimation from "../Images/webAppDevelopment.json";

export const navlinkData = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/project",
    text: "Projects",
  },
  {
    url: "/tech",
    text: "Tech",
  },
  {
    url: "/service",
    text: "Services",
  },
  {
    url: "/blog",
    text: "skills",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];

export const techData = [
  {
    name: "HTML",
    src: "../publicImages/tech/html.png",
  },
  {
    name: "CSS",
    src: "./publicImages/tech/css.png",
  },
  {
    name: "JavaScript",
    src: "./publicImages/tech/js.png",
  },
  {
    name: "React",
    src: "./publicImages/tech/react.png",
  },
  
];

export const serviceData = [
  {
    id: 1,
    animation: webDesignAnimation,
    title: "Web Design",
    description:
      "Designing captivating user interfaces that impress the users with stunning visuals, intuitive navigation and ease of use.",
  },
  {
    id: 2,
    animation: webAppAnimation,
    title: "Web App Development",
    description:
      "Turning ideas into innovative web solutions that drive results ensuring seamless functionality, scalability and user satisfaction.",
  },
  {
    id: 1,
    animation: webResponsiveAnimation,
    title: "Responsive Layouts",
    description:
      "One stop for all your devices. Code that handles mobile devices to tablets to your laptop and monitor screens.",
  },
];

export const projectsData = [
  {
    id: 1,
    cover: "../publicImages/projects/spotify image.jpg",
    name: "Brand",
    category: "React Js",
    title: "My spotify clone",
    githubLink:
      "https://github.com/Swathi1203/Spotify-clone",
    liveLink: "https://swathi1203.github.io/Spotify-clone/",
  },
  {
    id: 2,
    cover: "../publicImages/projects/darlinnTodo.png",
    name: "Brand",
    category: "React Js",
    title: " Todo list",
    githubLink: "https://github.com/Swathi1203/LGMVIP-Web",
    liveLink: "https://swathi1203.github.io/LGMVIP-Web/",
  },
  {
    id: 3,
    cover: "../publicImages/projects/Gemini_Generated_Image.jpg",
    name: "Brand",
    category: "React Js",
    title: "My calculator",
    githubLink:
      "https://github.com/Swathi1203/letsgrw",
    liveLink: "https://swathi1203.github.io/letsgrw/",
  },
  {
    id: 4,
    cover: "../publicImages/projects/generate the im 89eed384-611e-4ad5-ac6a-612ad026f0b6.png",
    name: "Brand",
    category: "Bootstrap",
    title: "student Enrollment form",
    githubLink: "https://github.com/Swathi1203/LGM-3",
    liveLink: "https://swathi1203.github.io/LGM-3/",
  },
  {
    id: 5,
    cover: "../publicImages/projects/user.png",
    name: "Brand",
    category: "Bootstrap",
    title: "get users by one click",
    githubLink: "https://github.com/Swathi1203/task-2",
    liveLink: "https://swathi1203.github.io/task-2/",
  },
  {
    id: 6,
    cover: "../publicImages/projects/movieWatchlist.png",
    name: "Brand",
    category: "Vanilla Js",
    title: "Movie Watchlist",
    githubLink: "https://github.com/geekieujjwal/movie-watchlist",
    liveLink: "https://movie-watchlist-geekieujjwal.vercel.app/",
  },
  //   {
  //     id: ,
  //     cover: "../publicImages/projects/fullStack.png",
  //     name: "Brand",
  //     category: "Full Stack",
  //     title: "",
  //     githubLink: "",
  //     liveLink: "",
  //   },
];

export const blogData = [
  {
    id: 1,
    title: "Solid works",
    
    desc: "SolidWorks is a versatile computer-aided design (CAD) software that empowers engineers and designers to bring their ideas to life in 3D. With robust modeling capabilities, precise assembly design tools, and comprehensive simulation features, SolidWorks enables users to create, simulate, and validate complex designs with ease. Whether it's designing intricate parts, assembling components into functional assemblies, or performing detailed simulations to optimize performance, SolidWorks provides the tools and flexibility needed to turn concepts into reality. From sheet metal design to electrical systems, SolidWorks offers a comprehensive suite of features tailored to meet the diverse needs of engineers across various industries",
    cover: "./publicImages/blog/download.png",
  },
  {
    id: 2,
    title: "jaarvis voice assistant",
    
    desc: "A Jarvis-style voice assistant built using Python allows users to interact with their computer through voice commands. By integrating speech recognition and text-to-speech capabilities, users can ask the assistant to perform tasks such as checking the weather, searching the web, sending emails, or even controlling smart home devices. With Python's libraries and APIs, developers can create a personalized and efficient voice assistant experience, making daily tasks more convenient and hands-free.",
    cover: "../publicImages/blog/jaarvissss.jpg",
  },
  {
    id: 3,
    title: "Figma",
   
    desc: "Figma is a versatile design tool that offers users the ability to create a wide range of digital content. From frames that define design canvases to shapes, text, and images that populate those frames, Figma provides the building blocks for designing user interfaces, prototypes, and more. Users can also leverage components for reusable elements, vector graphics for custom illustrations, and prototyping links for interactive simulations. Figma enables designers to create, iterate, and share their work seamlessly within a collaborative environment.",
    cover: "../publicImages/blog/Figma0.jpg",
  },
];
