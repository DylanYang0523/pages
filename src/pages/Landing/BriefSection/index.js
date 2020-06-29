import React from 'react';
import './styles.scss';
import fileResume from 'my-files/resume.pdf';
import imgProfile from 'my-images/profile.png';
import imgGithub from 'my-images/github.png';
import imgFacebook from 'my-images/facebook.png';
import imgLinkedin from 'my-images/linkedin.png';
import globalData from 'my-src/data';

const contact = globalData.contact;
const BriefSection = () => {
    return (
        <section className="brief-outer-container">
            <div className="brief-inner-container">
                <div className="profile-wrapper"><img src={imgProfile} /></div> 
                <div className="info-wrapper">
                    <div className="layer-top">
                        <div className="greeting">Hi, I'm Dylan.</div>
                        <div className="occupations">WEB DEVELOPER + EXPLORER</div>
                        <div className="desc">
                            A full-stack engineer from Taiwan with a focus on exploring the world.
                        </div>
                        <div className="resume">
                            <a href={fileResume} download>RESUME<span>⬇</span></a>
                        </div>
                        <div className="social">
                            <a href={contact.facebook} target="_blank"><img src={imgFacebook} /></a>
                            <a href={contact.linkedin} target="_blank"><img src={imgLinkedin} /></a>
                            <a href={contact.github} target="_blank"><img src={imgGithub} /></a>
                        </div>
                    </div>
                    <div className="square-y" />
                    <div className="square-g" />
                </div>
            </div>
        </section>
    );
}

export default BriefSection;