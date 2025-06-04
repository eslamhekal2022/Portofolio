import { useTranslation } from "react-i18next";
import './home.css'; // هنجهزه بعدين
import myImage from '../images/490105583_3757508681060109_9042591719264214686_n.jpg'; // غيّرها لصورتك
import { Link } from "react-router-dom";
import SocialIcons from "../socialIcons/SocialIcons";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="text-section">
        <h1>{t("home_title")}</h1>
        <p>{t("home_description")}</p>
        <Link to={"/contact"} className="contact-btn">{t("contact_me")}</Link>
      </div>
      <div className="image-section">
        <img src={myImage} alt="Me" />
        <div className="social">
        <h2>Eslam Rashad Hekal</h2>
                <SocialIcons/>

        </div>
      </div>
    </div>
  );
}
