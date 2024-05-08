import { useParams, Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnLinkProject from "../components/btnGitHub/BtnLinkProject";
import { projects } from "../components/helpers/projectsList";

function Project() {

  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <Link to="/projects">
          <FaArrowLeft className="project-icon" size={40} />
        </Link>

        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p className="project-details__title">Technologies used</p>
            <p className="project-details__paragraph">
              Frontend: {project.skillsFrontend}
            </p>
            {project.skillsBackend && (
              <p className="project-details__paragraph">
                Backend: {project.skillsBackend}
              </p>
            )}
          </div>

          <div className="project-details__buttons">
            <BtnLinkProject link={project.linkLiveProject} />
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
