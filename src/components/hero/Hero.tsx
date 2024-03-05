import { Lamp, Headphones } from '../../assets/images';
import { DarkPurpleBG, LightPurpleBG } from '../../assets/backgrounds';
import { PinkEllipse, Pagination } from '../../assets/icons';

import './Hero.scss';

const Hero = () => {
  return (
    <>
      <section className="hero__container">
        <div className="hero">
          <img className="hero__lamp" src={Lamp} alt="Lamp Image" />
          <img className="hero__ellipse" src={PinkEllipse} alt="PinkEllipse" />
          <div className="hero__content">
            <div className="hero__content-text">
              <span>Best Headphones For Your Life....</span>
              <h1>New Trendy Collection Headphones</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
            <a className="hero__content-btn">Shop Now</a>
          </div>
          <img className="hero__darkBG" src={DarkPurpleBG} alt="Dark BG SVG" />
          <img
            className="hero__lightBG"
            src={LightPurpleBG}
            alt="Light BG SVG"
          />
          <img
            className="hero__headphones"
            src={Headphones}
            alt="Headphones img"
          />
          <div className="hero__discount">
            <h3>50% Off</h3>
          </div>
          <img
            className="hero__pagination"
            src={Pagination}
            width={85}
            height={19}
            alt="pagination icon"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
