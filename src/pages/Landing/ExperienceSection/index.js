import React from 'react';
import './styles.scss';
import imgSpaceShuttle from 'my-images/space_shuttle.png';

const ExperienceSection = () => {
    return (
        <section className="experience-outer-container">
            <div className="experience-inner-container">
                <h2>Experience</h2>
                <div className="list-container">
                    <div className="item">
                        <div className="year">2013</div>
                        <div className="position">
                            Developer @ Tiger Party
                            <img src={imgSpaceShuttle} />
                        </div>
                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="item">
                        <div className="year">2013</div>
                        <div className="position">
                            Developer @ Tiger Party
                            <img src={imgSpaceShuttle} />
                        </div>
                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="item">
                        <div className="year">2013</div>
                        <div className="position">
                            Developer @ Tiger Party
                            <img src={imgSpaceShuttle} />
                        </div>
                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="item">
                        <div className="year">2013</div>
                        <div className="position">
                            Developer @ Tiger Party
                            <img src={imgSpaceShuttle} />
                        </div>
                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="item">
                        <div className="year">2013</div>
                        <div className="position">
                            Developer @ Tiger Party
                            <img src={imgSpaceShuttle} />
                        </div>
                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;