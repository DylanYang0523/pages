import React from 'react';
import './styles.scss';
import globalData from 'my-src/data';
import data from './data';

const { resume } = globalData;
const { gmail } = globalData.contact;
const { social } = globalData.contact;
const { interests } = data;
const { info } = data;

const AboutSection = () => {
  return (
    <section className="about-outer-container">
      <div className="about-inner-container">
        <h2>About Me</h2>
        <div className="detail">
          Name: <u>{info.name}</u>, &nbsp; Age: <u>{info.age}</u> years, &nbsp;
          Location: <u>{info.location}</u>
        </div>
        <div>
          Dear all, my name is Dylan, I am a programmer, a full-stack engineer,
          with experience coworking with several different teams, and luckily
          had a little experience in management. My major is computer science
          with a bachelor&apos;s degree, but if there is a major call volleyball
          bachelor&apos;s degree, I think I could graduate with a double major!
          I really enjoy the time to work with the team which sharing and
          helping with no second thought but just for the same goal.
          <div className="adage">
            &quot;The strength of the team is each individual member. The
            strength of each member is the team.&quot; — Phil Jackson
          </div>
        </div>
        <br />
        <div>
          I am a person who fueled by the curious and by the feedbacks. In the
          beginning, I wrote Android, PHP, and old version fo XCode. Then,
          suddenly I am obsessed with Javascript, just because Javascript can
          get feedback to me in the quickest way (at least it was in my thought
          at that time). But the JS tree is growing so fast, you will find out
          that more you know then more you don&apos;t know and more you need to
          learn in a humble way. The JS tree brings me from front-end to
          back-end, from browser to Docker and so many unknown fields, and it is
          still growing, unstoppable.
          <div className="adage">
            &quot;I think it’s very important to have a feedback loop, where
            you’re constantly thinking about what you’ve done and how you could
            be doing it better.&quot; - Elon Musk
          </div>
        </div>
        <br />
        <div>
          Are you looking for someone to build or grow with the team together? I
          am a self-motivated person and want to learn and explore the unknown
          fields with a discovery team. Let&apos;s reach out to &nbsp;
          <u>
            <a href={`mailto:${gmail.src}`}>{gmail.src}</a>
          </u>
          &nbsp; to connect, or know me more on my &nbsp;
          <u>
            <a href={social.linkedin.src} target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </u>{' '}
          / &nbsp;
          <u>
            <a href={social.github.src} target="_blank" rel="noreferrer">
              Github
            </a>
          </u>{' '}
          / &nbsp;
          <u>
            <a href={social.facebook.src} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </u>{' '}
          / &nbsp;
          <u>
            <a href={resume.src} download>
              Resume
            </a>
          </u>
          .
        </div>
        <br />
        <div className="interest">
          <div>Interests:</div>
          {interests.map((item) => (
            <img
              key={item.name}
              className="item"
              src={item.src}
              alt="Interests"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
