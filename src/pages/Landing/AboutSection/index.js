import React from 'react';
import './styles.scss';
import fileResume from 'my-files/resume.pdf';
import globalData from 'my-src/data';
import data from './data';

const contact = globalData.contact;
const interests = data.interests;
const info = data.info;

const AboutSection = () => {
    return (
        <section className="about-outer-container">
            <div className="about-inner-container">
                <h2>About Me</h2>
                <div className="detail">
                    Name: <u>{info.name}</u>, &nbsp; Age: <u>{info.age}</u> years, &nbsp; Location: <u>{info.location}</u>
                </div>
                <div>
                    Dear all, my name is Dylan, I am a programmer, a full-stack engineer, with experience coworking with several different teams, and luckily had a little experience in management.
                    My major is computer science with a bachelor's degree, but if there is a major call volleyball bachelor's degree, I think I could graduate with a double major! 
                    I really enjoy the time to work with the team which sharing and helping with no second thought but just for the same goal.
                    <div className="adage">"The strength of the team is each individual member. The strength of each member is the team." — Phil Jackson</div>
                </div>
                <br/>
                <div>
                    I am a person who fueled by the curious and by the feedbacks. In the beginning, I wrote Android, PHP, and old version fo XCode. 
                    Then, suddenly I am obsessed with Javascript, just because Javascript can get feedback to me in the quickest way (at least it was in my thought at that time).
                    But the JS tree is growing so fast, you will find out that more you know then more you don't know and more you need to learn in a humble way.
                    The JS tree brings me from front-end to back-end, from browser to Docker and so many unknown fields, and it is still growing, unstoppable.
                    <div className="adage">"I think it’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better." - Elon Musk</div>
                </div>
                <br/>
                <div>
                    Are you looking for someone to build or grow with the team together? I am a self-motivated person and want to learn and explore the unknown fields with a discovery team.
                    Let's reach out to
                    &nbsp;<u><a href={`mailto:${contact.gmail}`}>{contact.gmail}</a></u>&nbsp;
                    to connect, or know me more on my
                    &nbsp;<u><a href={contact.linkedin} target="_blank">Linkedin</a></u> / 
                    &nbsp;<u><a href={contact.github} target="_blank">Github</a></u> / 
                    &nbsp;<u><a href={contact.facebook} target="_blank">Facebook</a></u> / 
                    &nbsp;<u><a href={fileResume} download>Resume</a></u>.
                </div>
                <br />
                <div className="interest">
                    <div>Interests:</div>
                    { interests.map((item) => (<img key={item.name} className="item" src={item.src} />)) }
                </div>
            </div>
        </section>
    );
}

export default AboutSection;