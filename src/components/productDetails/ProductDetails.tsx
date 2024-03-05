import { MdStar } from 'react-icons/md';
import { LuHeart } from 'react-icons/lu';
import { Product } from '../types';
import ProductDetailsDesc from './ProductDetailsDesc';
import ProductDetailsRelated from './ProductDetailsRelated';
import { CartContext } from '../../store/cart-context';

import './ProductDetails.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

type productType = {
  product: Product;
};

const ProductDetails: React.FC<productType> = ({ product }) => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  const handleAddProduct = () => {
    addProduct(product);
    navigate('../cart');
  };

  return (
    <div className="productDetails">
      <div className="productDetails__product">
        <div className="productDetails__imgs">
          <div className="productDetails__imgs-group">
            <img src={product.imageSet[1]} alt="main-product-small-img-1" />
            <img src={product.imageSet[2]} alt="main-product-small-img-2" />
            <img
              src={
                product.imageSet[3] ? product.imageSet[3] : product.imageSet[2]
              }
              alt="main-product-small-img-3"
            />
          </div>
          <img
            className="productDetails__imgs-main"
            src={product.imageSet[0]}
            alt="main-product-image"
          />
        </div>
        <div className="productDetails__product-info">
          <h3>{product.name}</h3>
          <div></div>
          <div className="productDetails__product-rating">
            {[...Array(5)].map((_item, index) => (
              <MdStar
                className="productDetails__product-rating-star"
                key={index}
                fill={
                  index < Math.round(product.rating.value)
                    ? '#f9ba00'
                    : '#e5e0fc'
                }
              />
            ))}
          </div>
          <div className="productDetails__product-price">
            <span className="productDetails__product-isPrice">
              ${product.price}
            </span>
            <span className="productDetails__product-wasPrice">
              ${product.wasPrice}
            </span>
          </div>
          <p className="productDetails__product-description">
            {product.description}
          </p>
          <div className="productDetails__product-footer">
            <button
              className="productDetails__product-addCart"
              onClick={handleAddProduct}
            >
              Add To Cart
            </button>
            <LuHeart className="productDetails__product-fav" />
          </div>
        </div>
      </div>
      <ProductDetailsDesc />
      <ProductDetailsRelated />
    </div>
  );
};

export default ProductDetails;
