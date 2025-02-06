import "../styles/ProjectsPage.css";
import ProjectItem from "../components/ProjectItem";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce website built using the MERN stack.",
      link: "https://i.ytimg.com/vi/y99YgaQjgx4/maxresdefault.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js showcasing skills, projects, and experience.",
      link: "https://i.ytimg.com/vi/Yw7yWHigGKI/maxresdefault.jpg"
    },
    {
      title: "Movie App",
      description: "A movie database app built with React, allowing users to add, filter, and sort movies.",
      link: "https://camo.githubusercontent.com/045cffbdf5dd360a85d76c95b5850d76a2584b82cf4b2f57d2a927a4df2fb541/68747470733a2f2f692e696d6775722e636f6d2f6c734c6b4e637a2e6a7067"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}