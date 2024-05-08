import Project from "../components/project/Project";
import { projects } from "../components/helpers/projectsList";

function Projects() {
    return (
      <main className="section">
        <div className="container">
          <h2 className="title-1">Commercial projects</h2>
          <ul className="projects">
            {projects
              .filter((project) => project.type === "commercial")
              .map((project) => (
                <Project
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  img={project.img}
                />
              ))}
          </ul>
  
          <h2 className="title-1">Examples of pet projects</h2>
          <ul className="projects">
            {projects
              .filter((project) => project.type === "pet")
              .map((project) => (
                <Project
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  img={project.img}
                />
              ))}
          </ul>
        </div>
      </main>
    );
  }
  
  export default Projects;
