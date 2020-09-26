import React from 'react';
import './styles.scss';
import { Card, Button } from 'react-bootstrap';
import webpProjectAmazon from 'my-images/project_amazon_clone.webp';
import webpProjectMinesweeper from 'my-images/project_minesweeper.webp';

const projects = [
  {
    webp: webpProjectAmazon,
    title: 'Amazon Clone',
    link: 'https://clone-8ab73.web.app/',
    skills: ['React', 'Stripe', 'Firebase', 'BEM'],
    desc: `Create an account, and pick some items, then pay with
    the fake credit card! Let's shopping!`,
  },
  {
    webp: webpProjectMinesweeper,
    title: 'Mine Sweeper',
    link: 'https://minesweeper-dylan.netlify.app/',
    skills: ['React', 'SASS', 'Fun'],
    desc: `Enjoy the classic game, try the EXPERT mode to be an expert! - since 1989`,
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__cardsWrapper">
          {projects.map((item, pIdx) => (
            <Card key={`project-demo-${pIdx}`} className="projects__card">
              <Card.Img
                className="projects__cardImg"
                variant="top"
                src={item.webp}
              />
              <Card.Body className="projects__cardBody">
                <Card.Title className="projects__cardTitle">
                  {item.title}
                </Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <div className="projects__cardSkills">
                  {item.skills.map((skill, sIdx) => (
                    <div
                      className="projects__cardSkill"
                      key={`project-${pIdx}-skill-${sIdx}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <Button
                  className="projects__cardButton"
                  variant="primary"
                  href={item.link}
                  target="_blank"
                >
                  Go Demo
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
