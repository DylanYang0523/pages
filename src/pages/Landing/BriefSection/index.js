import React from 'react';
import './styles.scss';
import imgProfile from 'my-images/profile.png';
import globalData from 'my-src/data';

const { resume } = globalData;
const social = Object.values(globalData.contact.social);
const BriefSection = () => {
  return (
    <section className="brief-outer-container">
      <div className="brief-inner-container">
        <div className="profile-wrapper">
          <img src={imgProfile} />
        </div>
        <div className="info-wrapper">
          <div className="layer-top">
            <div className="greeting">Hi, I&apos;m Dylan.</div>
            <div className="occupations">WEB DEVELOPER + EXPLORER</div>
            <div className="desc">
              A full-stack engineer from Taiwan with a focus on exploring the
              world.
            </div>
            <div className="resume">
              <a href={resume.src} download>
                RESUME<span>⬇</span>
              </a>
            </div>
            <div className="social">
              {social.map((item, idx) => (
                <a
                  href={item.src}
                  target="_blank"
                  rel="noreferrer"
                  key={`brief_social_${idx}`}
                >
                  <img src={item.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="square-y" />
          <div className="square-g" />
        </div>
      </div>
    </section>
  );
};

export default BriefSection;
