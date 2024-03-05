import { ItalianSofa as sofa } from '../../assets/images';
import { LightPinkBG } from '../../assets/backgrounds';
import { RedCircle, PurpleCircle, GreenCircle } from '../../assets/icons';

import './ItalianSofa.scss';

const ItalianSofa = () => {
  return (
    <>
      <section className="italianSofa__container">
        <div className="italianSofa">
          <div className="italianSofa__leftSide">
            <img
              className="italianSofa__bg"
              src={LightPinkBG}
              alt="Light-pink bg"
            />
            <img className="italianSofa__sofa" src={sofa} alt="Italian Sofa" />
          </div>

          <div className="italianSofa__content">
            <h3>Unique Features Of Leatest & Trending Products</h3>
            <ul className="italianSofa__list">
              <li>
                <img src={RedCircle} alt="Red Circle" />
                All frames constructed with hardwood solids and laminates
              </li>
              <li>
                <img src={PurpleCircle} alt="Purple Circle" />
                Reinforced with double wood dowels, glue, screw - nails corner{' '}
              </li>

              <li>
                <img src={GreenCircle} alt="Green Circle" />
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>
            <div className="italianSofa__addCart">
              <button className="italianSofa__btn">Add To Cart</button>
              <span>B&B Italian Sofa $32.00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItalianSofa;
