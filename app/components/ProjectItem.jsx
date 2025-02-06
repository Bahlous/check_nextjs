import "../styles/ProjectItem.css";

export default function ProjectItem({ title, description, link }) {
  return (
    <div className="project-item">
      <img className="project-image" src={link} alt={title} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
}