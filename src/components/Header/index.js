import React from 'react';
import imgBurger from 'my-images/burger.png';
import './styles.scss';

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-inner-container">
        <div className="brand">
          DYLAN <span>WORKSHOP</span>
        </div>
        <img className="burger" src={imgBurger} />
      </div>
    </div>
  );
};

export default Header;
