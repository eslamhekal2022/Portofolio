import { useTranslation } from "react-i18next";
import './projects.css';
import mangementImg from "../images/Projects/mangement.png"
import Ecommerce from "../images/Projects/Ecommerce.png"
import Restaurant from "../images/Projects/Restaurant.png"
export default function Projects() {
  const { t } = useTranslation();

  const projectList = [
    {
      title: t("project1_title"),
      description: t("project1_desc"),
      img: Restaurant,
      link: "https://restaurant-front-lovat.vercel.app/"
    },
    {
      title: t("project2_title"),
      description: t("project2_desc"),
      img: Ecommerce,
      link: "https://ecommerce-front-swart.vercel.app"
    },
    {
      title: t("project3_title"),
      description: t("project3_desc"),
      img: mangementImg,
      link: "https://mangement-front.vercel.app"
    }
  ];

  return (
    <section className="projects-container" id="projects">
      <h2>{t("projects_title")}</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
          <img src={project.img} alt={project.title}/>  
          <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{t("view_code")}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
