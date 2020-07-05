import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './styles.scss';
import data from './data';

const { languages } = data;
const { programming } = data;
const { others } = data;
const AbilitySection = () => {
  const renderProgressBar = (title, dataArr) => {
    return (
      <React.Fragment>
        <div className="title">{title}</div>
        {dataArr.map((item, idx) => (
          <div key={`ability_${idx}`}>
            <label>{item.name}</label>
            <ProgressBar now={item.score} animated="true" />
          </div>
        ))}
      </React.Fragment>
    );
  };
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
};

export default AbilitySection;
