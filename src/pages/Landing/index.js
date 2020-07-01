import React from 'react';
import BriefSection from './BriefSection';
import AboutSection from './AboutSection';
import AbilitySection from './AbilitySection';
import HistorySection from './HistorySection';

const Landing = () => {
    return (
        <React.Fragment>
            <BriefSection />
            <AboutSection />
            <AbilitySection />
            <HistorySection />
        </React.Fragment>
    );
}

export default Landing;