import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import egyptFlag from '../images/Flag_of_Egypt.png';
import usFlag from '../images/Flag_of_the_United_States.png';
import './navbar.css';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  useEffect(() => {
    setSelectedLang(i18n.language);
  }, [i18n.language]);

  const flags = {
    en: usFlag,
    ar: egyptFlag,
  };

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setSelectedLang(lang);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">{t("logo")}</Link>
      </div>

      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
          end
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
        >
          {t("projects_title")}
        </NavLink>
      
      
         <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
        >
          {t("about_title")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "navlink active" : "navlink"}
        >
          {t("contact_me")}
        </NavLink>
      </div>

      <div className="navbar__lang-switcher">
        <img className="flag-icon" src={flags[selectedLang]} alt="flag" />
        <select
          className="lang-select"
          value={selectedLang}
          onChange={changeLanguage}
          aria-label={t("change_language")}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </nav>
  );
}
