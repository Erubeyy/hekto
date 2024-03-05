import Card from '../common/Card';
import { FtPagination, FeaturedIcons } from '../../assets/icons';
import { FeaturedCards } from '../../../data/ProductCards';

import './Featured.scss';

const Featured = () => {
  return (
    <>
      <section className="featured">
        <h2 className="featured__title">Featured Products</h2>
        <div className="featured__cards">
          {FeaturedCards.map((item) => {
            return (
              <div className="featured__cards-item" key={`Card ${item.title}`}>
                <img
                  className="featured__cards-icons"
                  src={FeaturedIcons}
                  alt=""
                />
                <button className="featured__cards-btn">View Details</button>
                <Card
                  image={item.image}
                  title={item.title}
                  code={item.code}
                  ogPrice={item.ogPrice}
                />
              </div>
            );
          })}
        </div>
        <img
          className="featured__pagination"
          src={FtPagination}
          alt="Pagination icon"
        />
      </section>
    </>
  );
};

export default Featured;
