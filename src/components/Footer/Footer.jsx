import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation(); 

  return (
    <footer>
      <a href="https://github.com/Poliih" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/poliih-rodrigues/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:polianarodriguesds@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <p>{t('github')} | {t('linkedin')} | {t('email')}</p> 
    </footer>
  );
}

export default Footer;
