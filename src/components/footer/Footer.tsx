import { Instagram, Twitter, Facebook } from '../../assets/icons';
import Logo from '../../assets/logos/Logo.svg';
import { FooterMenus } from '../../../data/FooterMenus';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__topSide">
          <div className="footer__form">
            <img src={Logo} alt="hekto-logo" width={103} height={30} />
            <div className="footer__inputContainer">
              <input type="text" placeholder="Enter Email Address" />
              <button>Sign Up</button>
            </div>
            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
          </div>
          <div className="footer__menu">
            {FooterMenus.map((menu, index) => {
              return (
                <div
                  key={`Menu ${menu.title}`}
                  className="footer__menu-section"
                  style={{
                    marginRight:
                      index === 0 ? '111px' : index === 1 ? '130px' : 'none',
                  }}
                >
                  <span className="footer__menu-section-title">
                    {menu.title}
                  </span>
                  {menu.list.map((item) => {
                    return (
                      <span
                        key={`Menu ${item}`}
                        className="footer__menu-section-item"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer__botSide">
          <span className="footer__rights">©Webecy - All Rights Reserved</span>
          <ul className="footer__media">
            <li>
              <img src={Facebook} alt="facebook-icon" />
            </li>
            <li>
              <img src={Twitter} alt="facebook-icon" />
            </li>
            <li>
              <img src={Instagram} alt="facebook-icon" />
            </li>
          </ul>{' '}
        </div>
      </div>
    </>
  );
};

export default Footer;
