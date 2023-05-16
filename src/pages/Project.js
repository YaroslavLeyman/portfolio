import { useParams } from "react-router-dom"

import BtnGitHub from "../components/btnGitHub/BtnGitHub"
import BtnLinkProject from "../components/btnGitHub/BtnLinkProject"
import { projects } from "../components/helpers/projectsList";


function Project () {

    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Technologies used:</p>
                        <p>{project.skills}</p>
                    </div>
                    
                    <div className="project-details__buttons">
                        <BtnLinkProject link={project.linkLiveProject} />
                        <BtnGitHub link={project.gitHubLink} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project