import { Check } from '../../assets/icons';
import { Headphones } from '../../assets/images';

import './Discount.scss';

const Discount = () => {
  return (
    <>
      <div className="discount">
        <h2 className="discount__title">Discount Item</h2>
        <ul className="discount__menu">
          <li>Headphones</li>
          <li>Laptop</li>
          <li>Other</li>
        </ul>
        <div className="discount__content">
          <div className="discount__leftContent">
            <h3>20% Discount Of All Products</h3>
            <span>Headphones Compact</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="discount__leftContent-list">
              <li>
                <img src={Check} alt="check-icon" />
                Material expose like metals
              </li>
              <li>
                <img src={Check} alt="check-icon" />
                Simple neutral colors.
              </li>
              <li>
                <img src={Check} alt="check-icon" />
                Clear lines and geometric figures
              </li>
              <li>
                <img src={Check} alt="check-icon" />
                Material expose like metals
              </li>
            </ul>
            <button className="discount__btn">Shop Now</button>
          </div>
          <div className="discount__rightContent">
            <div className="discount__rightContent-darkBG" />
            <div className="discount__rightContent-lightBG" />
            <img
              className="discount__rightContent-img"
              src={Headphones}
              alt="headphones-img"
              width={448}
              height={498}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
