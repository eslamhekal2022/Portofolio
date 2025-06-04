import { useTranslation } from "react-i18next";
import './about.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about-container" id="about">
      <h2>{t("about_title")}</h2>
      <p>{t("about_description")}</p>
      <ul className="skills-list">
              <li>Html</li>
              <li>css3</li>
              <li>Javascript</li>
              <li>React js</li>
              <li>Next js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>RESTful APIs</li>
      </ul>
    </section>
  );
}
