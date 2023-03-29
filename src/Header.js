import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <div className="header-content">
        <img src={props.imageSrc} alt={props.imageAlt}/>
        <h1>{props.text}</h1>
        <h2>
          <div>Total supply: 1,000,000,000,000,000 Pack</div>
          <div>Minimum unit: 1 Pack</div>
          <div>1 Jet = 1,000,000 Packs</div>
        </h2>
        <button className="fund-button">Request Funds (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Header;
