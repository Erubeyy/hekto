import { LatestCards } from '../../../data/LatestCards';
import Card from '../common/latestCard/LaCard';
import { SaleBanner, LatestIcons } from '../../assets/icons';

import './Latest.scss';

const Latest = () => {
  return (
    <>
      <div className="latest">
        <h2 className="latest__title">Leatest Products</h2>
        <ul className="latest__menu">
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
        <div className="latest__cards">
          {LatestCards.map((item, index) => {
            return (
              <div className="latest__cards-item" key={`Card ${item.title}`}>
                <span
                  className="latest__cards-item-bannerText"
                  style={{ display: index !== 2 ? 'none' : 'inline-flex' }}
                >
                  Sale
                </span>
                <img
                  className="latest__cards-item-bannerBg"
                  style={{ display: index !== 2 ? 'none' : 'inline-flex' }}
                  src={SaleBanner}
                  alt="Sale-banner"
                />
                <img
                  className="latest__cards-item-icons"
                  style={{ display: index !== 1 ? 'none' : 'inline-flex' }}
                  src={LatestIcons}
                  alt="Latest-icons"
                />
                <Card
                  image={item.image}
                  title={item.title}
                  DiscPrice={item.DiscPrice}
                  OgPrice={item.OgPrice}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Latest;
