import { TrendingCards } from '../../../data/ProductCards';
import Card from '../common/Card';

import './Trending.scss';

const Trending = () => {
  return (
    <>
      <div className="trending">
        <h2 className="trending__title">Trending Products</h2>
        <div className="trending__cards">
          {TrendingCards.map((item) => {
            return (
              <Card
                key={`Card ${item.title}`}
                image={item.image}
                title={item.title}
                ogPrice={item.ogPrice}
                discPrice={item.discPrice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trending;
