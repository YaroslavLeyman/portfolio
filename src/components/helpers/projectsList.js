import projectQuiz from "./../../img/projects/project-quiz.jpg"
import projectQuizBig from "./../../img/projects/project-quiz-big.PNG"
import projectCloud from "./../../img/projects/project-cloud.jpg"
import projectCloudBig from "./../../img/projects/project-cloud-big.PNG"
import projectEmployees from "./../../img/projects/project-employees.png"
import projectEmployeesBig from "./../../img/projects/project-employees-big.PNG"
import projectWeather from "./../../img/projects/project-weather.jpg"
import projectWeatherBig from "./../../img/projects/project-weather-big.PNG"
import projectGithub from "./../../img/projects/project-github.jpg"
import projectGithubBig from "./../../img/projects/project-github-big.PNG"

import projectFreelife from "./../../img/projects/project-freelife.png"
import projectFreelifeBig from "./../../img/projects/project-freelife-big.PNG"
import projectMezzanineShop from "./../../img/projects/project-mezzanine.png"
import projectMezzanineShopBig from "./../../img/projects/project-mezzanine-big.PNG"
import projectMezzanineFabric from "./../../img/projects/project-mezzanine-fabric.png"
import projectMezzanineFabricBig from "./../../img/projects/project-mezzanine-fabric-big.PNG"
import projectWarming from "./../../img/projects/project-warming.png"
import projectWarmingBig from "./../../img/projects/project-warming-big.PNG"

const projects = [
    {
        id: 0,
        type: "pet",
        title: "Quizzes Constructor (Frontend)",
        skillsFrontend: "React, JavaScript, React-DND, Redux, Redux-Thunk, Bootstrap",
        img: projectQuiz,
        imgBig: projectQuizBig,
        gitHubLink: "https://github.com/YaroslavLeyman/smart-constructor-questionnaire",
        linkLiveProject: "https://yaroslavleyman.github.io/smart-constructor-questionnaire/"
    },
    {
        id: 1,
        type: "pet",
        title: "GitHub like app (FullStack)",
        skillsFrontend: "React, JavaScript, Tailwind CSS, Vite",
        skillsBackend: "Express, MongoDB, Passport + Passport-github2",
        img: projectGithub,
        imgBig: projectGithubBig,
        gitHubLink: "https://github.com/YaroslavLeyman/github-like-app",
        linkLiveProject: "https://github-like-app-f5ze.onrender.com"
    },
    {
        id: 2,
        type: "pet",
        title: "Weather (Frontend)",
        skillsFrontend: "React, JavaScript, Chart.js, Redux-Toolkit, Tailwind CSS, Vite",
        img: projectWeather,
        imgBig: projectWeatherBig,
        gitHubLink: "https://github.com/YaroslavLeyman/weather-app",
        linkLiveProject: "https://YaroslavLeyman.github.io/weather-app"
    },
    {
        id: 3,
        type: "pet",
        title: "Cloud Storage (FullStack)",
        skillsFrontend: "NextJS, TypeScript, Ant Design",
        skillsBackend: "NestJS, TypeORM + PostgreSQL, Swagger, PassportJS + JWT",
        img: projectCloud,
        imgBig: projectCloudBig,
        gitHubLink: "https://github.com/YaroslavLeyman/cloud-storage",
        linkLiveProject: "https://cloud.itleiman.ru"
    },
    {
        id: 4,
        type: "pet",
        title: "Employees (FullStack)",
        skillsFrontend: "React, TypeScript, Redux-Toolkit, RTK-Query, Ant Design",
        skillsBackend: "Express, JWT, Prisma",
        img: projectEmployees,
        imgBig: projectEmployeesBig,
        gitHubLink: "https://github.com/YaroslavLeyman/employees",
        linkLiveProject: "https://employees.itleiman.ru"
    },


    /*-----------------Commercial projects----------------- */
    {
        id: 5,
        type: "commercial",
        title: "Freelife",
        skillsFrontend: "React, TypeScript, Redux Toolkit, Sass, MUI, AntD Chart",
        skillsBackend: "PHP, Laravel, PostgreSQL, Docker",
        img: projectFreelife,
        imgBig: projectFreelifeBig,
        linkLiveProject: "https://free-life.app"
    },
    {
        id: 6,
        type: "commercial",
        title: "Mezzanine shop",
        skillsFrontend: "JavaScript, React, Redux, Bootstrap",
        skillsBackend: "MongoDB, Node.js, Express.js",
        img: projectMezzanineShop,
        imgBig: projectMezzanineShopBig,
        linkLiveProject: "https://m-mezzanine.com"
    },
    {
        id: 7,
        type: "commercial",
        title: "Mezzanine fabric",
        skillsFrontend: "TypeScript, NextJS, Redux, Bootstrap",
        skillsBackend: "MongoDB, Node.js, Express.js",
        img: projectMezzanineFabric,
        imgBig: projectMezzanineFabricBig,
        linkLiveProject: "https://m-mezzanine.ru/"
    },
    {
        id: 8,
        type: "commercial",
        title: "Warming up the car",
        skillsFrontend: "JavaScript, NextJS, Bootstrap",
        img: projectWarming,
        imgBig: projectWarmingBig,
        linkLiveProject: "https://otogrev.kik-klimat.ru"
    },
]

export { projects }