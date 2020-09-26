import React from 'react';
import globalData from 'my-src/data';
import IconAuthorList from './IconAuthorList';
import './styles.scss';

const { gmail } = globalData.contact;
const social = Object.values(globalData.contact.social);
const Footer = () => {
  return (
    <footer className="global-outer-container contact-outer-container">
      <div className="global-inner-container contact-inner-container">
        <div className="title">
          DYLAN <span>WORKSHOP</span>
        </div>
        <IconAuthorList />
        <div className="mail">
          <a href={`mailto:${gmail.src}`}>{gmail.src}</a>
        </div>
        <div className="social">
          {social.map((item, idx) => (
            <a
              href={item.src}
              target="_blank"
              rel="noreferrer"
              key={`footer_social_${idx}`}
            >
              <img aria-label={item.name} src={item.icon} alt="Social Icons" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
