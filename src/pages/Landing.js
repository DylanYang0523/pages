import React from 'react';
import '/styles/landing.scss';
import burger from '/images/burger.svg';
import profile from '/images/profile.png';
import spaceShuttle from '/images/space_shuttle.png';
import facebook from '/images/facebook.png';
import linkedin from '/images/linkedin.png';
import github from '/images/github.png';
import { ProgressBar } from 'react-bootstrap';

const Landing = () => {
    return (
        <React.Fragment>
            <section className="global-outer-container intro-outer-container">
                <div className="global-inner-container intro-inner-container">
                    <div className="brand">DYLAN <span>WORKSHOP</span></div>
                    <img className="burger" src={burger} />
                    <div className="profile-wrapper"><img src={profile} /></div> 
                    <div className="info-wrapper">
                        <b>Hi, I'm Dylan.</b> <br /> 
                        WEB DEVELOPER + EXPLORER <br /> 
                        <div className="desc">
                            A full-stack engineer from Taiwan with a focus on exploring the world.
                        </div>
                        <div className="resume">RESUME</div>
                    </div>
                    <div className="square" />
                    <div className="square2" />
                </div>
            </section>
            <section className="global-outer-container about-outer-container">
                <div className="global-inner-container about-inner-container">
                    <h2>About Me</h2>
                    <div className="detail">
                        Name: Dylan Yang, Age: 29 years, Location: Taipei, Taiwan
                    </div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <br/>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <br/>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <div className="interest">
                        <div>Interests:</div>
                        <img className="item" src={burger} />
                        <img className="item" src={burger} />
                        <img className="item" src={burger} />
                        <img className="item" src={burger} />
                        <img className="item" src={burger} />
                    </div>
                </div>
            </section>
            <section className="global-outer-container ability-outer-container">
                <div className="global-inner-container ability-inner-container">
                    <h2>Abilities</h2>
                    <div className="title">Language</div>
                    <label>Mandarin 99%</label>
                    <ProgressBar now={99} style={{height:"10px !important"}} />
                    <label>English 60%</label>
                    <ProgressBar now={60} style={{height:"10px !important"}} />
                    <div className="title">Programming</div>
                    <label>Javascript 40%</label>
                    <ProgressBar now={40} style={{height:"10px !important"}} />
                    <label>Javascript 40%</label>
                    <ProgressBar now={40} style={{height:"10px !important"}} />
                    <label>Javascript 40%</label>
                    <ProgressBar now={40} style={{height:"10px !important"}} />
                    <label>Javascript 40%</label>
                    <ProgressBar now={40} style={{height:"10px !important"}} />
                    <label>Javascript 40%</label>
                    <ProgressBar now={40} style={{height:"10px !important"}} />
                    <div className="title">Other</div>
                    <label>Design 10%</label>
                    <ProgressBar now={10} style={{height:"10px !important"}} />
                    <label>Sketch 20%</label>
                    <ProgressBar now={20} style={{height:"10px !important"}} />
                </div>
            </section>
            <section className="global-outer-container experience-outer-container">
                <div className="global-inner-container experience-inner-container">
                    <h2>Experience</h2>
                    <div className="list-container">
                        <div className="item">
                            <div className="year">2013</div>
                            <div className="position">
                                Developer @ Tiger Party
                                <img src={spaceShuttle} />
                            </div>
                            <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                        <div className="item">
                            <div className="year">2013</div>
                            <div className="position">
                                Developer @ Tiger Party
                                <img src={spaceShuttle} />
                            </div>
                            <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                        <div className="item">
                            <div className="year">2013</div>
                            <div className="position">
                                Developer @ Tiger Party
                                <img src={spaceShuttle} />
                            </div>
                            <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                        <div className="item">
                            <div className="year">2013</div>
                            <div className="position">
                                Developer @ Tiger Party
                                <img src={spaceShuttle} />
                            </div>
                            <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                        <div className="item">
                            <div className="year">2013</div>
                            <div className="position">
                                Developer @ Tiger Party
                                <img src={spaceShuttle} />
                            </div>
                            <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="global-outer-container contact-outer-container">
                <div className="global-inner-container contact-inner-container">
                    <div className="title">DYLAN <span>WORKSHOP</span></div>
                    <div className="mail">dylanyang@gmail.com</div>
                    <div className="social">
                        <img src={facebook} />
                        <img src={linkedin} />
                        <img src={github} />
                    </div>
                </div>
            </section> 
        </React.Fragment>
    );
}

export default Landing;