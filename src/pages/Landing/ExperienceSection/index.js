import React from 'react';
import './styles.scss';
import imgLink from 'my-images/link.png';
import data from './data';
import imgIdea from 'my-images/idea.png';

const works = data.works;
const ExperienceSection = () => {
    const renderWorkList = () => {
        return (
            <div className="list-container">
            {works.map((item, itemIdx) => (
                <div key={`exp_${itemIdx}`} className="item">
                    <div className="year">{item.year}</div>
                    <div className="position">
                        {item.position} @&nbsp;
                        <a href={item.link} target="_blank">
                            <u>{item.name}<img src={imgLink} /></u>
                        </a>
                    </div>
                    <div className="desc">{item.desc}</div>
                    <div>
                    {item.highlights.map((highlight, idx) => (
                        <div key={`exp_${itemIdx}_highlight_${idx}`} className="unlock">
                            <img src={imgIdea} /> {highlight}<br/>
                        </div>
                    ))}
                    </div>
                    <div className="tag-list">
                    {item.tags.map((tag, idx) => (
                        <div key={`exp_${itemIdx}_tag_${idx}`} className="tag">{tag}</div>
                    ))}
                    </div>
                </div>
            ))}
            </div>
        );
    }
    return (
        <section className="experience-outer-container">
            <div className="experience-inner-container">
                <h2>Experience</h2>
                {renderWorkList()}
            </div>
        </section>
    );
}

export default ExperienceSection;

