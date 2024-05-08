import Header from "../components/header/Header";

function Home() {
  const sections = [
    {
      title: "Frontend",
      technologies: [
        "TypeScript / JavaScript (ES6+)",
        "NextJS / React",
        "Redux / Redux Toolkit",
        "Jest / React Testing Library",
        "CSS / SCSS",
        "Ant Design / Material UI / Bootstrap / Tailwind",
      ],
    },
    {
      title: "Backend",
      technologies: [
        "Node.JS / PHP",
        "Express / Laravel",
        "PostgreSQL / MongoDB",
        "RESTApi / Swagger",
        "WebSocket / Socket.io",
      ],
    },
    {
      title: "Other",
      technologies: [
        "Mobile: React Native / Expo",
        "Version control: Git / GitHub",
        "Project activities: Trello / Bitrix24",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="section">
        <h2 className="title-3">Technologies that I use in my work</h2>
        <div className="container">
          <ul className="content-list">
            {sections.map((section) => (
              <li className="content-list__item" key={section.title}>
                <h2 className="title-2">{section.title}</h2>
                {section.technologies.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
