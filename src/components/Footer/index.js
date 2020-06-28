import React from 'react';
import imgFacebook from 'my-images/facebook.png';
import imgLinkedin from 'my-images/linkedin.png';
import imgGithub from 'my-images/github.png';
import './styles.scss';

const Footer = () => {
    return (
        <footer className="global-outer-container contact-outer-container">
            <div className="global-inner-container contact-inner-container">
                <div className="title">DYLAN <span>WORKSHOP</span></div>
                <div className="mail">dylanyang@gmail.com</div>
                <div className="social">
                    <img src={imgFacebook} />
                    <img src={imgLinkedin} />
                    <img src={imgGithub} />
                </div>
            </div>
        </footer> 
    );
}

export default Footer;