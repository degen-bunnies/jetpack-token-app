import React, {useLayoutEffect} from 'react';
import './Header.css';
import jetpackSite from './jetpack_site.png';

function Header(props) {
  const jetpackSiteImgPreload = () => {
    let img = new Image();
    img.src = jetpackSite;
  };

  useLayoutEffect(() => {
    jetpackSiteImgPreload();
  }, []);

  return (
    <div className="header">
      <div className="header-content">
        <img className="landing-image" src={jetpackSite} alt="Jet pack landing background"/>
        <div className="tokenomics">
          <h1>{props.text}</h1>
          <h2>
            <div>Total supply: 1,000,000,000,000,000 Pack</div>
            <div>Minimum unit: 1 Pack</div>
            <div>1 Jet = 1,000,000 Packs</div>
          </h2>
          <button className="fund-button">Request Funds (Coming Soon)</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
