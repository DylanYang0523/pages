import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './styles.scss';
import data from './data';

const languages = data.languages;
const programming = data.programming;
const others = data.others;
const AbilitySection = () => {
    const renderProgressBar = (title, data) => {
        return (
            <React.Fragment>
                <div className="title">{title}</div>
                { data.map((item) => (
                    <React.Fragment>
                        <label>{item.name}</label>
                        <ProgressBar now={item.score} />
                    </React.Fragment>
                )) }
            </React.Fragment>
        )
    }
    return (
        <section className="ability-outer-container">
            <div className="ability-inner-container">
                <h2>Abilities</h2>
                {renderProgressBar('Languages', languages)}
                {renderProgressBar('Programming', programming)}
                {renderProgressBar('Others', others)}
            </div>
        </section>
    );
}

export default AbilitySection;