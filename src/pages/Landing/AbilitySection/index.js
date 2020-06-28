import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './styles.scss';

const AbilitySection = () => {
    return (
        <section className="ability-outer-container">
            <div className="ability-inner-container">
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
    );
}

export default AbilitySection;