import React from 'react';
import './styles.scss';
import globalData from 'my-src/data';

const gmail = globalData.contact.gmail;
const social = Object.values(globalData.contact.social);
const Footer = () => {
    return (
        <footer className="global-outer-container contact-outer-container">
            <div className="global-inner-container contact-inner-container">
                <div className="title">DYLAN <span>WORKSHOP</span></div>
                <div className="mail">
                    <a href={`mailto:${gmail.src}`}>{gmail.src}</a>
                </div>
                <div className="social">
                    {social.map((item, idx) => (
                        <a 
                            href={item.src} 
                            target="_blank"
                            key={`footer_social_${idx}`}
                        >
                            <img src={item.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </footer> 
    );
}

export default Footer;