import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LSWT.css';
import usa from './usa.png';
import br from './br.png';

function LSWT() {
  const { i18n } = useTranslation();


  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('pt'); 
    }
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Altera o idioma
  };

  return (
    <div className="language-switcher">
      <div className="switch-container">
        <div
          className={`switch ${i18n.language === 'en' ? 'switch-en' : 'switch-pt'}`}
        >
          <button
            className="switch-btn"
            onClick={() => handleLanguageChange(i18n.language === 'en' ? 'pt' : 'en')}
          >
            <div
              className={`switch-circle ${i18n.language === 'en' ? 'en' : 'pt'}`}
            ></div>
            <img
              src={i18n.language === 'en' ? usa : br}
              alt="language flag"
              className={`flag ${i18n.language === 'en' ? 'us' : 'br'}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LSWT;
