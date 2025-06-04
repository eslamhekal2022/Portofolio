import { useTranslation } from 'react-i18next';
import {FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './contact.css';
import SocialIcons from '../socialIcons/SocialIcons';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <h2>{t("contact_me")}</h2>

      <div className="contact-info">
        <p><FaPhoneAlt /> +20 106 562 4727</p>
        <p><FaMapMarkerAlt /> {t("address")}</p>
        <p><FaEnvelope /> youremail@example.com</p>
      </div>
     <SocialIcons/>

    </section>
  );
}
