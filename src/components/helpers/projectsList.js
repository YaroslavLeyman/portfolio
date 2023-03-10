import projectGpt from "./../../img/projects/project-gpt.PNG"
import projectImgAi from "./../../img/projects/project-imgai.PNG"
import projectBurger from "./../../img/projects/project-burger.PNG"
import projectCalc from "./../../img/projects/project-calculator.PNG"
import projectPingPong from "./../../img/projects/project-ping-pong.PNG"
import projectMinesweeper from "./../../img/projects/project-minesweeper.PNG"
import projectMesto from "./../../img/projects/project-mesto.PNG"


const projects = [
    {
        title: "Chat OpenAI",
        skills: "React.js, Node.js, Express.js",
        img: projectGpt,
        imgBig: projectGpt,
        gitHubLink: "https://github.com/YaroslavLeyman/Chat-Open-AI",
        linkLiveProject: "https://chat.itleiman.ru"
    }, 
    {
        title: "AI Image Generation",
        skills: "MongoDB, Express.js, React.js, Node.js",
        img: projectImgAi,
        imgBig: projectImgAi,
        gitHubLink: "https://github.com/YaroslavLeyman/AI-Image-Generation",
        linkLiveProject: "https://imgai.itleiman.ru"
    }, 
    {
        title: "Stellar Burgers",
        skills: "React, TypeScript, Redux, React-DND, WebSocket",
        img: projectBurger,
        imgBig: projectBurger,
        gitHubLink: "https://github.com/YaroslavLeyman/react-burger",
        linkLiveProject: "https://yaroslavleyman.github.io/react-burger/"
    }, 
    {
        title: "Calculator-Constructor",
        skills: "TypeScript, React, Redux, Redux toolkit",
        img: projectCalc,
        imgBig: projectCalc,
        gitHubLink: "https://github.com/YaroslavLeyman/calculator-constructor-ts",
        linkLiveProject: "https://calc.itleiman.ru/"
    }, 
    {
        title: "Ping-Pong",
        skills: "Vanilla JavaScript",
        img: projectPingPong,
        imgBig: projectPingPong,
        gitHubLink: "https://github.com/YaroslavLeyman/ping-pong-js",
        linkLiveProject: "http://game.itleiman.ru"
    }, 
    {
        title: "Minesweeper",
        skills: "Vanilla JavaScript",
        img: projectMinesweeper,
        imgBig: projectMinesweeper,
        gitHubLink: "https://github.com/YaroslavLeyman/minesweeper-js",
        linkLiveProject: "https://game.itleiman.ru/minesweeper/"
    },
    {
        title: "Mesto",
        skills: "React, TypeScript, Redux, React-DND, WebSocket",
        img: projectMesto,
        imgBig: projectMesto,
        gitHubLink: "https://github.com/YaroslavLeyman/mesto-project",
        linkLiveProject: "https://yaroslavleyman.github.io/mesto-project/"
    }
]

export { projects }