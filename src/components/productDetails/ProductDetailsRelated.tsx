import { RelatedProductsCards } from '../../../data/ProductCards';
import Card from '../common/Card';
import './ProductDetailsRelated.scss';

const ProductDetailsRelated = () => {
  return (
    <>
      <section className="productDetailsRelated">
        <h3 className="productDetailsRelated__title">Related Products</h3>
        <div className="productDetailsRelated__cards">
          {RelatedProductsCards.map((item) => {
            return (
              <div
                className="productDetailsRelated__cards-item"
                key={`Card ${item.title}`}
              >
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
      </section>
    </>
  );
};

export default ProductDetailsRelated;
