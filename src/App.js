import React, {useLayoutEffect} from 'react';
import './App.css';
import Header from './Header';

import jetpackToken from './jetpack_token_small.png';
import jetpackLogo from './jetpack_logo.png';
import degenBunniesLogo from "./degen_bunnies_logo.png";
import jetpackSite from "./jetpack_site.png";

function App() {
  const jetpackSiteImgPreload = () => {
    let img = new Image();
    img.src = jetpackSite;
  };

  useLayoutEffect(() => {
    jetpackSiteImgPreload();
  }, []);

  return (
    <div className="App">
      <Header/>
      <main>
        <div className="whitepaper">
          <h1>JET PACK Token: Whitepaper</h1>
          <ol className="subtitle">
            <li>
              <div>Introduction</div>
              <div className="content">
                In a world where apes climb, ducks swim, and clay is found on terra firma, we have witnessed utility
                tokens, meme tokens, and rugs of all sorts. Now, it's time to welcome the dawn of a new era – the moon
                token. Introducing Jet Pack! This token is founded by the Degen Bunnies degenerate community, bringing
                the intergalactic utility of absolutely nothing! Strap on your Jet Pack and enjoy the exhilarating
                vertical trajectory as we soar toward the moon.
              </div>
            </li>
            <li>
              <div>Tokenomics</div>
              <div className="content">
                <ul>
                  <li>Total supply: 1,000,000,000,000,000 Pack Tokens</li>
                  <li>Minimum unit: 1 Pack</li>
                  <li>1 Jet = 1,000,000 Packs</li>
                </ul>
              </div>
            </li>
            <li>
              <div>Token Distribution</div>
              <div className="content">
                <ul>
                  <li>30%: Distributed to Degen Bunnies NFT holders through a faucet</li>
                  <li>30%: Allocated for games and app development through DAO governance</li>
                  <li>10%: Reserved for marketing and promotions</li>
                  <li>5%: Reserved for future partnerships and collaborations</li>
                  <li>3%: Reserved for community support</li>
                  <li>1%: Reserved for development support</li>
                  <li>1%: Reserved for legal consultation</li>
                  <li>20%: Reserved for a contingency fund</li>
                </ul>
              </div>
            </li>
            <li>
              <div>Jet Pack Token Utility</div>
              <div className="content">
                <ul>
                  <li>In-game currency: Jet Pack tokens can be utilized as in-game currency for various games and apps
                    built on the platform.
                  </li>
                  <li>Atomic swap fees: Jet Pack tokens can be used to pay fees when swapping NFTs through the atomic
                    swap feature. The fees collected will be burned permanently, reducing the overall supply of Jet Pack
                    tokens.
                  </li>
                  <li>Community rewards: Jet Pack tokens can be distributed as rewards to community members who
                    contribute to the project's growth and success.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>Building Trust and Transparency on Cardano</div>
              <div className="content">
                <ul>
                  <li>Smart contract audit: Jet Pack's smart contract will undergo a thorough audit by a reputable third
                    party to ensure its security and functionality.
                  </li>
                  <li>Consensus-based decision-making: As Cardano currently does not officially support multi-signature
                    wallets, the project will implement a consensus-based decision-making process for token distribution
                    and budget execution. This involves collaborating with project participants and reaching an
                    agreement before conducting any major transactions.
                  </li>
                  <li>Decentralized Autonomous Organization (DAO): Utilize a DAO structure with community involvement
                    for token management, further promoting transparency and trust within the project.
                  </li>
                  <li>Regular reporting: The project team will provide regular updates to the community, detailing the
                    progress of the project and the allocation of funds.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>Future Developments</div>
              <div className="content">
                <ul>
                  <li>Jet Pack Platform: The project aims to develop a platform where developers can create games and
                    apps that utilize Jet Pack tokens as in-game currency. This will help expand the Jet Pack ecosystem
                    and increase the token's utility.
                  </li>
                  <li>Partnerships and collaborations: Jet Pack will actively seek partnerships and collaborations with
                    other projects, further expanding the token's utility and value.
                  </li>
                  <li>Community engagement: Jet Pack will continue to engage with the community, collecting feedback and
                    suggestions to help improve the project and grow the ecosystem.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>Adapting to Cardano Ecosystem Developments</div>
              <div className="content">
                Until multi-signature wallets are officially supported by Cardano, the Jet Pack team will implement a
                consensus-based decision-making process for token distribution and budget execution.
                For example, a Discord-based operational organization will be created where a group of individuals can
                reach a consensus and operate the project through multi-signature transactions.
                This will promote transparency and trust within the project and ensure that major transactions are
                conducted with the agreement of the group.
                As the Cardano ecosystem continues to develop, the Jet Pack team will closely monitor developments and
                adapt accordingly.
              </div>
            </li>
            <li>
              <div>Conclusion</div>
              <div className="content">
                Jet Pack Token presents an exciting opportunity to be part of a vibrant community-driven project,
                focused on the growth and development of a unique token ecosystem. With a strong emphasis on trust,
                transparency, and utility, Jet Pack is poised to make a significant impact in the world of meme tokens
                and beyond.
                Join us on this incredible journey to the moon!
              </div>
            </li>
          </ol>
          <div className="signature">
            <a href="https://degenbunnies.com/"><img src={degenBunniesLogo} alt="Degen Bunnies Logo"/></a>
            <img src={jetpackLogo} alt="JetPack Logo"/>
            <img src={jetpackToken} alt="JetPack Token Logo"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
