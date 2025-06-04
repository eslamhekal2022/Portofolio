import React from 'react'
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa';

export default function SocialIcons() {
  return (
 <div className="social-icons">
        <a href=" https://www.linkedin.com/in/eslam-hekal-9824a22a3/"target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaLinkedin size={30} color="#3b5998" />
        </a>
        <a href="https://wa.me/201065624727" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={30} color="#25D366" />
        </a>
          <a href="https://github.com/eslamhekal2022" target="_blank" rel="noopener noreferrer" aria-label="github">
          <FaGithub size={30} color="black" />
        </a>
        
      </div>  )
}
