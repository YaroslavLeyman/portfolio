import projectGpt from "./../../img/projects/project-gpt.PNG"
import projectBurger from "./../../img/projects/project-burger.jpg"
import projectBurgerBig from "./../../img/projects/project-burger-big.PNG"
import projectCalc from "./../../img/projects/project-calculator.PNG"
import projectPingPong from "./../../img/projects/project-ping-pong.png"
import projectPingPongBig from "./../../img/projects/project-ping-pong-big.PNG"
import projectMinesweeper from "./../../img/projects/project-minesweeper.jpg"
import projectMinesweeperBig from "./../../img/projects/project-minesweeper-big.PNG"
import projectMesto from "./../../img/projects/project-mesto.PNG"
import projectQuiz from "./../../img/projects/project-quiz.jpg"
import projectQuizBig from "./../../img/projects/project-quiz-big.PNG"
import projectCloud from "./../../img/projects/project-cloud.jpg"
import projectCloudBig from "./../../img/projects/project-cloud-big.PNG"
import projectEmployees from "./../../img/projects/project-employees.png"
import projectEmployeesBig from "./../../img/projects/project-employees-big.PNG"


const projects = [
    {
        title: "Quizzes Constructor",
        skills: "React.js, React-DND, Redux, Redux-Thunk, Bootstrap",
        img: projectQuiz,
        imgBig: projectQuizBig,
        gitHubLink: "https://github.com/YaroslavLeyman/smart-constructor-questionnaire",
        linkLiveProject: "https://yaroslavleyman.github.io/smart-constructor-questionnaire/"
    },
    {
        title: "Cloud Storage",
        skills: "NextJS 13, TypeScript, Ant Design, Nookies, Axios, NestJS, TypeORM + PostgreSQL, Swagger, PassportJS + JWT",
        img: projectCloud,
        imgBig: projectCloudBig,
        gitHubLink: "https://github.com/YaroslavLeyman/cloud-storage",
        linkLiveProject: "https://cloud.itleiman.ru"
    },
    {
        title: "Employees",
        skills: "React, TypeScript, Redux-Toolkit, RTK-Query, Ant Design, Express, JWT Token, Prisma",
        img: projectEmployees,
        imgBig: projectEmployeesBig,
        gitHubLink: "https://github.com/YaroslavLeyman/employees",
        linkLiveProject: "https://employees.itleiman.ru"
    },
    {
        title: "Chat OpenAI",
        skills: "React.js, Node.js, Express.js",
        img: projectGpt,
        imgBig: projectGpt,
        gitHubLink: "https://github.com/YaroslavLeyman/Chat-Open-AI",
        linkLiveProject: "https://chat.itleiman.ru"
    }, 
    {
        title: "Calculator Constructor",
        skills: "TypeScript, React, Redux, Redux toolkit",
        img: projectCalc,
        imgBig: projectCalc,
        gitHubLink: "https://github.com/YaroslavLeyman/calculator-constructor-ts",
        linkLiveProject: "https://yaroslavleyman.github.io/calculator-constructor-ts/"
    },
    {
        title: "Burgers",
        skills: "React, TypeScript, Redux, React-DND, WebSocket",
        img: projectBurger,
        imgBig: projectBurgerBig,
        gitHubLink: "https://github.com/YaroslavLeyman/react-burger",
        linkLiveProject: "https://yaroslavleyman.github.io/react-burger/"
    },  
    {
        title: "Ping-Pong",
        skills: "Vanilla JavaScript",
        img: projectPingPong,
        imgBig: projectPingPongBig,
        gitHubLink: "https://github.com/YaroslavLeyman/ping-pong-js",
        linkLiveProject: "https://yaroslavleyman.github.io/ping-pong-js/"
    }, 
    {
        title: "Minesweeper",
        skills: "Vanilla JavaScript",
        img: projectMinesweeper,
        imgBig: projectMinesweeperBig,
        gitHubLink: "https://github.com/YaroslavLeyman/minesweeper-js",
        linkLiveProject: "https://yaroslavleyman.github.io/minesweeper-js/"
    },
    {
        title: "Mesto",
        skills: "JavaScript, Webpack, Babel, PostCSS",
        img: projectMesto,
        imgBig: projectMesto,
        gitHubLink: "https://github.com/YaroslavLeyman/mesto-project",
        linkLiveProject: "https://yaroslavleyman.github.io/mesto-project/"
    }
]

export { projects }