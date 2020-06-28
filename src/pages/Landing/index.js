import React from 'react';
import BriefSection from './BriefSection';
import AboutSection from './AboutSection';
import AbilitySection from './AbilitySection';
import ExperienceSection from './ExperienceSection';

const Landing = () => {
    return (
        <React.Fragment>
            <BriefSection />
            <AboutSection />
            <AbilitySection />
            <ExperienceSection />
        </React.Fragment>
    );
}

export default Landing;