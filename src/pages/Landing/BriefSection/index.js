import React from 'react';
import './styles.scss';
import imgProfile from 'my-images/profile.png';

const BriefSection = () => {
    return (
        <section className="brief-outer-container">
            <div className="brief-inner-container">
                <div className="profile-wrapper"><img src={imgProfile} /></div> 
                <div className="info-wrapper">
                    <div className="layer-top">
                        <b>Hi, I'm Dylan.</b> <br /> 
                        WEB DEVELOPER + EXPLORER <br /> 
                        <div className="desc">
                            A full-stack engineer from Taiwan with a focus on exploring the world.
                        </div>
                        <div className="resume">RESUME</div>
                    </div>
                    <div className="square-y" />
                    <div className="square-g" />
                </div>
            </div>
        </section>
    );
}

export default BriefSection;